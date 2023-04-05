import { Guess } from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
export const GuessResults = ({ onGuesses, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} onValueGuess={onGuesses[num]} onAnswer={answer} />
      ))}
    </div>
  );
};
