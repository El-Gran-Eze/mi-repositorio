"use client"
import { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías agregar tu lógica de validación
    if (inputText.trim().toLowerCase() === 'texto_correcto') {
      redirectToAnotherPage();
    } else {
      alert('Texto incorrecto. Inténtalo de nuevo.');
    }
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const redirectToAnotherPage = () => {
    window.location.href = '/otra-pagina';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Ingresa el texto aquí"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}