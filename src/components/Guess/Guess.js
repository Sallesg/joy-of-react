import { range } from "../../utils";
import { checkGuess } from "../../../src/game-helpers";

const Cell = ({ onLetter, onStatus }) => {
  const hasStatus = onStatus ? `cell ${onStatus}` : "cell";
  return <span className={hasStatus}>{onLetter}</span>;
};

export const Guess = ({ onValueGuess = "", onAnswer }) => {
  const checkedLetter = checkGuess(onValueGuess, onAnswer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          onLetter={checkedLetter?.[num].letter}
          onStatus={checkedLetter?.[num].status}
        />
      ))}
    </p>
  );
};
