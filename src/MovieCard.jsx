/* eslint-disable react/prop-types */


const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs mx-auto mb-4">
      <img src={posterURL} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="mt-2 text-yellow-500 font-bold">Rating: {rating}</p>
    </div>
  );
};

export default MovieCard;
