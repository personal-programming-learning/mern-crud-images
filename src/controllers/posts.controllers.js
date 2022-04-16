
import PostModel from "../models/Posts.js";

export const getPosts = async(req, res) => {
  try {
    throw new Error('My new error')
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
    const newPost = new PostModel({ title,description });
    await newPost.save();

    res.json(newPost);
  } catch (error) {
    return res.status(500).json({
      error: true,
      code: 0,
      message: error.message
    })
  }
};


export const updatePosts = async(req, res) => {
  const { id } = req.params;
  try {
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
    if(!response) return res.status(404).json({ code: 0, message: 'Not found', error: true })
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
