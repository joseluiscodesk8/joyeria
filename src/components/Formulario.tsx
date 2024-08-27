"use client";

import { useState } from "react";
import { useMenu } from "../context/MenuContext";
import { motion } from "framer-motion";
import styles from "../styles/index.module.scss";

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { menuOpen } = useMenu();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulación de envío
    setTimeout(() => {
      console.log("Nombre:", nombre);
      console.log("Teléfono:", telefono);
      console.log("Mensaje:", mensaje);
      setIsSending(false);
      setSubmitted(true);
    }, 2000); // 2 segundos de espera para simular el envío
  };

  const handleReset = () => {
    setNombre("");
    setTelefono("");
    setMensaje("");
    setSubmitted(false);
  };

  return (
    <div className={styles.contenedor}>
      {!submitted ? (
        <motion.form
          className={`${styles.formulario} ${menuOpen ? styles.menuAbierto : ""}`}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
                pattern="[A-Za-zÀ-ÿ\s]+" // Solo letras y espacios
                title="El nombre solo debe contener letras y espacios."
                disabled={isSending}
              />
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                pattern="[0-9]+" // Solo números
                inputMode="numeric" // Optimización para móviles
                title="El teléfono debe contener solo números."
                disabled={isSending}
              />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                disabled={isSending}
              />
            </div>
            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </section>
        </motion.form>
      ) : (
        <motion.div
          className={styles.agradecimiento}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>Gracias por tu opinión.</p>
          <button onClick={handleReset}>Enviar otro formulario</button>
        </motion.div>
      )}
    </div>
  );
};

export default Formulario;
