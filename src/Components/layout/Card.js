import * as React from "react";
import { Button, Card, Navbar, Container, Nav } from "react-bootstrap";

export default function BasicCard(props) {
  const del = () => {
    props.del(props._id);
  };
  return (
    <Card
      style={{ marginTop: "20px", padding: "110px 100px" }}
      className="bg-dark text-white"
    >
      <Card.ImgOverlay>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Details: {props.details}</Card.Text>
        <Card.Text>Date: {props.date}</Card.Text>
        <Card.Text>Importance: {props.imp}/5 </Card.Text>

        <Card.Text>
          <Button style={{ marginBottom: "100px" }} onClick={del}>
            Mark as Done...
          </Button>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
