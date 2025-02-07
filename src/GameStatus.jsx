function GameStatus({ currentPlayer, winningPlayer, turnCount }) {
  let status = "";

  const playerMessages = {
    turns: [
      "Give me an O Player 1!",
      "Player 2 time to place an X you got this",
      "try and get 3 in a ROW lady O",
      "You know the drill mr X",
      "bend those elbows into a beautiful O formation",
      "between you and me mr X I don't really like player 1",
      "OOO is the dream",
      "SO CLOSE",
      "Is this just another draw?",
    ],
  };
  if (!winningPlayer) {
    status = playerMessages.turns[turnCount];
  } else if (winningPlayer.name === "draw") {
    status = "It's a draw 😢";
  } else if (winningPlayer.icon === "cross") {
    status = `omfg you actually did it mr x`;
  } else if (winningPlayer.icon === "naught") {
    status = "a perfect victory as always lady O";
  }

  const resetGame = () => {};

  return <p class="status">{status}</p>;
}

export default GameStatus;
