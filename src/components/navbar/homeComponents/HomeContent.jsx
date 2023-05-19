import React from "react";
import headerBack from "../../../../public/assets/image/home/headerBack.jpg";
import Button from "../../Button";

const HomeContent = () => {
  return (
    <div className="home-content">
      <div className="home-content__block">
        <h1 className="home-content__title">
          Квартиры, которые подстраиваются под ваш образ жизни
        </h1>
        <p className="home-content__des">
          В нашем жилом комплексе ваша квартира станет пространством, где
          технологии, инфраструктура, дизайн и архитектура объединяются ради
          вашего комфорта.
        </p>
        <Button text={"Выбрать квартиру"} />
      </div>
      <img src={headerBack} alt="home background" className="home-content__background"/>
    </div>
  ); 
};

export default HomeContent;
