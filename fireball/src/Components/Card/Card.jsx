import React from "react";
import "../../sass/_card.scss";
const Card = ({ name, data }) => {
  return (
    <div className="card">
      <div className="card-heading">{name}</div>
      <div className="card-body">{data}</div>
    </div>
  );
};

export default Card;
