import { useState } from 'react';

import usePosts from 'hooks/usePosts';

export default function PostForm() {
  const { addNewPost } = usePosts();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addNewPost({ title, body });
    setTitle('');
    setBody('');
  };

  const handleTitleChange = e => setTitle(e.target.value);
  const handleBodyChange = e => setBody(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            name='title'
            onChange={handleTitleChange}
            type='text'
            value={title}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            name='content'
            onChange={handleBodyChange}
            type='textarea'
            value={body}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
