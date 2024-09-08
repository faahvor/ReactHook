import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    // Initial movies
    {
      title: "Inception",
      description: "A mind-bending thriller",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.8
    },
    {
      title: "The Matrix",
      description: "A hacker learns about the true nature of reality",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.7
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]); // Update filtered list
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie => {
      return (
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= rating : true)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() => handleAddMovie({
          title: "New Movie",
          description: "A description of the new movie",
          posterURL: "https://via.placeholder.com/150",
          rating: 7.5
        })}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 mb-4"
      >
        Add New Movie
      </button>
    </div>
  );
};

export default App;
