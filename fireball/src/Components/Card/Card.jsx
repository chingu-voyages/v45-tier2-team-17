import React from "react";
import "../../sass/_card.scss";
const Card = ({ head }) => {
  return (
    <div className="card">
      <div className="card-heading">{head}</div>
      <div className="card-body">body</div>
    </div>
  );
};

export default Card;
