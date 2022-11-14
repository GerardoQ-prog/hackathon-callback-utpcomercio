import axios from "axios";

export const allDataMap = async () => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/maps/all`;
  const { data, status } = await axios.get(url);
  return data;
};

export const getBuildingId = async (id) => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/buildings/${id}`;
  const { data, status } = await axios.get(url);
  return data;
};

export const getAlertId = async (id) => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/problems/${id}`;
  const { data, status } = await axios.get(url);
  return data;
};

export const createProblem = async (body) => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/problems`;
  const { data, status } = await axios.post(url, body);
  return data;
};
