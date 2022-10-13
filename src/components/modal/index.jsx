import React from "react";
import "./modal.css";
import { Pdf } from "../pdf";

export const Modal = ({ modal, nameModalEmpresa }) => {
  return (
    <div className="padreconteinermodal">
      <div className="conteinermodal">
        <div className="conteinerdata">
          <div className="divbuttonmodal">
            <button className="buttonmodal" onClick={() => modal(false)}>
              X
            </button>
          </div>
          <p
            style={{
              fontSize: "36px",
              fontFamily: "Roboto",
              fontWeight: "700",
              lineHeight: "42px",
              height: "5%",
            }}
          >
            Documentos cargados
          </p>
          <div className="divpdf">
            <Pdf nameEmpresa={nameModalEmpresa} />
          </div>
        </div>
      </div>
    </div>
  );
};
