import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <nav>
          <Link to='/'>
            <h2>Home</h2>
          </Link>
          <Link to='/create'>
            <h2>Create new post</h2>
          </Link>
        </nav>
      </div>
    </>
  );
}
