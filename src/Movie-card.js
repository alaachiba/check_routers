import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactStars from "react-stars";
import {Link} from "react-router-dom"

const MovieCard = ({ el }) => {
  return (
    <div>
    <Card style={{ width: '18rem', border:'2px solid gray', borderRadius: '10%'}}>
      <Card.Img variant="top" src={el.image} alt={el.name} height={200} width={170}/>
      <Card.Body>
        <Card.Title><b><Link to={`/otrailer/${el.id}`}>{el.name}</Link></b></Card.Title>
        <Card.Text>
        {el.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      <ListGroup.Item><div className="row">
          {
            <ReactStars
              count={5}
              size={24}
              color2={"#ffd700"}
              value={el.rating}
              edit={false}
            />
          }
          </div></ListGroup.Item>
        <ListGroup.Item>{el.date}</ListGroup.Item>
        <ListGroup.Item>{el.type}</ListGroup.Item>
        <ListGroup.Item>{el.seasons}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
};

export default MovieCard;
