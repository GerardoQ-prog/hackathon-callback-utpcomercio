export const fullDate = (date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let minute = date.getMinutes();
  let hour = date.getHours();

  return `${day}/${month}/${year} ${hour}:${minute}`;
};
