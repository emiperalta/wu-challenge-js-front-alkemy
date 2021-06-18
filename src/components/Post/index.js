import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';

import './styles.css';

export default function Post({ handleDelete, post }) {
  return (
    <div className='postItem'>
      <p>{post.title}</p>
      <section className='links'>
        <Link to={`/${post.id}`}>
          <button>
            <CgDetailsMore />
          </button>
        </Link>
        <div className='actions'>
          <Link to={`/edit/${post.id}`}>
            <button>
              <FaRegEdit />
            </button>
          </Link>
          <button onClick={() => handleDelete(post.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </section>
    </div>
  );
}
