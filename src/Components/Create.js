import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");

    axios
      .post("https://659b8266d565feee2dab23f0.mockapi.io/Crud-React", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      })
      .catch((error) => {
        console.error("Error creating data:", error);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2 p-2">
        <h1>Create</h1>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>

      <form className="p-4">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
