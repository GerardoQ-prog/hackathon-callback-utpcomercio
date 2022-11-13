import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import { COLORS } from "../assets/styles";
import Header from "../components/header";
import SliderArticles from "../components/sliderArticles";
import BoxWork from "../components/boxWork";
import HomeWorks from "../components/homeWorks";
import Navigation from "../components/navigation";

export default function Home() {
  return (
    <div>
      <Layout margin="0px" backgorund={COLORS.RED}>
        <Header />
        <SliderArticles />
      </Layout>
      <HomeWorks />
      <Navigation />
    </div>
  );
}
