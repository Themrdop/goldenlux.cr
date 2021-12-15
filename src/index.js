import { render } from "react-dom";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const rootElement = document.getElementById("root");
render(
  <App />,
  rootElement
);
