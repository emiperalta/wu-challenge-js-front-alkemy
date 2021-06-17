import { Helmet } from 'react-helmet';

export default function Details(props) {
  console.log(props.match.params.id);
  return (
    <>
      <Helmet>
        <title>Details | WarmUp Challenge JS</title>
        <meta name='description' content='post description' />
      </Helmet>
    </>
  );
}
