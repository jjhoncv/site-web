import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./config/normalize.scss";

const domRoot = document.getElementById("root");
ReactDOM.render(<App />, domRoot);
