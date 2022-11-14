import Head from "next/head";
import React from "react";
import FormLogin from "../../components/formLogin";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Iniciar sesión</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormLogin />
    </div>
  );
};

export default Login;
