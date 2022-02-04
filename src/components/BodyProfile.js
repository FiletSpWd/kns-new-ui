import { Accordion, Col } from "react-bootstrap";
import i_base from "../images/i_base.png";
import i from "../images/i.png";
import i1 from "../images/i1.png";
import i4 from "../images/i4.png";
import i7 from "../images/i7.png";
import i9 from "../images/i9.png";
import { useState } from "react";
import { COLORS } from "../colors";
import _ from "lodash";
import { EMPTY_VARIANTS, SHAPE } from "../constans";

const BodyProfile = ({}) => {
  const [body, setBody] = useState({
    base: { color: COLORS[0], image: i_base, name: "base" },
    eyes: { color: COLORS[0], image: i, name: "eyes" },
    tails: { color: COLORS[0], image: i1, name: "tails" },
    hear: { color: COLORS[0], image: i4, name: "hear" },
    brash: { color: COLORS[0], image: i7, name: "brash" },
    stuff: { color: COLORS[0], image: i9, name: "stuff" },
  });

  const [activePart, setActivePart] = useState();

  const changeColor = (color) => {
    setBody((prev) => ({
      ...prev,
      [activePart]: {
        color: color,
        image: prev[activePart].image,
        name: prev[activePart].name,
      },
    }));
  };

  const changeVariant = (variant) => {
    setBody((prev) => ({
      ...prev,
      [activePart]: {
        color: prev[activePart].color,
        image: variant,
        name: prev[activePart].name,
      },
    }));
  };

  return (
    <>
      <Accordion.Header onClick={() => setActivePart()}>
        Основа
      </Accordion.Header>
      <Accordion.Body>
        <div class="row">
          {_.map(body, (part) => (
            <>
              <Col key={part.name}>
                <div
                  className={`item item-color ${
                    activePart === part.name && "active"
                  }`}
                  onClick={() => setActivePart(part.name)}
                  style={{
                    backgroundColor:
                      !_.includes(EMPTY_VARIANTS, part.image) && part.color,
                  }}
                >
                  <img src={part.image} width="40" height="40" />
                </div>
              </Col>
            </>
          ))}
        </div>
        {activePart && (
          <>
            {!_.includes(EMPTY_VARIANTS, body[activePart].image) && (
              <>
                Выберите цвет
                <div className="d-flex flex-wrap">
                  {_.map(COLORS, (color) => (
                    <div
                      key={color}
                      className={`item item-color ${
                        body[activePart].color === color && "active"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => changeColor(color)}
                    />
                  ))}
                </div>
              </>
            )}
            {SHAPE[activePart].length > 1 && (
              <>
                Выберите тип
                <div className="d-flex flex-row">
                  {_.map(SHAPE[activePart], (variant) => (
                    <div
                      key={variant}
                      className={`item item-color`}
                      onClick={() => changeVariant(variant)}
                    >
                      <img src={variant} width="40" height="40" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </Accordion.Body>
    </>
  );
};

export default BodyProfile;
