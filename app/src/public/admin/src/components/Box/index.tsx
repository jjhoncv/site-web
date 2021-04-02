import * as React from "react";
import "./style.scss";

interface Props {
  type?: string;
  scope?: string;
  children: any;
}

export const Box: React.FC<Props> = ({ type, scope, children, ...props }) => {
  return (
    <div className={`box ${type ? type : ""} ${scope ? scope : ""}`} {...props}>
      {children}
    </div>
  );
};
