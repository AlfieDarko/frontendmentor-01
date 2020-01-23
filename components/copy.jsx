import React from "react";
import PropTypes from "prop-types";

const Copy = ({ header, content }) => {
  return (
    <div className="sales-copy__container">
      <h1 className="sales-copy__header">
        {/* Learn to code by watching others */}
        {header}
      </h1>
      <p className="sales-copy__paragraph">
        {/* See how experienced developers solve problems in real-time. <br></br>
        Watching scripted tutorials is great, but understanding how developers
        think is invaluable */}
        {content}
      </p>
    </div>
  );
};

export default Copy;
