import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const Offer = ({ freeTrialInDays, subscriptionPrice, currencySymbol }) => {
  return (
    <div className="lead-gen__offer">
      <p className="lead-gen__offer--font-weight-200">
        {/* will move this out later */}
        <strong>Try it free for {freeTrialInDays} days</strong> then
        {currencySymbol}
        {subscriptionPrice}/mo. thereafter
      </p>
    </div>
  );
};

export default Offer;
