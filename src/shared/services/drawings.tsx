import axios from 'axios';

const baseUrl = 'http://localhost:3001/drawings';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOneRandom = async () => {
  const allDrawings = await getAll();
  return allDrawings[Math.floor(Math.random() * allDrawings.length)];
};

export default { getAll, getOneRandom };
