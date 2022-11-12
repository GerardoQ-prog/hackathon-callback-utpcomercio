import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
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
        <WarningAmberIcon />
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
