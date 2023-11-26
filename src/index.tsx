import { render } from "react-dom";
import './index.scss';
import { StrictMode } from "react";

render(
  <StrictMode>
    <div className='app'></div>
  </StrictMode>,
  document.getElementById('root'),
);