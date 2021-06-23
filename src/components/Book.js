import React from "react";
import "../css/Theme.css";
import "../css/Books.css";
import { Card, Button } from "react-bootstrap";

Book.defaultProps = {
  ImageURL:
    "https://www.asicentral.com/media/29591/book-company-we-plant-trees-479.jpg",
  Title: "Book Title",
  Text: "Book Description",
  PdfLink: "https://journals.sagepub.com/doi/pdf/10.1177/2156587215595152",
};
export default function Book({ ImageURL, Title, Text, PdfLink }) {
  return (
    // React-Bootstrap Card
    <Card className="Book-Card" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="Book-Image" src={ImageURL} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>{Text}</Card.Text>
        <Button
          variant="info"
          onClick={() => {
            window.open(PdfLink);
          }}
          className="Glossary-Button"
        >
          Glossary
        </Button>
      </Card.Body>
    </Card>
  );
}
