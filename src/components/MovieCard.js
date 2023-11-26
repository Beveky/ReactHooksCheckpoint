import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movieInfo }) => {
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };
  const truncatedDescription = truncateDescription(movieInfo.description, 50);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "#1a1a1a",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src={movieInfo.posterURL}
          alt={movieInfo.title}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
        />

        <Card.Body>
          <Card.Title>
            <h4>{movieInfo.title}</h4>
          </Card.Title>
          <Card.Text>{truncatedDescription}</Card.Text>
          <Rating
            name="read-only"
            readOnly
            max={10}
            value={movieInfo.rating}
            emptyIcon
          />
          <br />
          <Button variant="dark">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/details/${movieInfo.id}`}
            >
              More Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
