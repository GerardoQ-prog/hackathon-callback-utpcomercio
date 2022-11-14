import Head from "next/head";
import React from "react";
import { COLORS } from "../../assets/styles";
import FormProblem from "../../components/formProblem";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import TextStyle from "../../components/textStyle";

const ReportProblem = () => {
  return (
    <div>
      <Head>
        <title>Reportar problema</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout backgorund={COLORS.RED} margin="0px">
        <Header />
        <TextStyle
          bold={500}
          color={COLORS.WHITE}
          size="42px"
          sizeMobile="30px"
          margin="10px 0px"
        >
          REPORTAR ALERTA
        </TextStyle>
      </Layout>
      <Layout>
        <FormProblem />
      </Layout>
      <Navigation />
    </div>
  );
};

export default ReportProblem;
