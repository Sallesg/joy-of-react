import React, { useState } from "react";
import { GuessInput } from "../GuessInput/GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { BannerResult } from "../BannerResult/BannerResult";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState("running");
  const [guesses, setGuesses] = useState([]);

  const handleSubmitGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults onGuesses={guesses} answer={answer} />
      <GuessInput onHandleSubmitGuess={handleSubmitGuess} />
      <BannerResult onGameStatus={gameStatus} />
    </>
  );
}

export default Game;
