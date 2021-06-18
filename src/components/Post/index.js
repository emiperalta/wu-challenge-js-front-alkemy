import { Link } from 'react-router-dom';

import './styles.css';

export default function Post({ handleDelete, post }) {
  return (
    <div className='postItem'>
      <p>{post.title}</p>
      <section className='links'>
        <button>
          <Link to={`/${post.id}`}>Details</Link>
        </button>
        <div className='actions'>
          <button>
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      </section>
    </div>
  );
}
