import React from "react";
import { notices } from "../../api/home";
import CardNotice from "../cardNotice";
import Layout from "../layout";
import TextStyle from "../textStyle";

const ContainerNotices = () => {
  return (
    <Layout>
      <TextStyle bold={700} type="h2">
        Lo ultimo
      </TextStyle>
      {notices.map((item, index) => {
        return <CardNotice key={index} data={item} />;
      })}
    </Layout>
  );
};

export default ContainerNotices;
