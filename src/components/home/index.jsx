import React, { useState } from "react";
import { datacard } from "../../utils/datacard";
import { Card } from "../card";
import { Form } from "../form";
import { Modal } from "../modal";
import { Navbar } from "../navbar/Index";
import "./home.css";


export const Home = () => {
  const [stateForm, setstateForm] = useState(0);
  const [viewModal, setviewModal] = useState(false);
  const [nameEmpresa, setnameEmpresa] = useState("");
  const titleform = datacard.find((item) => item.id === stateForm);

  return (
    <div className="homeconteiner">
      <Navbar />
      {stateForm === 1 ? (
        <div className="fatherform">
          <p className="textadministrador">
            Administrador/ <p className="textparrafo">{`${titleform.title}`}</p>
          </p>{" "}
          <Form nameempresa={setnameEmpresa} modal={setviewModal} />
        </div>
      ) : (
        <div className="conteinercard">
          {datacard.map((item) => (
            <Card data={item} stateCard={setstateForm} />
          ))}
        </div>
      )}
      {viewModal ? (
        <Modal nameModalEmpresa={nameEmpresa} modal={setviewModal} />
      ) : null}
    </div>
  );
};
