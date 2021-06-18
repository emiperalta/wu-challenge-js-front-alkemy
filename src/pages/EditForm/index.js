import { Helmet } from 'react-helmet';

import PostForm from 'components/PostForm';

export default function EditForm(props) {
  const { id } = props.match.params;

  return (
    <>
      <Helmet>
        <title>Edit Post | WarmUp Challenge JS</title>
        <meta name='description' content='edit post' />
      </Helmet>

      <PostForm postId={id} />
    </>
  );
}
