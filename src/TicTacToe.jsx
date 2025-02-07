import Board from "./Board";
import { useState } from "react";
import GameStatus from "./GameStatus";
import Reset from "./Reset";
function TicTacToe() {
  class Cell {
    constructor(x, y, spaceIndex) {
      this.x = x;
      this.y = y;
      this.icon = "";
      this.id = `cell-${x}-${y}`;
      this.spaceIndex = spaceIndex;
    }
  }

  const board = [];
  let index = 1;
  for (let y = 2; y >= 0; y--) {
    for (let x = 0; x <= 2; x++) {
      board.push(new Cell(x + 1, y + 1, index));
      index++;
    }
  }

  const [boardData, setBoardData] = useState(board);

  const players = [
    {
      icon: "naught",
      name: "player 1",
      winner: false,
    },
    {
      icon: "cross",
      name: "player 2",
      winner: false,
    },
  ];

  const [currentPlayer, setCurrentPlayer] = useState(players[0]);
  const [winningPlayer, setWinningPlayer] = useState(undefined);
  const [turnCount, setTurnCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className="game-area">
      <Board
        boardData={boardData}
        setBoardData={setBoardData}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        players={players}
        winningPlayer={winningPlayer}
        setWinningPlayer={setWinningPlayer}
        setTurnCount={setTurnCount}
        turnCount={turnCount}
        setGameOver={setGameOver}
      ></Board>
      <GameStatus
        currentPlayer={currentPlayer}
        winningPlayer={winningPlayer}
        turnCount={turnCount}
        gameOver={gameOver}
      ></GameStatus>
      <Reset
        setBoardData={setBoardData}
        setCurrentPlayer={setCurrentPlayer}
        setWinningPlayer={setWinningPlayer}
        startingPlayer={players[0]}
        board={board}
        setTurnCount={setTurnCount}
      ></Reset>
    </div>
  );
}

export default TicTacToe;
