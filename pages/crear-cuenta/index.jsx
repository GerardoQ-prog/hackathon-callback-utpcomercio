import Head from "next/head";
import React from "react";
import FormRegister from "../../components/formRegister";

const Register = () => {
  return (
    <div>
      <Head>
        <title>Crear cuenta</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormRegister />
    </div>
  );
};

export default Register;
