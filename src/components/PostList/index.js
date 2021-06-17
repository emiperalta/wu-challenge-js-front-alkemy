import { useEffect, useState } from 'react';

import { deleteOne, getAll } from 'services/postApi';

import Post from 'components/Post';

import './styles.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll().then(data => setPosts(data));
  }, []);

  const handleDelete = postId => {
    deleteOne(postId).then(() => {
      setPosts([...posts.filter(p => p.id !== postId)]);
    });
  };

  return (
    <>
      <div className='list'>
        {posts.map(post => (
          <Post handleDelete={handleDelete} key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
