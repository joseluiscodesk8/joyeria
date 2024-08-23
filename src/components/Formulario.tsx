"use client";

import { useState } from "react";

import { useMenu } from "../context/MenuContext";
import styles from "../styles/index.module.scss";

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { menuOpen } = useMenu();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("Mensaje:", mensaje);
  };

  return (
    <form
      className={`${styles.formulario} ${menuOpen ? styles.menuAbierto : ""}`}
      onSubmit={handleSubmit}
    >
      <section>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </section>
    </form>
  );
};

export default Formulario;
