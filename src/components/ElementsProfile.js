import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import _ from "lodash";
import { COLORS } from "../colors";
import {
  faTrash,
  faLongArrowAltUp,
  faLongArrowAltDown,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ElementsProfile = ({ elements, userColor, setShow, double }) => {
  const [layers, setLayers] = useState([]);
  const [activeLayer, setActiveLayer] = useState(0);

  const createLayer = () => {
    setLayers((prev) => [
      ...prev,
      {
        id: prev.length,
        color: COLORS[0],
        element: elements[0],
        double: "none",
      },
    ]);
  };

  const removeLayer = (index) => {
    const tmpLayers = _.remove(layers, (l) => l.id !== index);
    setLayers(tmpLayers);
  };

  const setColor = (color) => {
    const tmpColor = {
      id: activeLayer,
      color: color,
      element: layers[activeLayer].element,
    };
    let tmpLayers = layers;
    tmpLayers[activeLayer] = tmpColor;
    setLayers(tmpLayers);
  };

  const setShape = (shape) => {
    const tmpShape = {
      id: activeLayer,
      color: layers[activeLayer].color,
      element: shape,
    };
    let tmpLayers = layers;
    tmpLayers[activeLayer] = tmpShape;
    setLayers(tmpLayers);
  };

  const actionsLayer = (index) => {
    if (layers.length === 1) {
      return [];
    } else {
      if (index === 0 && layers.length > 1) {
        return ["down"];
      } else {
        if (index === layers.length - 1) {
          return ["up"];
        } else return ["up", "down"];
      }
    }
  };

  console.log(layers);

  return (
    <>
      <Row>
        <Col sm={3}>
          {_.map(layers, (layer, index) => (
            <div className="d-flex flex-row">
              <div
                className={`item item-color ${
                  activeLayer === index && "active"
                }`}
                onClick={() => setActiveLayer(index)}
                style={{
                  backgroundColor: layer.color,
                }}
              >
                <img src={layer.element} width="40" height="40" />
              </div>

              {_.includes(actionsLayer(index), "up") && (
                <Button variant="link">
                  <FontAwesomeIcon icon={faLongArrowAltUp} />
                </Button>
              )}
              {_.includes(actionsLayer(index), "down") && (
                <Button variant="link">
                  <FontAwesomeIcon icon={faLongArrowAltDown} />
                </Button>
              )}
              <Button variant="link" onClick={() => removeLayer(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              {double && (
                <Button variant="link">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </Button>
              )}
            </div>
          ))}
          {layers.length < 8 && (
            <Button variant="primary" onClick={() => createLayer()}>
              Новый слой
            </Button>
          )}
        </Col>
        <Col sm={9}>
          Выбрать цвет
          <div className="d-flex flex-wrap">
            {_.map(COLORS, (color) => (
              <div
                className={`item item-color ${"n"}`}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              />
            ))}
            {_.map(userColor, (color) => (
              <div
                className={`item item-color`}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              />
            ))}
            <Button onClick={() => setShow(true)}>+</Button>
          </div>
          Выбрать элемент
          <div className="d-flex flex-wrap">
            {_.map(elements, (element) => (
              <>
                <div
                  className={`item item-color`}
                  onClick={() => setShape(element)}
                >
                  <img src={element} width="40" height="40" />
                </div>
              </>
            ))}
          </div>
          {double && (
            <p>
              <small>
                <Button variant="link">
                  <FontAwesomeIcon icon={faCaretLeft} />
                </Button>
                означает расположение элемента на симметричной части (пока
                предусмотрено только для лап). То есть данное положение
                стрелочки указывает, что элемент будет расположен на левой части
                модели. Если пользователь нажмет на нее, то стрелочка будет
                менять положение (на правую часть, или на обе части){" "}
                <s>пока не реализовано</s>
              </small>
            </p>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ElementsProfile;
