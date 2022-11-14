import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";
import { Hidden } from "@mui/material";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import ReportIcon from "@mui/icons-material/Report";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { parseCookies } from "nookies";

const Navigation = () => {
  const [value, setValue] = React.useState(0);

  const router = useRouter();

  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  return (
    <Hidden mdUp>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Inicio"
            onClick={() => router.push("/")}
            icon={<OtherHousesIcon />}
          />
          <BottomNavigationAction
            label="Reporta y Fiscaliza"
            icon={<ReportIcon />}
            onClick={() => router.push("/mapa")}
          />
          {user && (
            <BottomNavigationAction
              label="Mi Perfil"
              onClick={() => router.push("/perfil")}
              icon={<AccountBoxIcon />}
            />
          )}
        </BottomNavigation>
      </div>
    </Hidden>
  );
};

export default Navigation;
