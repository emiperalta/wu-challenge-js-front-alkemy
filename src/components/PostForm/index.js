import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { GrAdd, GrUpdate } from 'react-icons/gr';

import usePosts from 'hooks/usePosts';

import './styles.css';

export default function PostForm({ postId }) {
  const { addNewPost, posts, updateOnePost } = usePosts();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');

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

    !body ? setBodyError('Post content must not be empty') : setBodyError('');
    !title ? setTitleError('Post title must not be empty') : setTitleError('');

    if (body && title) {
      postId ? updateOnePost(postId, { body, title }) : addNewPost({ body, title });
      setTitle('');
      setBody('');
      history.push('/');
    }
  };

  const handleTitleChange = e => setTitle(e.target.value);
  const handleBodyChange = e => setBody(e.target.value);

  return (
    <>
      <h2 className='title'>{postToEdit ? 'Update post' : 'Create post'}</h2>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>Title</label>
            <input
              name='title'
              onChange={handleTitleChange}
              type='text'
              value={title}
            />
            {titleError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{titleError}</span>
            )}
          </div>
          <div className='form-group'>
            <label>Body</label>
            <textarea
              name='content'
              onChange={handleBodyChange}
              type='textarea'
              value={body}
            />
            {bodyError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{bodyError}</span>
            )}
          </div>
          <button type='submit'>
            {postToEdit ? (
              <>
                <GrUpdate />
                Update
              </>
            ) : (
              <>
                <GrAdd />
                Add
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}
