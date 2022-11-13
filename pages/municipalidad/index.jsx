import React from "react";
import MuniLayout from "../../layouts/MuniLayout";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WarningIcon from '@mui/icons-material/Warning';
import Link from "next/link"

const TitleHome = ({ text = "" }) => {
  return (
    <h1 className="title__home">
      Hola,
      <span>{ text }</span>
    </h1>
  )
}

const CardAlert = ({ text = "", href = "#" }) => {
  return (
    <div className="card__alert"> 
      <div className="icon">
        <WarningIcon style={{ color: '#F87F06' }} />
      </div>
      <div className="content">
        <p>{ text || 'Lee nuestro reporte mensual de  seguimiento de presupuestos distritales de noviembre.' } </p>
        <Link href={href}>
          <a className="alert__link">{'Leer más >'}</a>
        </Link>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className="header__home container__content">
      <div className="header__top">
        <TitleHome text="MUNSJL" />
        <NotificationsActiveIcon style={{ width: '18px', height: '18px' }} />
      </div>
      <CardAlert />
    </div>
  )
}

const Municipality = () => {
  return (
    <MuniLayout size="lg"
      header={<Header />}
    >
      muni
    </MuniLayout>
  );
};

export default Municipality;
