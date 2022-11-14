import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { COLORS } from "../../assets/styles";
import TextStyle from "../textStyle";
import { ContainerInformation } from "./styled";
import { styled, Tab, Tabs } from "@mui/material";
import {
  followerWorks,
  notificationCiudadano,
  notificationMunicipalidad,
} from "../../api/profile";
import BoxWork from "../boxWork";
import { fullDate } from "../../helpers/date";
import { parseCookies } from "nookies";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `scrollable-tab-${index}`,
    "aria-controls": `scrollable-tabpanel-${index}`,
  };
}

const TabsProfile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const AntTabs = styled(Tabs)({
    borderBottom: "1px solid #e8e8e8",
    "& .MuiTabs-indicator": {
      backgroundColor: COLORS.RED,
    },
  });

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      minWidth: 0,
      [theme.breakpoints.up("sm")]: {
        minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      color: "rgba(0, 0, 0, 0.85)",
      fontFamily: "Montserrat",
      "&:hover": {
        color: COLORS.RED,
        opacity: 1,
      },
      "&.Mui-selected": {
        color: COLORS.RED,
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&.Mui-focusVisible": {
        backgroundColor: "#d1eaff",
      },
    })
  );

  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  return (
    <>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <AntTab label="Notificaciones" icon={<NotificationsIcon />} />
        <AntTab
          label={
            user?.typeUser.name === "Municipalidad"
              ? "Obras registradas"
              : "Obras seguidas"
          }
          icon={<VisibilityIcon />}
        />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <div>
          {user?.typeUser.name === "Ciudadano" &&
            notificationCiudadano.map((item, index) => {
              return (
                <ContainerInformation key={index}>
                  <TextStyle color={COLORS.BLUE} bold={900} type="h1">
                    {item.title}
                  </TextStyle>
                  <TextStyle color={COLORS.TEXT} bold={400} type="h4">
                    {fullDate(item.created)}
                  </TextStyle>
                  <TextStyle color={COLORS.TEXT} bold={400} type="h3">
                    {item.description}
                  </TextStyle>
                </ContainerInformation>
              );
            })}
          {user?.typeUser.name === "Municipalidad" &&
            notificationMunicipalidad.map((item, index) => {
              return (
                <ContainerInformation key={index}>
                  <TextStyle color={COLORS.BLUE} bold={900} type="h1">
                    {item.title}
                  </TextStyle>
                  <TextStyle color={COLORS.TEXT} bold={400} type="h4">
                    {fullDate(item.created)}
                  </TextStyle>
                  <TextStyle color={COLORS.TEXT} bold={400} type="h3">
                    {item.description}
                  </TextStyle>
                </ContainerInformation>
              );
            })}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {followerWorks.map((item, index) => {
          return <BoxWork data={item} key={index} />;
        })}
      </TabPanel>
    </>
  );
};

export default TabsProfile;
