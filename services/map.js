import axios from "axios";

export const allDataMap = async () => {
  const url = `https://a6ev4vvink.execute-api.us-east-1.amazonaws.com/maps/all`;
  const { data, status } = await axios.get(url);
  return data;
};
