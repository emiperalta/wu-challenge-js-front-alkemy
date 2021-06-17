import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <>
      <div>
        <span>{post.title}</span>
        <button>
          <Link to={`/${post.id}`}>details</Link>
        </button>
      </div>
    </>
  );
}
