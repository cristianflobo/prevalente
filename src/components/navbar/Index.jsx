import React, { useState } from "react";
import {
  buttonrespon,
  cv,
  empleo,
  engranaje,
  flecha,
  foto,
  logo1,
  lupa,
} from "../../image";
import { Drop } from "../dropdown";
import "./navbar.css";

export const Navbar = () => {
  const [drop, setdrop] = useState(false);
  return (
    <div className="navbarconteiner">
      <div className="navbar">
        <div className="divloboparrafo">
          <div className="divlogo">
            <img src={logo1} alt="" style={{ height: 70 }} />
            <p
              style={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                color: "white",
              }}
            >
              Gente prevalente
            </p>
          </div>
          <div className="divinputnavbar">
            <img src={lupa} alt="" />
            <input className="inputnavbar" type="text" placeholder="Buscar" />
          </div>
        </div>
        <div className="divmenu">
          <div className="divimgspan">
            <img src={engranaje} alt="" />
            <span style={{ marginLeft: 10 }}>Administracion</span>
          </div>
          <div className="divimgspan">
            <img src={empleo} alt="" />
            <span style={{ marginLeft: 10, marginRight: 10 }}>Empleo</span>
            <img src={flecha} alt="" />
          </div>
          <div className="divimgspan">
            <img src={cv} alt="" />
            <span style={{ marginLeft: 10 }}>Mi CV</span>
          </div>
          <div className="divimgspan">
            <img
              style={{ height: 32, borderRadius: "50%" }}
              src={foto}
              alt=""
            />
            <span style={{ marginLeft: 10, marginRight: 10 }}>Cristian</span>
            <img src={flecha} alt="" />
          </div>
        </div>
        <div className="buttonresponsive">
          <img
            style={{ height: "50%", display: "flex", justifyContent: "center" }}
            onClick={() => setdrop(!drop)}
            src={buttonrespon}
            alt=""
          />
        </div>
      </div>
      {drop === true ? <Drop /> : null}
    </div>
  );
};
