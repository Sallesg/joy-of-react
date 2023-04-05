import { range } from "../../utils";

export const Guess = ({ onValueGuess }) => {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {onValueGuess ? onValueGuess[num] : undefined}
        </span>
      ))}
    </p>
  );
};
