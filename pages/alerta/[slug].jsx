import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../../components/layout";
import TextStyle from "../../components/textStyle";
import Header from "../../components/header";
import { getAlertId } from "../../services/map";
import Head from "next/head";

const ProblemSlug = ({ infoAlert }) => {
  return (
    <div>
      <Head>
        <title>{infoAlert?.description}</title>
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
          ALERTAS
        </TextStyle>
      </Layout>
      <Layout>
        <TextStyle bold={700} color={COLORS.BLUE} size="30px" sizeMobile="22px">
          {infoAlert?.description}
        </TextStyle>
        {/* <TrackingNumbers
          data={{
            countAlerts: infoWork?.countAlerts,
            countProblems: infoWork?.countProblems,
            countComments: infoWork?.comments?.length,
          }}
        /> */}
        {infoAlert?.files.map((item, index) => {
          return <img width="100%" src={item} key={index} />;
        })}
        {/* <InformationWork infoWork={infoWork} />
        <CommentsWork infoWork={infoWork} /> */}
      </Layout>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await getAlertId(slug);

  return {
    props: {
      infoAlert: response.data,
    },
  };
}

export default ProblemSlug;
