import { Helmet } from 'react-helmet';

import PostDetails from 'components/PostDetails';

export default function Details(props) {
  const { id } = props.match.params;

  return (
    <>
      <Helmet>
        <title>Details | WarmUp Challenge JS</title>
        <meta name='description' content='post description' />
      </Helmet>

      <PostDetails postId={id} />
    </>
  );
}
