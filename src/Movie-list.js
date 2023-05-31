import MovieCard from "./Movie-card";

const MovieList = ({ movies, searchName, searchRating }) => {
  
  return (
    <div style={{ display: 'flex', flexWrap:'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
   {movies
        .filter((el) =>
          el.name.toLowerCase().includes(searchName.toLowerCase().trim()) ||
          el.date.toLowerCase().includes(searchName.toLowerCase().trim())
        )
        .filter((el) => el.rating >= searchRating)
        .map((el) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
};

export default MovieList;
