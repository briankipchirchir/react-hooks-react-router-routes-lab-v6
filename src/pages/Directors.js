// src/pages/Directors.js
import { useState, useEffect } from 'react';

const Directors = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(response => response.json())
      .then(data => setDirectors(data))
      .catch(error => console.error('Error fetching directors:', error));
  }, []);

  return (
    <main>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
};

export default Directors;

