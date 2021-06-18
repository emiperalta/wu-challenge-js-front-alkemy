import { createContext, useEffect, useState } from 'react';

import { getAll } from 'services/postApi';

const Context = createContext({});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAll()
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, [setPosts]);

  return <Context.Provider value={{ posts, setPosts }}>{children}</Context.Provider>;
};

export default Context;
