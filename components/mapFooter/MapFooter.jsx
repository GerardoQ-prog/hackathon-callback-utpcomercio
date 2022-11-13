import { ContainerFooter } from "./styled";
import { Button } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { COLORS } from "../../assets/styles";
import { ButtonPrimary } from "../button";
import Link from "next/link";

const MapFooter = () => {
  return (
    <>
      <ContainerFooter>
        <Link href={"/reportar-problema"}>
          <ButtonPrimary
            background={COLORS.RED}
            color={COLORS.WHITE}
            width="200px"
          >
            <AddIcon /> Reportar problema
          </ButtonPrimary>
        </Link>
      </ContainerFooter>
    </>
  );
};

export default MapFooter;
