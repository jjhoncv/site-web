import * as React from "react";
import "./style.scss";

export const FormFoot = ({ align = null, children }) => {
  return <div className={`form-foot ${align ? align : ""}`}>{children}</div>;
};
