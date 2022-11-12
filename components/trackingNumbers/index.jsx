import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CommentIcon from "@mui/icons-material/Comment";
import TextStyle from "../textStyle";
import { COLORS } from "../../assets/styles";
import { ContainerNumber, ContainerTracking } from "./styled";

const TrackingNumbers = () => {
  return (
    <ContainerTracking>
      <ContainerNumber>
        <VisibilityIcon />
        <TextStyle bold={400} color={COLORS.TEXT} type="h4" margin="0px 5px">
          312
        </TextStyle>
      </ContainerNumber>
      <ContainerNumber>
        <ReportProblemOutlinedIcon />
        <TextStyle bold={400} color={COLORS.TEXT} type="h4" margin="0px 5px">
          2
        </TextStyle>
      </ContainerNumber>
      <ContainerNumber>
        <CommentIcon />
        <TextStyle bold={400} color={COLORS.TEXT} type="h4" margin="0px 5px">
          12
        </TextStyle>
      </ContainerNumber>
    </ContainerTracking>
  );
};

export default TrackingNumbers;
