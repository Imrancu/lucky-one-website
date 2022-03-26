import React from "react";
import "./Answers.css";

const Answers = () => {
  return (
    <div className="question-answer">
      <div className="ans-container">
        <h2>Q1: How React Works?</h2>
        <p>
          React is a javascript library that makes interactive user interfaces.
          It's a component based technology. By using React, we can breakdown
          whole application in small parts. Components are like small parts of
          human body. Actually React uses to build SPA (single page application)
        </p>
      </div>
      <div className="ans-container">
        <h2>Q2: What are differences between props and state?</h2>
        <p>
          Props comes from property. State is a pure javascript object that
          obtains many property in react. Props is used to passing data one
          component to another component. State is used to update data to UI
          without reloading page. Finally, props and state are two interesting
          concepts in React tech.
        </p>
      </div>
    </div>
  );
};

export default Answers;
