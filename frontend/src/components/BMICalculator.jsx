import React, { useState } from "react";
import { toast } from "react-toastify";

const bmiInfoData = {
  Male: [
    { category: "Underweight", bmiRange: "< 18.5", weightRange: "Less than 56 kg" },
    { category: "Normal", bmiRange: "18.5 - 24.9", weightRange: "56 - 75 kg" },
    { category: "Overweight", bmiRange: "25 - 29.9", weightRange: "76 - 90 kg" },
    { category: "Obese", bmiRange: "30+", weightRange: "Above 90 kg" },
  ],
  Female: [
    { category: "Underweight", bmiRange: "< 18.5", weightRange: "Less than 50 kg" },
    { category: "Normal", bmiRange: "18.5 - 24.9", weightRange: "50 - 68 kg" },
    { category: "Overweight", bmiRange: "25 - 29.9", weightRange: "69 - 80 kg" },
    { category: "Obese", bmiRange: "30+", weightRange: "Above 80 kg" },
  ],
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  const resetAll = () => {
    setHeight("");
    setWeight("");
    setGender("");
    setBmi("");
    setShowInfo(false);
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="form-card">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="gender-buttons">
              <label>Gender</label>
              <div className="gender-btn-group">
                <button
                  type="button"
                  className={`gender-btn ${gender === "Male" ? "active" : ""}`}
                  onClick={() => setGender("Male")}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`gender-btn ${gender === "Female" ? "active" : ""}`}
                  onClick={() => setGender("Female")}
                >
                  Female
                </button>
              </div>
            </div>
            <button type="submit">Calculate BMI</button>
            <button type="button" onClick={resetAll}>Reset</button>
          </form>

          {bmi && (
            <div className="bmi-result">
              Your BMI is <span>{bmi}</span>
            </div>
          )}
        </div>

        <div className="info-panel-wrapper">
          <button
            className="info-toggle-btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? "Hide BMI Info" : "How to read BMI?"}
          </button>

          {showInfo && (
            <div className="info-panel">
              <h3>BMI Categories & Weight Ranges</h3>
              {gender ? (
                <ul>
                  {bmiInfoData[gender].map(({ category, bmiRange, weightRange }) => (
                    <li key={category}>
                      <strong>{category}</strong>: BMI {bmiRange}, Weight ~ {weightRange}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Please select a gender to see info.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
