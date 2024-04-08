import React, { useState } from "react";
import data from "./data.js";
import Tours from "./Component/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTourF(id) {
    console.log("app.js removeTour");
    //  filtering tours
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btnWhite" onClick={() => setTours(data)}>
          {/* initialize with beginning */}
          Refresh_
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      {/* passing tours removeTours as props */}
      <Tours tours={tours} removeToursP={removeTourF} />
    </div>
  );
};

export default App;
//35:35
