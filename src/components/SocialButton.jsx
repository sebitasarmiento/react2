import React from 'react';

const SocialButton = ({ insta, facebook, github }) => {
  return (
    <div>
      <div className="titulo">
        <h1>Crea una cuenta</h1>
      </div>
      <div className="iconos">
        <p className='icon'>{insta}</p>
        <p className='icon'>{facebook}</p>
        <p className='icon'>{github}</p>
      </div>
      <h3>O usa tu email para registrarte</h3>
    </div>
  );
}

export default SocialButton;