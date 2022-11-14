import Head from "next/head";
import React from "react";
import { COLORS } from "../../assets/styles";
import ContainerNotices from "../../components/containerNotices";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import SliderArticles from "../../components/sliderArticles";

const Municipality = () => {
  return (
    <div>
      <Head>
        <title>Kuska - Municipalidad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout margin="0px" backgorund={COLORS.RED}>
        <Header />
        <SliderArticles />
      </Layout>
      <ContainerNotices />
      <Navigation />
    </div>
  );
};

export default Municipality;
