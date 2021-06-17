import usePosts from 'hooks/usePosts';

import Post from 'components/Post';

import './styles.css';

export default function Home() {
  const { deleteOnePost, posts } = usePosts();

  const handleDelete = postId => {
    deleteOnePost(postId);
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
