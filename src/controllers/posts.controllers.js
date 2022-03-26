
import PostModel from "../models/Posts.js";

export const getPosts = async(req, res) => {
  const response = await PostModel.find();
  res.json(response)
};

export const getByIdPost = async(req, res) => {
  const { id } = req.params;
  try {
    const response = await PostModel.findById(id);
    res.json(response)
  } catch (error) {
    console.error(error);
  }
};

export const createPosts = async(req, res) => {
  const { title, description } = req.body;
  try {
    const newPost = new PostModel({ title,description });
    await newPost.save();

    res.json(newPost);
  } catch (error) {
    console.error(error);
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
    console.error(error);
  }
  
};

export const deletePosts = async(req, res) => {
  const { id } = req.params;
  try {
    const response = await PostModel.findByIdAndDelete(id);
    if(!response) return res.status(404).json({ code: 0, message: 'Not found', error: true })
    res.json({ response, message: 'Post deleting' });
  } catch (error) {
    console.error(error);
  }
};
