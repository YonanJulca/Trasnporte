import React, { useState } from "react";
import "../estilos/Formulario.css";
import Logoblanco from "../imagen/logoCamionBlanco.png";
import { FaWhatsapp, FaFacebook, FaYoutube } from "react-icons/fa";

function Formulario() {
  // Definir estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setMessage] = useState("");

  // Manejar la función cuando se envía el formulario
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

        {/* Logo */}
        <img src={Logoblanco} alt="logo de la camion" className="logo-img" />

        {/* Iconos de redes sociales */}
        <div className="icon-redes">
          <a href="a">
            <FaWhatsapp />
          </a>
          <a href="a">
            <FaFacebook />
          </a>
          <a href="a">
            <FaYoutube />
          </a>
        </div>

        {/* Campos del formulario */}
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
          type="text" // Cambiado a "text" en lugar de "asunto"
          id="asunto"
          value={asunto} // Corregido el valor (antes estaba como email)
          onChange={(e) => setAsunto(e.target.value)} // Corregido el setter (antes estaba como setEmail)
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* Botón de enviar */}
        <div className="imagen">
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
