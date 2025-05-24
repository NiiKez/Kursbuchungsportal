import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  // Eigene States für jedes Eingabefeld
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Abgesendet:', { vorname, nachname, email });
    navigate('/booking');
  };

  return (
    <div className="container">
      <h1>Willkommen im Kursbuchungsportal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vorname"
          value={vorname}
          onChange={(e) => setVorname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nachname"
          value={nachname}
          onChange={(e) => setNachname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Weiter</button>
      </form>
    </div>
  );
}

export default HomePage;
