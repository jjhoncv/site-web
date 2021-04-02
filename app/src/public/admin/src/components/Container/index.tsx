import * as React from "react";
import "./style.scss";

interface Props {
  scope?: string;
  children?: any;
}

export const Container: React.FC<Props> = ({ scope, children, ...props }) => {
  return (
    <div className={`container ${scope ? scope : ""}`} {...props}>
      {children}
    </div>
  );
};
