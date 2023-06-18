import React, { useState } from "react";
import "../estilos/Formulario.css";
import Logoblanco from "../imagen/logoCamionBlanco.png";
import { FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";

function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realizar acciones con los datos del formulario
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", message);

    // Restablecer los campos del formulario
    setName("");
    setEmail("");
    setMessage("");
    setAsunto("");
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <h2>Contactanos, sera un gusto atenderte</h2>
        <h1>De Tu Mensaje :</h1>

        <img src={Logoblanco} alt="logo de la camion" className="logo-img" />
        <div className="icon-redes">
          <a href="a" >
            <FaWhatsapp />
          </a>
          <a href="a" >
            {" "}
            <FaFacebook />
          </a>
          <a href="a">
            {" "}
            <FaYoutube />
          </a>
        </div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Correo Electronico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="asunto">Asunto :</label>
        <input
          type="asunto"
          id="asunto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="imagen">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
