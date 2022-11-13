import React from "react";
import { popularWorks } from "../../api/home";
import BoxWork from "../boxWork";
import Layout from "../layout";
import TextStyle from "../textStyle";

const HomeWorks = () => {
  return (
    <Layout>
      <TextStyle bold={700} type="h1">
        Lo más popular
      </TextStyle>
      {popularWorks.map((item, index) => {
        return <BoxWork key={index} data={item} />;
      })}
    </Layout>
  );
};

export default HomeWorks;
