import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [inputText, setInputText] = useState("");
  const [predictionBest, setPredictionBest] = useState("waiting for input...");
  const [predictionLast, setPredictionLast] = useState("waiting for input...");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handlePrediction = async () => {
    const payload = { inputText: inputText };

    axios
      .post("http://127.0.0.1:8000/predict", payload)
      .then(function (response) {
        setPredictionBest(response.data.predict_best);
        setPredictionLast(response.data.predict_last);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
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
          onChange={handleInputChange}
          placeholder="Enter text..."
        />
        <div className="App-box">
          <button className="App-button" onClick={handlePrediction}>
            Predict
          </button>
          <p>
            Prediction using Best Model:{" "}
            <span className="App-text-accent">{predictionBest}</span>
          </p>
          <p>
            Prediction using Last Model:{" "}
            <span className="App-text-accent">{predictionLast}</span>
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
