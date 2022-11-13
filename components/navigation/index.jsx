import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useRouter } from "next/router";
import { Hidden } from "@mui/material";

const Navigation = () => {
  const [value, setValue] = React.useState(0);

  const router = useRouter();

  return (
    <Hidden mdUp>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log("event", event, newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Inicio"
            onClick={() => router.push("/")}
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Reporta y Fiscaliza"
            icon={<FavoriteIcon />}
            onClick={() => router.push("/mapa")}
          />
          <BottomNavigationAction
            label="Mi Perfil"
            onClick={() => router.push("/perfil")}
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </div>
    </Hidden>
  );
};

export default Navigation;
