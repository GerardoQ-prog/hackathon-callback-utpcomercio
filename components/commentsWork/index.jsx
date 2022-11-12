import React from "react";
import { COLORS } from "../../assets/styles";
import { Title } from "../titles";
import TextStyle from "../textStyle";
import { ContainerCommentUser } from "./styled";
import { stringAvatar } from "../../helpers/comments";
import { Avatar } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";

const data = [
  {
    user: "Gerardo",
    comment: "Tengo sueño, tengo sueño, tengo sueño, tengo sueño",
    response: [
      {
        user: "Gerardo Quispe",
        comment: "Yo tambien Yo tambien",
      },
    ],
  },
  {
    user: "Gerardo Quispe 2 ",
    comment: "Tengo hambre, tengo hambre, tengo hambre",
  },
];

const CommentsWork = () => {
  return (
    <div>
      <Title background={COLORS.RED} color={COLORS.WHITE}>
        <CommentIcon style={{ marginRight: 10 }} /> Comentarios (12)
      </Title>
      {data.map((item, index) => {
        return (
          <>
            <ContainerCommentUser>
              <Avatar {...stringAvatar(item.user)}></Avatar>
              <TextStyle
                color={COLORS.TEXT}
                bold={400}
                type="h2"
                margin="0px 10px 0px 10px"
              >
                {item.user}
              </TextStyle>
            </ContainerCommentUser>
            <TextStyle color={COLORS.TEXT} bold={400} type="h3">
              {item.comment}
            </TextStyle>
            {item.response &&
              item.response.map((itemR, indexR) => {
                return (
                  <div style={{ padding: "10px 0px 10px 20px" }}>
                    <ContainerCommentUser>
                      <Avatar
                        sx={{ width: 30, height: 30 }}
                        {...stringAvatar(itemR.user)}
                      ></Avatar>
                      <TextStyle
                        color={COLORS.TEXT}
                        bold={400}
                        type="h3"
                        margin="0px 10px 0px 10px"
                      >
                        {itemR.user}
                      </TextStyle>
                    </ContainerCommentUser>
                    <TextStyle color={COLORS.TEXT} bold={400} type="h4">
                      {itemR.comment}
                    </TextStyle>
                  </div>
                );
              })}
          </>
        );
      })}
    </div>
  );
};

export default CommentsWork;
