import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";
import Results from "./components/Results/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: newValue,
    }));
  };

  return (
    <>
      <Header />
      <main>
        <UserInput userInput={userInput} onChangeInput={handleChange} />
        {!inputIsValid && (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
        {inputIsValid && <Results userInput={userInput} />}
      </main>
    </>
  );
}

export default App;
