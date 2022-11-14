import React from "react";
import { COLORS } from "../../assets/styles";
import { Title } from "../titles";
import TextStyle from "../textStyle";
import { ContainerCommentUser } from "./styled";
import { stringAvatar } from "../../helpers/comments";
import CommentIcon from "@mui/icons-material/Comment";
import { Avatar, Button, Dialog } from "@mui/material";
import { parseCookies } from "nookies";
import { ButtonPrimary, ButtonSecondary } from "../button";
import { InputText } from "../input";
import { useForm } from "../../hooks/useForm";
import { postBuildingComment } from "../../services/comments";

const CommentsWork = ({ infoWork }) => {
  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  const [open, setOpen] = React.useState(false);

  const [files, setFiles] = React.useState([]);

  const { form, onChange } = useForm({
    newComment: "",
  });

  const [commentsWork, setCommentsWork] = React.useState(
    infoWork.comments || []
  );

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onLoadImage = async (e) => {
    const filesNew = e.target.files;
    console.log("files", filesNew[0]);
    const result = await toBase64(filesNew[0]);
    const formatResult = result
      .replace("data:image/png;base64,", "")
      .replace("data:image/jpeg;base64,", "");
    setFiles([
      ...files,
      {
        content: formatResult,
        mimetype: filesNew[0].type,
        name: filesNew[0].name,
      },
    ]);
  };

  const handleNewComment = async () => {
    const response = await postBuildingComment(infoWork.id, {
      comment: form.newComment,
      files,
      userId: user.id,
    });

    setCommentsWork([...commentsWork, response.data]);
    setOpen(false);
  };

  return (
    <div>
      <Title background={COLORS.RED} color={COLORS.WHITE}>
        <CommentIcon style={{ marginRight: 10 }} fontSize="small" /> Comentarios
        ({commentsWork ? commentsWork.length : 0})
      </Title>
      {commentsWork &&
        commentsWork.map((item, index) => {
          return (
            <>
              <ContainerCommentUser key={index}>
                <Avatar {...stringAvatar(item.user.fullName)}></Avatar>
                <TextStyle
                  color={COLORS.TEXT}
                  bold={400}
                  type="h2"
                  margin="0px 10px 0px 10px"
                >
                  {item.user.fullName}
                </TextStyle>
              </ContainerCommentUser>
              <TextStyle color={COLORS.TEXT} bold={400} type="h3">
                {item.comment}
              </TextStyle>
              {item.files &&
                item.files.map((itemFile, indexFile) => {
                  return (
                    <img
                      src={itemFile}
                      alt="image"
                      width="200px"
                      style={{ margin: 20 }}
                    />
                  );
                })}
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
      {user && (
        <>
          <ButtonPrimary
            background={COLORS.RED_2}
            color={COLORS.WHITE}
            onClick={() => setOpen(!open)}
          >
            Crear comentario
          </ButtonPrimary>
          <Dialog onClose={() => setOpen(!open)} open={open}>
            <div style={{ padding: 50 }}>
              <TextStyle bold={900} type="h1">
                Crear comentario
              </TextStyle>
              <InputText
                placeholder={"Comentario"}
                name="newComment"
                value={form.newComment}
                onChange={onChange}
              />
              <Button
                variant="contained"
                component="label"
                style={{
                  background: "transparent",
                  color: COLORS.RED_2,
                  borderRadius: "5px",
                  padding: "0px 3%",
                  outline: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "initial",
                  width: "100%",
                  border: `1px solid ${COLORS.RED_2}`,
                }}
              >
                <p>Ingresar foto</p>
                <input
                  type="file"
                  hidden
                  onChange={onLoadImage}
                  accept="image/png, image/gif, image/jpeg"
                />
              </Button>
              {files.length > 0 &&
                files.map((item, index) => {
                  return (
                    <TextStyle
                      bold={400}
                      color={COLORS.RED}
                      type="h3"
                      margin="10px 0px"
                      key={index}
                    >
                      {item.name}
                    </TextStyle>
                  );
                })}
              <ButtonPrimary
                background={COLORS.RED_2}
                color={COLORS.WHITE}
                onClick={handleNewComment}
              >
                Crear
              </ButtonPrimary>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default CommentsWork;
