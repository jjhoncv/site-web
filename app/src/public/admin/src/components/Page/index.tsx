import * as React from "react";
import "./style.scss";

export const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

export const PageHead = ({ children }) => {
  return <div className="page-head">{children}</div>;
};

export const PageBody = ({ children }) => {
    return <div className="page-body">{children}</div>;
  };
  