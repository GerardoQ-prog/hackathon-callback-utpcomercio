import Link from "next/link";
import React from "react";
import TextStyle from "../textStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContainerArticle } from "./styled";
import { articles } from "../../api/home";

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
        {articles.map((item, index) => {
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
