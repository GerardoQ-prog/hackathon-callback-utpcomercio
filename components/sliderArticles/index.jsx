import Link from "next/link";
import React from "react";
import TextStyle from "../textStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContainerArticle } from "./styled";

const data = [
  {
    title:
      "Lee nuestro reporte mensual de  seguimiento de presupuestos distritales de noviembre.",
    slug: "/",
  },
  {
    title: "Noticia 2 ",
    slug: "/",
  },
  {
    title: "Noticia 3",
    slug: "/",
  },
  {
    title:
      "Lee nuestro reporte mensual de  seguimiento de presupuestos distritales de noviembre.",
    slug: "/",
  },
  {
    title:
      "Lee nuestro reporte mensual de  seguimiento de presupuestos distritales de noviembre.",
    slug: "/",
  },
];

const Article = ({ data }) => {
  return (
    <ContainerArticle>
      <div>
        <img src="./img/icon_warning.png" />
      </div>
      <div>
        <TextStyle bold={700} size="14px" sizeMobile="12px">
          {data.title}
        </TextStyle>
        <Link href={data.slug}>
          <a>Leer más {">"}</a>
        </Link>
      </div>
    </ContainerArticle>
  );
};

const SliderArticles = () => {
  return (
    <div style={{ margin: "30px 0px" }}>
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Article data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderArticles;
