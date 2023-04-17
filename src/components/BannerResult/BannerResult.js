import React from "react";
export const BannerResult = ({ onGameStatus }) => {
  const happyBanner = (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );

  const sadBanner = (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );

  return (
    <>
      {onGameStatus === "won" && happyBanner}
      {onGameStatus === "lost" && sadBanner}
    </>
  );
};
