import React from "react";
import { reloj } from "../../image";
import "./card.css";

export const Card = ({ data, stateCard }) => {
  return (
    <div className="cardconteiner">
      <div className="carddiv" onClick={() => stateCard(data.id)}>
        <div className="divimagenescard">
          <img className="img2" src={data.image2} alt="" />
          <img className="img1" src={data.image1} alt="" />
        </div>
        <div className="divtitleparrafo">
          <p className="titleparrafo">{data.title}</p>
        </div>
        <div className="divconteinertext">
          <img style={{ marginRight: 10, marginLeft: 20 }} src={reloj} alt="" />
          <p className="parrafotext">{data.text}</p>
        </div>
      </div>
    </div>
  );
};
