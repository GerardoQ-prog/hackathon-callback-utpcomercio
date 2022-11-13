export const authLogin = (email, listUsers, router) => {
  const userSelect = listUsers.find((item) => item.email === email);
  localStorage.setItem("user", JSON.stringify(userSelect));
  if (userSelect.typeUser.name === "Ciudadano") {
    router.push("/");
  }
  if (userSelect.typeUser.name === "Municipalidad") {
    router.push("/municipalidad");
  }
};

export const authLogout = (router) => {
  localStorage.removeItem("user");
  router.push("/");
};
