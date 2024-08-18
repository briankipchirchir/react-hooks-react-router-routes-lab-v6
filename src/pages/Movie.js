// src/pages/Movie.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <main>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre} </span>
      ))}
    </main>
  );
};

export default Movie;
