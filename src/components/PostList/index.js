import { useEffect, useState } from 'react';

import { getAll } from 'services/postApi';

import Post from 'components/Post';

import './styles.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll().then(data => setPosts(data));
  }, []);

  return (
    <>
      <div className='list'>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
