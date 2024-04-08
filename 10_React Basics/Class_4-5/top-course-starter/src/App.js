import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {
  // const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState([]);
  // for spinner during loading
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");//([])

  // API Call
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      // output have response of data from api
      const output = await res.json();

      // Save data in courses : data is in data key of API file
      setCourses(output.data);
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    // after API call spinner stop
    setLoading(false);
  };

  useEffect(() => {
    // call during first render
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          {/* passing as props  */}
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {/* what to show: card or spinner at a time */}
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
