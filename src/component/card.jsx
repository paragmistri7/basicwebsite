import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="card cards w-25 m-4 hover-shadow">
        <div className=" d-flex justify-content-center h-75 ">
          <img src={props.imgsrc} className="card-img-top" alt="parag" />
        </div>
        <div className="card-body">
          <h5 className="card-title"> {props.titles} </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to="" className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
