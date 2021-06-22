import React from "react";
import "../css/Theme.css";
import "../css/Books.css";
import { Card } from "react-bootstrap";

Book.defaultProps = {
  ImageURL:
    "https://www.asicentral.com/media/29591/book-company-we-plant-trees-479.jpg",
  Title: "Book Title",
  Text: "Book Description",
};
export default function Book({ ImageURL, Title, Text }) {
  return (
    // React-Bootstrap Card
    <Card className="Book-Card" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="Book-Image" src={ImageURL} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>
        {/* <Button variant="info" className="Glossary-Button">
          Glossary
        </Button> */}
      </Card.Body>
    </Card>
  );
}
