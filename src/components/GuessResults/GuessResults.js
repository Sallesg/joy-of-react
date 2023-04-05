export const GuessResults = ({onGuesses}) => {
  return (
    <div className="guess-results">
      {onGuesses.map((guess, index) => (
        <p key={index} class="guess">{guess}</p>
      ))}
    </div>
  );
};
