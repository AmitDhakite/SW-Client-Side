import * as React from "react";
import { Button, Card, Navbar, Container, Nav } from "react-bootstrap";

export default function BasicCard(props) {
  return (
    <Card
      style={{ marginTop: "20px", padding: "80px 100px" }}
      className="bg-dark text-white"
    >
      <Card.ImgOverlay>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Details: {props.details}</Card.Text>
        <Card.Text>Date: {props.date}</Card.Text>
        <Card.Text>Importance: {props.imp}/5</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
