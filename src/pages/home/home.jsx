import React from "react";
import Child1 from "./child1";
import { useState } from "react";

const Homepage = () => {
  //   let username = "Bhaskar";
  const CARD_WIDTH = { width: "350px", maxWidth: "100%" };

  const [loadChildComponent, setLoadChildComponent] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginFormData, setLoginFormData] = useState(null);

  const loginFormHandler = (event) => {
    event.preventDefault();
    const formData = {
      username: username,
      password: password,
    };
    setLoginFormData(formData);
    setLoadChildComponent(true);
  };

  if (!loadChildComponent) {
    return (
      <>
        <div className="container">
          <div className="card shadow ms-auto me-auto mt-5" style={CARD_WIDTH}>
            <div className="card-header">
              <div className="title text-center">Login Form</div>
            </div>
            <div className="card-body p-4">
              <form onSubmit={loginFormHandler}>
                <label>Username: </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
                <label>Password: </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div className="text-center mt-3">
                  <button
                    className="btn btn-primary form-control"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (loadChildComponent) {
    return (
      <Child1
        loadChildComponent={setLoadChildComponent}
        loginFormData={loginFormData}
      />
    );
  }
};

export default Homepage;
