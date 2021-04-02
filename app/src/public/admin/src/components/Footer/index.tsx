import * as React from "react";
import { Container } from "../Container";
import "./style.scss";

export const Footer = () => {
  return (
    <footer>
      <Container scope="footer">
        <div className="footer-left"># Dashboard created by ReactJS</div>
      </Container>
    </footer>
  );
};
