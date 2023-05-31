import { useParams, useNavigate } from "react-router-dom";
import {moviesData} from "./Movies";

const Trailer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = moviesData.find((el) => el.id === Number(id));
    const redirect = () => {
        navigate("/list");
      };

    return (
        <>
        <h1>{movie.name}</h1>
        <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <button onClick={redirect}>Movies list</button>
        </>
    )
}

export default Trailer;