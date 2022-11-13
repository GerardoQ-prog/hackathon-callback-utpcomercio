import React from "react";
import MuniLayout from "../../layouts/MuniLayout";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WarningIcon from '@mui/icons-material/Warning';
import Link from "next/link"
import { H6 } from "../../components/admin/typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContainerNotification } from "../../components/header/styled";
import { Avatar } from "@mui/material";

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

const SwiperCards  = ({ list = []}) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        2048: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      }}
    >
      {list.map((item, index) => {
        return (
          <SwiperSlide key={index} style={{ width: '100%' }}>
            <CardAlert text="" href="#" style={{ width: '100%' }} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  )
}

const Header = () => {
  return (
    <div className="header__home container__content">
      <div className="header__top">
        <TitleHome text="MUNSJL" />
        <ContainerNotification style={{ display: 'flex', alignItems: 'center' }}>
          <NotificationsActiveIcon
            style={{ marginRight: 10, width: '22px', height: '22px' }}
          />
          <span style={{ fontSize: '13px' }}>
            <strong>2</strong>
          </span>
        </ContainerNotification>
      </div>
      <div style={{ maxWidth: '100%', maxHeight: '100px' }}>
        <CardAlert />
        {/* <SwiperCards list={[{ a: 1}, { a: 1}, { a: 1}]} /> */}
      </div>
    </div>
  )
}


const CardNotice = () => {
  return (
    <div className="card__notice">
      <div className="header">
        <p className="text">“No arreglan las pistas de la Cooperativa Tomas Prado esta así desde el año pasado, hemos mandado solicitudes y no tenemos respuesta.”</p>
        <div className="author">
          <div className="avatar">
            <Avatar src={'https://mui.com/static/images/avatar/1.jpg'} />
            <span>Pedro Vargas</span>
          </div>
          <span className="time">12:30</span>
        </div>
      </div>
      <div className="footer">
        <img src="/img/notice.png" alt="" />
        <div className="footer__description">
          <span>Comentario sobre la obra</span>
          <p>Creación de parque Ramiro Priale en la avenida Lima ...</p>
        </div>
      </div>
    </div>
  )
}


const Municipality = () => {
  return (
    <MuniLayout size="lg"
      header={<Header />}
    >
      <div className="home__container container__content">
        <H6 style={{ marginBottom: '4px' }}>Lo último</H6>
        <CardNotice />
        <br />
        <H6 style={{ marginBottom: '4px' }}>Resumen (01/11 a 13/12)</H6>
      </div>
    </MuniLayout>
  );
};

export default Municipality;
