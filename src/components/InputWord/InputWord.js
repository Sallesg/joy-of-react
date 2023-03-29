import React from "react";
export const InputWord = ({ onWordInput }) => {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuess("");
    console.log({ guess });
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
