import axios from "axios";

export const postBuildingComment = async (id, body) => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/comments/buildings/${id}`;
  const { data, status } = await axios.post(url, body);
  return data;
};

export const postAlertComment = async (id) => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/comments/problems/${id}`;
  const { data, status } = await axios.get(url);
  return data;
};
