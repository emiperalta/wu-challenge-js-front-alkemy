import usePosts from 'hooks/usePosts';

import './styles.css';

export default function PostDetails({ postId }) {
  const { posts } = usePosts();

  const postExits = postId ? posts.find(p => p.id === Number(postId)) : null;

  if (!postExits) {
    return <h5 className='error'>Post not found</h5>;
  }

  return (
    <div className='postDetails'>
      <h3>{postExits.title}</h3>
      <p>{postExits.body}</p>
    </div>
  );
}
