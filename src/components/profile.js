import base from "../images/base.png";
import a1 from "../images/a_catch.jpg";
import a2 from "../images/a_kit.jpeg";
import a3 from "../images/a_run.png";
import { COLORS } from "../colors";
import { Form } from "react-bootstrap";
import { useState } from "react";
import _ from "lodash";

const Profile = () => {
  const [background, setBackground] = useState();
  const activeColors = [COLORS[0], COLORS[1], COLORS[2], COLORS[3], COLORS[4]];
  const activeActions = [a1, a2, a3, a1, a2];

  return (
    <>
      <div className="profile" style={{ backgroundColor: background }}>
        <img src={base} width="120" height="150" />
      </div>
      Действие
      <div class="d-flex flex-wrap">
        {_.map(activeActions, (action) => (
          <div className="item">
            <img src={action} width="40" height="40" />
          </div>
        ))}
      </div>
      Фон
      <div class="d-flex flex-wrap">
        {_.map(activeColors, (color) => (
          <div
            className={`item item-color ${background === color && "active"}`}
            onClick={() => setBackground(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      Код окраса
      <Form.Control
        type="text"
        placeholder="0 0 0 00 0 00  00 0 00 0  0 0 0 0"
      />
      <div>
        Случайный окрас | Очень случайный окрас | Открыть библиотеку окрасов
      </div>
    </>
  );
};

export default Profile;
