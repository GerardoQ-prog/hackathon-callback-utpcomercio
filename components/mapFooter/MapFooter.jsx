import { ContainerFooter } from "./styled";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { COLORS } from "../../assets/styles";
import { ButtonPrimary } from "../button";
import Link from "next/link";
import { parseCookies } from "nookies";

const MapFooter = () => {
  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;
  return (
    <>
      <ContainerFooter>
        <Link href={"/reportar-problema"}>
          <ButtonPrimary
            background={COLORS.RED}
            color={COLORS.WHITE}
            width="200px"
          >
            <AddIcon />
            {user?.typeUser.name === "Ciudadano"
              ? "Reportar alerta"
              : "Crear nueva obra"}
          </ButtonPrimary>
        </Link>
      </ContainerFooter>
    </>
  );
};

export default MapFooter;
