function Reset({
  setBoardData,
  setCurrentPlayer,
  startingPlayer,
  setWinningPlayer,
  setTurnCount,
  board,
}) {
  const resetGame = () => {
    setBoardData(() => board);
    setCurrentPlayer(() => startingPlayer);
    setWinningPlayer(() => undefined);
    setTurnCount(0);
  };
  return (
    <a class="button-3d" onClick={resetGame}>
      Reset
    </a>
  );
}

export default Reset;
