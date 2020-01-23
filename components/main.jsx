import React, { PureComponent } from "react";
import "normalize.css";
import "../styles/main.scss";
import Form from "./form";
const Main = () => (
  <div className="container">
    <div className="sales-copy__container">
      <h1 className="sales-copy__header">Learn to code by watching others</h1>
      <p className="sales-copy__paragraph">
        See how experienced developers solve problems in real-time. <br></br>
        Watching scripted tutorials is great, but understanding how developers
        think is invaluable
      </p>
    </div>

    <div className="lead-gen__container">
      <div className="lead-gen__offer">
        <p className="lead-gen__offer--font-weight-200">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>

      <Form />
    </div>
  </div>
);

export default Main;
