import * as React from "react";
import "./style.scss";

interface Props {
  children: any;
  onSubmit?: Function;
  grid?: boolean;
}

export const Form: React.FC<Props> = ({ grid, onSubmit, children }) => {
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className={`form ${grid ? "grid" : ""}`}
    >
      {children}
    </form>
  );
};
