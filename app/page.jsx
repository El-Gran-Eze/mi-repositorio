'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import "./globals.css";
export default function Home() {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar tu lógica de validación
    if (inputText.trim().toLowerCase() === 'texto_correcto@gmail.com') {
      redirectToAnotherPage();
    } else {
      alert('Texto incorrecto. Inténtalo de nuevo.');
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const redirectToAnotherPage = () => {
    window.location.href = '/menu';
  };
  return (
    <>
    <div className="form-wrapper">
      <div className="form-side">
        <a href="#" title="Logo"><img src="fotocinco.jpg" className="logo" alt="Tecno Data" /></a>
        <form onSubmit={handleSubmit} className="my form">
          <div className="form-welcome-row"><h1>Crea tu cuenta &#x1F44F;</h1></div>
          <div className="socials-row">
            <a href="#" title="Use Google">
              <img src="foto.png" alt="Google" />Use Google
            </a>
            <a href="#" title="Use Apple">
              <img src="fotodos.jpg" alt="Apple" />Use Apple
            </a>
          </div>
          <div className="divider">
            <div className="divider-line"></div> Or <div className="divider-line"></div>
          </div>
          <div className="text-field">
            <label htmlFor="text">Email;
              <input type="text" id="text" value={inputText} onChange={handleChange} name="text" autoComplete="off" placeholder="Tu Email" required />
            </label>
          </div>
          <div className="text-field">
            <label htmlFor="password">Contraseña;
              <input type="password" name="password" id="password" placeholder="Tu contraseña" title="Minimium 6 characters at least 1 Alphabet and 1 number" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required />
            </label>
          </div>
          <button type="submit" className="my-form_button">
            Iniciar seción
          </button>
          <div className="my-form_actions">
            <a href="#" title="Reset Password">
              Reset Password
            </a>
            <a href="#" title="Create Account">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
      <div className="info-side">
        <img src="fototres.jpg" alt="Error" className="mockup" />
      </div>
    </div><script src="script.js"></script></>
  );
}

