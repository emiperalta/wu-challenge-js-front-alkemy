import { createContext, useState } from 'react';

const Context = createContext({});

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return <Context.Provider value={{ posts, setPosts }}>{children}</Context.Provider>;
};

export default Context;
