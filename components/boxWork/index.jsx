import React from "react";
import { COLORS } from "../../assets/styles";
import TextStyle from "../textStyle";
import TrackingNumbers from "../trackingNumbers";
import { BoxImage, BoxText, ContainerBox } from "./styled";

const BoxWork = ({ data }) => {
  return (
    <ContainerBox>
      <BoxImage>
        <img src={data?.img} />
      </BoxImage>
      <BoxText>
        <TextStyle bold={400} size="14px" sizeMobile="11px" color={COLORS.GREY}>
          {data?.district}
        </TextStyle>
        <TextStyle bold={700} type="h1">
          {data?.title}
        </TextStyle>
        <TrackingNumbers
          data={{
            countComments: data?.countComments,
            countProblems: data?.countProblems,
            countAlerts: data?.countAlerts,
          }}
        />
      </BoxText>
    </ContainerBox>
  );
};

export default BoxWork;
