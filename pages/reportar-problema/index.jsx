import React from "react";
import { COLORS } from "../../assets/styles";
import FormProblem from "../../components/formProblem";
import Layout from "../../components/layout";
import TextStyle from "../../components/textStyle";

const ReportProblem = () => {
  return (
    <div>
      <Layout backgorund={COLORS.RED}>
        <TextStyle
          bold={500}
          color={COLORS.WHITE}
          size="42px"
          sizeMobile="30px"
          margin="10px 0px"
        >
          REPORTAR PROBLEMA
        </TextStyle>
      </Layout>
      <Layout>
        <FormProblem />
      </Layout>
    </div>
  );
};

export default ReportProblem;
