import { Helmet } from 'react-helmet';

export default function EditForm(props) {
  const { id } = props.match.params;

  return (
    <>
      <Helmet>
        <title>Edit Post | WarmUp Challenge JS</title>
        <meta name='description' content='edit post' />
      </Helmet>
    </>
  );
}
