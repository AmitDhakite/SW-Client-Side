import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Button, Form, Navbar, Container, Nav } from "react-bootstrap";
import classes from "bootstrap/dist/css/bootstrap.min.css";
import Card from "./layout/Card";
import axios from "../axios.js";
import { useHistory } from "react-router-dom";

export default function SignInSide() {
  const [addTask, setAddTask] = useState(false);
  const history = useHistory();
  const [tasks, setTasks] = useState();
  const [task, setTask] = useState({
    name: "",
    date: "",
    details: "",
    importance: "",
    userId: localStorage.getItem("userId"),
  });

  useEffect(async () => {
    try {
      const res = await axios.post("/getTasks", {
        id: localStorage.getItem("userId"),
      });
      setTasks(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setTask((p) => {
      return {
        ...p,
        [name]: value,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/addTask", task);
      setTasks((p) => [res.data, ...p]);
      setAddTask(false);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ToBeDone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link onClick={logout} href="#pricing">
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Paper style={{ padding: "50px 400px" }}>
        {!addTask ? (
          <>
            {" "}
            <Button
              style={{ marginBottom: "30px" }}
              onClick={() => {
                setAddTask(true);
              }}
            >
              Add New Task
            </Button>
            <Paper>
              {tasks?.map((c) => (
                <Card
                  name={c.name}
                  details={c.details}
                  date={c.date}
                  imp={c.importance}
                />
              ))}
            </Paper>
          </>
        ) : (
          <Form onChange={inputChangeHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of Task</Form.Label>
              <Form.Control name="name" placeholder="Enter task" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Details</Form.Label>
              <Form.Control name="details" placeholder="Details" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" placeholder="Details" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Importance (x/5)</Form.Label>
              <Form.Control placeholder="Importance" name="importance" />
            </Form.Group>

            <Button onClick={submit} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Paper>
    </>
  );
}
