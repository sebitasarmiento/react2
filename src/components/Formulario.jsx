import React, { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre.trim() === "" || formData.email.trim() === "") {
      setAlert({ type: "danger", message: "Por favor, ingresa tus datos" });
    } else if (!formData.email.includes("@")) {
      setAlert({ type: "danger", message: "Email incorrecto. Falta el símbolo @" });
    } else if (formData.password === formData.confirmPassword) {
      setAlert({ type: "success", message: "Registro exitoso" });
    } else {
      setAlert({ type: "danger", message: "Las contraseñas no coinciden" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <p>Nombre</p>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-container">
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-container">
        <p>Contrasena</p>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-container">
        <p>Confirma tu contrasena</p>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
      </div>

      <div className="boton-registrarse">
        <button type="submit">Registrarse</button>
      </div>
    </form>
  );
};

export default Formulario;
