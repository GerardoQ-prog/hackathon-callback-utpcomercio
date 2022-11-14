import { parseCookies, setCookie, destroyCookie } from "nookies";

export const authLogin = (email, listUsers, router) => {
  const userSelect = listUsers.find((item) => item.email === email);
  setCookie(null, "user", JSON.stringify(userSelect), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });
  if (userSelect.typeUser.name === "Ciudadano") {
    router.push("/");
  }
  if (userSelect.typeUser.name === "Municipalidad") {
    router.push("/municipalidad");
  }
};

export const authLogout = (router) => {
  destroyCookie(null, "user");
  router.push("/");
};
