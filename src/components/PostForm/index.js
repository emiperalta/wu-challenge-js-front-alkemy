import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import usePosts from 'hooks/usePosts';

export default function PostForm({ postId }) {
  const { addNewPost, posts, updateOnePost } = usePosts();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const history = useHistory();

  const postToEdit = postId ? posts.find(p => p.id === Number(postId)) : null;

  useEffect(() => {
    if (postToEdit) {
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
    }
  }, [postToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    postId ? updateOnePost(postId, { body, title }) : addNewPost({ body, title });
    setTitle('');
    setBody('');
    history.push('/');
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
