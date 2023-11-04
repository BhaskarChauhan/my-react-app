import React from "react";

const Child1 = ({ loadChildComponent, loginFormData }) => {
  //   console.log(props);
  return (
    <>
      <div className="container">
        <h1>Child1</h1>
        <h6>username: {loginFormData.username}</h6>
        <h6>password: {loginFormData.password}</h6>
        <button
          className="btn btn-secondary"
          onClick={() => loadChildComponent(false)}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Child1;
