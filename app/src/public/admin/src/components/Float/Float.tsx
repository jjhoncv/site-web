import * as React from "react";
import * as ReactDOM from "react-dom";

import "./style.scss";

interface Props {
  handleClick?: Function;
  children: any;
  show: boolean;
}

export const Float: React.FC<Props> = ({ show, handleClick, children }) => {
  const domFloat = document.getElementById("float");

  React.useEffect(() => {
    ReactDOM.render(
      <>
        <div
          onClick={() => handleClick && handleClick()}
          className={`float ${show ? "" : "hide"} `}
        />
        {show && children}
      </>,
      domFloat
    );
  }, [children, show]);
  return null;
};
