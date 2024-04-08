import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  console.log(props.category);
  console.log(props.courses);

  let category = props.category ; // key: value
  const [likedCourses, setLikedCourses] = useState([]);

  
  // let allCourse = [];
  // It Returns list of all courses received from the api Response

  // const getCourses = () => {
  //     Object.values(props.courses).forEach((courseCategory) => {
  //         courseCategory.forEach((course) => {
  //             allCourse.push(course);
  //         });
  //     });
  //     return allCourse;
  // };
  // console.log(`getCourses`,getCourses());

  function getCourses() {
    // console.log(`cat::`,category);
    if (category === "All") {
      let allCourses = [];
      // for each array element
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          // console.log(`courseData`,courseData);
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return props.courses[category];
    }
  }
  // console.log(`getCourses`,getCourses());

  //   console.log(allCourse);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/* array of objects like Business */}
      {getCourses()?.map((course) => {
        return (
          <Card
            course={course}
            key={props.courses.id}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
