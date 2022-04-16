
import PostModel from "../models/Posts.js";
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra';

export const getPosts = async(req, res) => {
  try {
    const response = await PostModel.find();
    res.json(response)
  } catch (error) {
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message
    })
  }
};

export const getByIdPost = async(req, res) => {
  const { id } = req.params;
  try {
    const response = await PostModel.findById(id);
    if(!response) return res.status(404);
    res.json(response)
  } catch (error) {
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message
    })
  }
};

export const createPosts = async(req, res) => {
  const { title, description } = req.body;
  try {

    // console.log(req.files.image);

    const image = await uploadFile(req.files.image);
    await fs.remove(req.files.image.tempFilePath);

    const newPost = new PostModel({ title, description, image });
    await newPost.save();

    res.json(newPost);
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message ? error.message : error
    })
  }
};


export const updatePosts = async(req, res) => {
  const { id } = req.params;
  try {

    const getPost = await PostModel.findById(id);
    if(getPost.image.public_id) await deleteImage(getPost.image.public_id);
    
    const image = await uploadFile(req.files.image);
    await fs.remove(req.files.image.tempFilePath);
    req.body.image = image;

    const response = await PostModel.findByIdAndUpdate(
      id, req.body, { new: true }
    );

    res.json(response)
  } catch (error) {
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message
    })
  }
  
};

export const deletePosts = async(req, res) => {
  const { id } = req.params;
  try {
    const response = await PostModel.findByIdAndDelete(id);
    if(!response) return res.status(404).json({ code: 0, message: 'Not found', error: true });
    
    if(response.image.public_id) await deleteImage(response.image.public_id);
    
    res.json({ response, message: 'Post deleting' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message
    })
  }
};


const uploadFile = async(imageFile) => {
  let imageObj;
  if(imageFile) {
    const fileResponse = await uploadImage(imageFile.tempFilePath);
    imageObj = {
      public_id: fileResponse.public_id,
      url: fileResponse.secure_url,
    }
  }
  return imageObj;
}
