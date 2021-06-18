import { useEffect, useState } from 'react';

import { getOneById } from 'services/postApi';

const useSinglePost = postId => {
  const [post, setPost] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getOneById(postId)
      .then(res => setPost({ ...res }))
      .catch(err => setError('' + err));
  }, [postId]);

  return { error, post };
};

export default useSinglePost;
