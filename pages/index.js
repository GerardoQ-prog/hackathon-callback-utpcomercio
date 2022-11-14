import Layout from "../components/layout";
import { COLORS } from "../assets/styles";
import Header from "../components/header";
import SliderArticles from "../components/sliderArticles";
import HomeWorks from "../components/homeWorks";
import Navigation from "../components/navigation";
import ContainerNotices from "../components/containerNotices";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kuska</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout margin="0px" backgorund={COLORS.RED}>
        <Header />
        <SliderArticles />
      </Layout>
      <HomeWorks />
      <ContainerNotices />
      <Navigation />
    </div>
  );
}
