import { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import shape from "../images/shape.png";

const AddColor = ({ show, setUserColor, handleClose }) => {
  const [color, setColor] = useState("");

  const onSubmit = () => {
    setUserColor((prev) => ([...prev, color]));
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить новый цвет</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Внимание! При перезагрузке страницы пользовательские цвета сотрутся.</p>
        <Row>
          <Col sm={1}>
            <div className="shader" />
          </Col>
          <Col sm={6}>
            <img src={shape} width={200} height={200} />
          </Col>
          <Col sm={5}>
            <label for="customRange1" class="form-label">
              Непрозрачность
            </label>
            <input type="range" class="form-range" id="customRange1" />

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Код оттенка
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="#w121324"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Добавить цвет
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddColor;
