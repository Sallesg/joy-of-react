import React from "react";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { sample } from "../../utils";
import { WORDS } from "../../data";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess]);
  };

  return (
    <>
      <GuessResults onGuesses={guesses} answer={answer}/>
      <GuessInput onHandleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
