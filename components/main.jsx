import React, { PureComponent } from "react";
import "normalize.css";
import "../styles/main.scss";
import Form from "./form";
import Copy from "./copy";
import { COPY_PARAGRAPH, COPY_HEADER } from "./locales/en";
import Offer from "./offer";

const Main = () => (
  <div className="container">
    <Copy header={COPY_HEADER} paragraph={COPY_PARAGRAPH} />
    <div className="lead-gen__container">
      <Offer freeTrialInDays={7} subscriptionPrice={20} currencySymbol={"£"} />
      <Form />
    </div>
  </div>
);

export default Main;
