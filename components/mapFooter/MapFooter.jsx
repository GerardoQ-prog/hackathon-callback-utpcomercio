import { ContainerFooter } from "./styled"
import { Button,  } from "@mui/material"
import { Add as AddIcon } from '@mui/icons-material';
import { COLORS } from "../../assets/styles";

const MapFooter = () => {
  return (
    <>
      <ContainerFooter>
        <Button style={{ background: COLORS.RED }} variant="contained" disableElevation startIcon={<AddIcon />}>
          Reportar problema
        </Button>
      </ContainerFooter>
    </>
  )
}

export default MapFooter