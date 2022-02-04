import { Accordion } from "react-bootstrap";
import BodyProfile from "./BodyProfile";
import _ from "lodash";
import { ELEMENTS_ON_BODY } from "../constans";
import ElementsProfile from "./ElementsProfile";
import { useState } from "react";
import AddColor from "./AddColor";

const Elements = () => {
  const [userColor, setUserColor] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Accordion defaultActiveKey="0" className="card-color">
      <Accordion.Item eventKey="0" className="card-color">
        <BodyProfile />
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="card-color">
        <Accordion.Header className="card-color">Елементы</Accordion.Header>
        <Accordion.Body>
          <Accordion>
            {_.map(ELEMENTS_ON_BODY, (part) => (
              <>
                <Accordion.Item key={part.name} eventKey={part.name}>
                  <Accordion.Header>{part.name}</Accordion.Header>
                  <Accordion.Body>
                    <ElementsProfile
                      elements={part.elements}
                      userColor={userColor}
                      setShow={setShow}
                      double={part.double}
                    />
                    <AddColor
                      show={show}
                      setUserColor={setUserColor}
                      handleClose={() => setShow(false)}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </>
            ))}
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Elements;
