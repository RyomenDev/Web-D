import React from "react";
import Card from "./Card";

const Tours = (props) => {
  function removeHandler(id) {
    console.log("Tour.js removeTour");
    console.log(id);
    props.removeToursP(id);
  }

  return (
    <div className="container">
      <div>
        <h2 className="title">Plan with Love</h2>
      </div>
      <div className="cards">
        {
          // to avoid copy mapping tour and returning card for every tour
          props.tours.map((tour) => {
            return <Card {...tour} key={tour.id} removeTour_={removeHandler} />;
          })
        }
      </div>
    </div>
  );
};

export default Tours;
