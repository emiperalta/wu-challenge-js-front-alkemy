import { useContext, useEffect } from 'react';

import PostContext from 'context/PostContext';

import * as postService from 'services/postApi';

const usePosts = () => {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    postService
      .getAll()
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, [setPosts]);

  const addNewPost = ({ title, body }) => {
    return postService
      .addOne({ title, body })
      .then(newPost => setPosts([...posts, newPost]))
      .catch(err => console.error(err));
  };

  const deleteOnePost = postId => {
    return postService
      .deleteOne(postId)
      .then(() => {
        setPosts([...posts.filter(p => p.id !== postId)]);
      })
      .catch(err => console.error(err));
  };

  return { addNewPost, deleteOnePost, posts, setPosts };
};

export default usePosts;
