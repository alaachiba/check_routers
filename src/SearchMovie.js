import ReactStars from "react-stars";

const SearchMovie = ({ setSearchName, setSearchRating }) => {
    const ratingChanged = (newRating) => {
        setSearchRating(newRating);
        console.log(setSearchRating);
      };
    return (
        <div>
        <input onChange={(event) => setSearchName(event.target.value)} />
        {
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            onChange={ratingChanged}
            edit={true}
            half={false}
          />
        }
      </div>
    )
}

export default SearchMovie;