import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  /*
   * Function to handle setting new input from the user
   */
  function handleChange(inputIdentifier, newValue) {
    const numValue = +newValue;
    if (!isNaN(numValue) && numValue < 0) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: +newValue, //the + will force a conversion from string to num value
        };
      });
    }
  }
  const inputIsValid = !isNaN(userInput.duration) && userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please choose a number greater than zero :)</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
