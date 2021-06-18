import { useContext } from 'react';

import PostContext from 'context/PostContext';

import * as postService from 'services/postApi';

const usePosts = () => {
  const { posts, setPosts } = useContext(PostContext);

  const addNewPost = ({ body, title }) => {
    return postService
      .addOne({ body, title })
      .then(newPost => setPosts([...posts, newPost]))
      .catch(err => console.error(err));
  };

  const updateOnePost = (id, { body, title }) => {
    return postService
      .updateOne(id, { body, title })
      .then(res => setPosts([...posts.map(p => (p.id === Number(id) ? res : p))]))
      .catch(err => console.error(err));
  };

  const deleteOnePost = postId => {
    return postService
      .deleteOne(postId)
      .then(() => setPosts([...posts.filter(p => p.id !== postId)]))
      .catch(err => console.error(err));
  };

  return {
    addNewPost,
    deleteOnePost,
    posts,
    setPosts,
    updateOnePost,
  };
};

export default usePosts;
