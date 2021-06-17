import { useEffect, useState } from 'react';

import { getOneById } from 'services/postApi';

export default function PostDetails({ postId }) {
  const [post, setPost] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getOneById(postId)
      .then(res => setPost(res))
      .catch(err => setError('' + err));
  }, [postId]);

  if (error) {
    return <h5 style={{ color: 'red' }}>{error}</h5>;
  }

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
