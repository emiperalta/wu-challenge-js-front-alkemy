const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const getAll = () => {
  return fetch(baseUrl).then(res => res.json());
};

const getOneById = id => {
  return fetch(`${baseUrl}/${id}`).then(res => {
    if (!res.ok) throw new Error('Post not found');
    return res.json();
  });
};

const addOne = ({ body, title }) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title }),
  }).then(res => res.json());
};

const updateOne = (id, { body, title }) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title }),
  }).then(res => res.json());
};

const deleteOne = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { addOne, deleteOne, getAll, getOneById, updateOne };
