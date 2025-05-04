import React from "react";
import Stu from "./Stu";

const College = ({ college }) => {
    console.log(college)
  return (
    <>
      <div 
        style={{background: 'gray', width:'300px', borderRadius: '10px', padding:'15px', borderBottom: '2px solid #000', marginBottom: '6px'
        }}
      >
        <h1>Name: {college.name}</h1>
        <ul>
          <li>
            <h3>City: {college.city}</h3>
          </li>
          <li>
            <h3>Website: {college.website}</h3>
          </li>
          <li>
            <Stu student={college.student}/>
          </li>
        </ul>
      </div>
    </>
  );
};

export default College;
