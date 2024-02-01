import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [inputText, setInputText] = useState("");
  const [predictionBest, setPredictionBest] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handlePrediction = async () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>spaCy FastAPI React App</h2>
      </header>

      <body className="App-body">
        <textarea
          className="App-textarea"
          rows="10"
          cols="80"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <div className="App-box">
          <button className="App-button" onClick={handlePrediction}>
            Predict
          </button>
          <p>Prediction using Best Model: {predictionBest}</p>
        </div>
      </body>
    </div>
  );
}

export default App;
