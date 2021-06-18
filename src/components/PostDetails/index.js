import useSinglePost from 'hooks/useSinglePost';

export default function PostDetails({ postId }) {
  const { error, post } = useSinglePost(postId);

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
