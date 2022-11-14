import { Avatar } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import { stringAvatar } from "../../helpers/comments";
import { fullDate } from "../../helpers/date";
import TextStyle from "../textStyle";

const CardNotice = ({ data }) => {
  return (
    <div className="card__notice">
      <div className="header">
        <TextStyle bold={400} color="#1C1C1C" type="h3" margin="10px 0px">
          {data?.text}
        </TextStyle>
        <div className="author">
          <div className="avatar">
            <Avatar {...stringAvatar(data?.user)} />
            <span> {data?.user}</span>
          </div>
          <span className="time">{fullDate(data?.created)}</span>
        </div>
      </div>
      <div className="footer">
        <img src={data?.img} alt="" />
        <div className="footer__description">
          <span>Comentario sobre la obra</span>
          <TextStyle bold={400} color={COLORS.WHITE} type="h3">
            {data?.building}
          </TextStyle>
        </div>
      </div>
    </div>
  );
};

export default CardNotice;
