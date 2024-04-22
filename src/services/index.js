import axios from "axios";
const username = "Temitope-Ajepe";
const token = import.meta.env.VITE_REACT_APP_API_TOKEN;

// create a new repository
const createRepository = async (data) => {
  return await axios.post("https://api.github.com/user/repos", data, {
    headers: { Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json" },
  });
};

const updateRepository = async (name, data) => {
  return await axios.patch(
    `https://api.github.com/repos/${username}/${name}`,
    data,
    {
      headers: { Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json" },
    }
  );
};

const deleteRepository = async (name) => {
  return await axios.delete(
    `https://api.github.com/repos/${username}/${name}`,
    {
      headers: { Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json" },
    }
  );
};

const allRepositories = async (page = 1, perPage = 5) => {
  return await axios.get(`https://api.github.com/users/${username}/repos`, {
    headers: { Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github.v3+json" },
    params: {
      page,
      per_page: perPage,
    },
  });
};

const singleRepository = async (id) => {
  return await axios.get(
    `https://api.github.com/repositories/${id}`,
    {
      headers: { Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json" },
    }
  );
};

export {
  createRepository,
  updateRepository,
  deleteRepository,
  allRepositories,
  singleRepository,
};

    