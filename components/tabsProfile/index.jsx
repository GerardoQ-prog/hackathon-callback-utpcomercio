import { Tab, Tabs } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../assets/styles";

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
      fontFamily: "Inter",
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
        <AntTab label="Obras seguidas" icon={<VisibilityIcon />} />
        <AntTab label="Actividad" icon={<AddReactionIcon />} />
      </AntTabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </>
  );
};

export default TabsProfile;
