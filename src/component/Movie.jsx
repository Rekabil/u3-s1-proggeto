import { Col } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Col sm={6} lg={4} xl={2} className="mb-2 px-1">
      <img className="img-fluid" src={props.src} alt="movie" />
    </Col>
  );
};
export default Movie;
