import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Results from "./components/Results/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import HelpfulHints from "./components/HelpfulHints/HelpfulHints.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = validateInput(userInput);

  return (
    <>
      <div className="container">

        <div className="helpful-hints">
          <HelpfulHints />
        </div>

        <div className="green-center">
          <Header />
          <UserInput userInput={userInput} onChange={handleChange} />
          {!inputIsValid && (
            <p className="center">
              Please choose a number greater than zero :)
            </p>
          )}
          {inputIsValid && <Results input={userInput} />}
        </div>

      </div>
      
    </>
  );

  /*
   * Function to handle setting new input from the user
   */
  function handleChange(inputIdentifier, newValue) {
    const numValue = +newValue;
    if (!isNaN(numValue) && numValue >= 0) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [inputIdentifier]: numValue, //the + will force a conversion from string to num value
        };
      });
    }
  }

  /*
   * Function to validate user input
   */
  function validateInput(input) {
    return (
      !isNaN(input.initialInvestment) &&
      input.initialInvestment >= 1 &&
      !isNaN(input.annualInvestment) &&
      input.annualInvestment >= 1 &&
      !isNaN(input.expectedReturn) &&
      input.expectedReturn >= 1 &&
      !isNaN(input.duration) &&
      input.duration >= 1
    );
  }
}

export default App;
