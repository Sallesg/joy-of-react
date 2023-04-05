import React from "react";
export const GuessInput = ({ onHandleSubmitGuess }) => {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleSubmitGuess(guess);
    setGuess("");
  };

  const handleInput = (e) => {
    const newWord = e.target.value;
    const upperCaseWord = newWord.toUpperCase();
    setGuess(upperCaseWord);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => handleInput(e)}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
};
