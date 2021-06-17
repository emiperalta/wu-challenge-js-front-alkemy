import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create new post</Link>
        </nav>
      </div>
    </>
  );
}
