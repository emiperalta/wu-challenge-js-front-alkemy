const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const getAll = async () => {
  const res = await fetch(baseUrl);
  return await res.json();
};

export { getAll };
