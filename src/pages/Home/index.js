import { Helmet } from 'react-helmet';

import PostList from 'components/PostList';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | WarmUp Challenge JS</title>
        <meta name='description' content='homepage' />
      </Helmet>

      <PostList />
    </>
  );
}
