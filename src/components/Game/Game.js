import React from "react";
import { InputWord } from "../InputWord/InputWord";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordInput, setWordInput] = React.useState("");

  return (
    <>
      Put a game here!
      <InputWord onWordInput={wordInput} />
    </>
  );
}

export default Game;
