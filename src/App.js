import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/profile";
import Elements from "./components/Elements";

function App() {
  return (
    <Container>
      <Card className="card-color mt-5">
        <Card.Header>Конструктор окрасов</Card.Header>
        <Card.Body>
          <Row>
            <Col sm={3}>
              <Profile />
            </Col>
            <Col>
              <Elements />
            </Col>
          </Row>
          <Button variant="primary m-2">Сохранить</Button>
          <Button variant="secondary m-2">Сбросить</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
