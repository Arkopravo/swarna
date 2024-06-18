import React, { useState } from "react";
import "./Form.css";

function ExamForm() {

  const [formData, setFormData] = useState({
    examName:"", date:"", endTime:"", startTime:"",
  });

  function changeHandler(event) {
    const {name, value} = event.target;
    setFormData( (prev) => ({...prev, [name]: value}) );
  }

  function prevBtnHandler() {

  }

  function nextBtnHandler() {
    
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>

        <label>
          Exam Name:
          <input
            type="text"
            name="examName"
            value={formData.examName}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label>
          Date : 
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={changeHandler}
          />
        </label>

        <br />

        <label>
          End Time:
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={changeHandler}
          />
        </label>

        <br />

        <div className="btn">
            

            <button onClick={prevBtnHandler}>Prev</button>
            <button onClick={nextBtnHandler}>Next</button>
            
            <button type="submit">Submit</button>
            
        </div>

      </form>
    </div>
  );
}

export default ExamForm;
