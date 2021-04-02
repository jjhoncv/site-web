import * as React from "react";
import * as ReactDOM from "react-dom";

import "./styles.scss";

interface Props {
    handleClick?: Function;
    children: any;
  }

export const Modal: React.FC<Props> = ({ children }) => {
  const domRoot = document.getElementById("modal");

  React.useEffect(() => {
    ReactDOM.render(<div className="modal">{children}</div>, domRoot);
  }, [children]);
  return null;

};
