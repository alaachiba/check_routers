import { useState } from "react";
import ReactModal from "react-modal";

const AddMovie = ({ addHandler }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [season, setSeason] = useState("");

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const addMovie = () => {
    const newMovie = {
      id: Math.random(),
      name,
      description,
      date,
      rating,
      image,
      type,
      season
    };
    addHandler(newMovie);
    close();
  };
  return (
    <div className="Add-btn-container">
      <button onClick={open}>Add MOVIE</button>
      <ReactModal isOpen={modalIsOpen} className="add-modal">
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Release Date</label>
          <input
            type="number"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>Movie Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Movie Season</label>
          <input
            type="number"
            name="season"
            onChange={(e) => setSeason(e.target.value)}
          />
          <div className="rating-search">
            <label>Movie rating</label>
            <input type="number" onChange={(e) => setRating(e.target.value)} />
          </div>
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={addMovie}>
          Submit
        </button>
        <button className="Modal-btn" onClick={close}>
          close
        </button>
      </ReactModal>
    </div>
  );
};
export default AddMovie;