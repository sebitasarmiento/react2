import React, { useState } from "react";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faGithub } from "@fortawesome/free-brands-svg-icons";

const Registro = () => {
  const [alert, setAlert] = useState({ type: "", message: "" });

  return (
    <div className="card">
      <SocialButton
        insta={<FontAwesomeIcon icon={faInstagram} />}
        facebook={<FontAwesomeIcon icon={faFacebookF} />}
        github={<FontAwesomeIcon icon={faGithub} />}
      />
      <Formulario setAlert={setAlert} />
      {alert.message && <Alert type={alert.type} message={alert.message} />}
    </div>
  );
};

export default Registro;
