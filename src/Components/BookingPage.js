import React, { useState } from 'react';



function BookingPage() {
  // Beispielkurse im Bereich Softwareentwicklung
  const kurse = [
    { id: 1, name: 'Einführung in React' },
    { id: 2, name: 'Fortgeschrittenes JavaScript' },
    { id: 3, name: 'Node.js & Express Grundlagen' },
    { id: 4, name: 'Python für Maschinelles Lernen' },
    { id: 5, name: 'Datenbanken mit MongoDB' },
  ];

  const [gebuchteKurse, setGebuchteKurse] = useState([]);

  const handleBuchen = (kursId) => {
    if (!gebuchteKurse.includes(kursId)) {
      setGebuchteKurse([...gebuchteKurse, kursId]);
    }
  };

  return (
    <div className="container">
      <h1>Kursbuchung</h1>
      <ul>
        {kurse.map((kurs) => (
          <li key={kurs.id}>
            {kurs.name}
            <button
              onClick={() => handleBuchen(kurs.id)}
              disabled={gebuchteKurse.includes(kurs.id)}
              style={{ marginLeft: '10px' }}
            >
              {gebuchteKurse.includes(kurs.id) ? 'Gebucht' : 'Buchen'}
            </button>
          </li>
        ))}
      </ul>

      {gebuchteKurse.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Deine gebuchten Kurse:</h2>
          <ul>
            {gebuchteKurse.map((id) => {
              const kurs = kurse.find((k) => k.id === id);
              return <li key={id}>{kurs?.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookingPage;
