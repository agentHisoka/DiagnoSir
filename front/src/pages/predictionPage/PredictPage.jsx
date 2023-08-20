import React, { useState } from "react";
//import "rsuite/dist/rsuite.min.css";
import { AutoComplete } from "rsuite";
import data from "./dataSource.json";
import axios from "axios";

export default function PredictPage() {
  const [symptom1, setSymptom1] = useState("");
  const [symptom2, setSymptom2] = useState("");
  // Define separate state variables for each input field

  const handleDiagnoseClick = async () => {
    try {
      const selectedSymptoms = [symptom1, symptom2];
      // Send the selectedSymptoms array to the backend
      const response = await axios.post("http://localhost:3001/getDiagnosis", {
        symptoms: selectedSymptoms,
      });

      console.log(response.data); // Handle response from the server
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="container">
      <h4 className="title">
        Can you input the symtoms you feel in order to get specific diagnosis{" "}
      </h4>
      <div className="auto-complete-container">
        <AutoComplete
          className="styled-auto-complete"
          placeholder="Enter Weekday"
          data={data.symptoms}
          onSelect={(value) => setSymptom1(value)}
        />
        <AutoComplete
          className="styled-auto-complete"
          placeholder="Enter Weekday"
          data={data.symptoms}
          onSelect={(value) => setSymptom2(value)}
        />

        <button className="diagnose-button" onClick={handleDiagnoseClick}>
          Diagnose
        </button>
      </div>
    </div>
  );
}
