const headers = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

const headersFormData = (token, size) => ({
  "Content-Type": `multipart/form-data; boundary=${size}`,
  Authorization: `Bearer ${token}`,
});

const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headers(),
  });
  return await response.json();
};

const post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers(),
    body,
  });
  return await response.json();
};

const postFormdata = async (url, body, token, size) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headersFormData(token, size),
    body,
  });
  return await response.json();
};

const put = async (url, body, token) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: headers(token),
    body,
  });
  return await response.json();
};

const _delete = async (url, token) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: headers(token),
  });
  return await response.json();
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
  postFormdata,
};
