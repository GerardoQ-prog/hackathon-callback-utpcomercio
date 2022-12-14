import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../../components/layout";
import TextStyle from "../../components/textStyle";
import TrackingNumbers from "../../components/trackingNumbers";
import InformationWork from "../../components/informationWork";
import CommentsWork from "../../components/commentsWork";
import Header from "../../components/header";
import { getBuildingId } from "../../services/map";
import Head from "next/head";

const WorkSlug = ({ infoWork }) => {
  return (
    <div>
      <Head>
        <title>{infoWork?.name}</title>
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
          OBRAS
        </TextStyle>
      </Layout>
      <Layout>
        <TextStyle bold={500} color={COLORS.RED} type="h3" margin="10px 0px">
          {infoWork?.user?.fullName}
        </TextStyle>
        <TextStyle bold={700} color={COLORS.BLUE} size="30px" sizeMobile="22px">
          {infoWork?.name}
        </TextStyle>
        <TrackingNumbers
          data={{
            countAlerts: infoWork?.countAlerts,
            countProblems: infoWork?.countProblems,
            countComments: infoWork?.comments?.length,
          }}
        />
        {infoWork?.images.map((item, index) => {
          return <img width="100%" src={item} key={index} />;
        })}
        <InformationWork infoWork={infoWork} />
        <CommentsWork infoWork={infoWork} />
      </Layout>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const response = await getBuildingId(slug);

  return {
    props: {
      infoWork: response.data,
    },
  };
}

export default WorkSlug;
