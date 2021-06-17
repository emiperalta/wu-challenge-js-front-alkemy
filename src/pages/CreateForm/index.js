import { Helmet } from 'react-helmet';

import PostForm from 'components/PostForm';

export default function CreateForm() {
  return (
    <>
      <Helmet>
        <title>Create Post | WarmUp Challenge JS</title>
        <meta name='description' content='create new post' />
      </Helmet>

      <PostForm />
    </>
  );
}
