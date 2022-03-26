


export const getPosts = (req, res) => res.json({ data: [{ id: 1, name: 'Ludwing' }] });

export const getByIdPost = (req, res) => res.json({ data: 'Getting a post' });

export const createPosts = (req, res) => res.json({ data: 'New post created' });

export const updatePosts = (req, res) => res.json({ data: 'Updating a post' });

export const deletePosts = (req, res) => res.json({ data: 'Deleting a post' });
