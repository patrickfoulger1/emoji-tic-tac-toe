import Icon from "./Icon";
function Board({
  boardData,
  setBoardData,
  currentPlayer,
  setCurrentPlayer,
  players,
  setWinningPlayer,
  winningPlayer,
  turnCount,
  setTurnCount,
}) {
  const switchPlayer = () => {
    setCurrentPlayer((currentPlayer) => {
      const newPlayer =
        currentPlayer.icon === "naught" ? players[1] : players[0];
      return newPlayer;
    });
  };

  const getCell = (spaceId) => {
    const space = boardData.find((space) => space.id === spaceId);
    return space;
  };

  const setBoardCell = (icon, spaceId) => {
    setBoardData((boardData) => {
      const spaceToUpdate = getCell(spaceId);
      const boardDataCopy = [...boardData];
      spaceToUpdate.icon = icon;

      checkWinner();
      return boardDataCopy;
    });
  };

  const getCellValue = (spaceId) => {
    return getCell(spaceId).icon;
  };

  const checkWinner = () => {
    const isBoardFilled = boardData.every((cell) => cell.icon !== "");
    const winStrings = ["123", "456", "789", "147", "258", "369", "159", "357"];
    const crossSpaceIndexes = boardData
      .filter((cell) => {
        return cell.icon === "cross";
      })
      .map((cell) => cell.spaceIndex);

    const naughtSpaceIndexes = boardData
      .filter((cell) => {
        return cell.icon === "naught";
      })
      .map((cell) => cell.spaceIndex);

    let xWins = false;
    let oWins = false;
    for (const winString of winStrings) {
      if (!xWins) {
        xWins =
          crossSpaceIndexes.includes(+winString[0]) &&
          crossSpaceIndexes.includes(+winString[1]) &&
          crossSpaceIndexes.includes(+winString[2]);
      }

      if (!oWins) {
        oWins =
          naughtSpaceIndexes.includes(+winString[0]) &&
          naughtSpaceIndexes.includes(+winString[1]) &&
          naughtSpaceIndexes.includes(+winString[2]);
      }
    }

    if (xWins) {
      setWinningPlayer(() => {
        return players[1];
      });
    }

    if (oWins) {
      setWinningPlayer(() => {
        return players[0];
      });
    }

    if (isBoardFilled && !oWins && !xWins) {
      setWinningPlayer(() => {
        return { name: "draw", icon: "" };
      });
    }
  };

  const cellElements = boardData.map(({ id, icon }) => {
    return (
      <div
        onClick={() => {
          if (getCellValue(id) === "" && !winningPlayer) {
            setBoardCell(currentPlayer.icon, id);
            switchPlayer();
            setTurnCount(turnCount + 1);
          }
        }}
        id={id}
        key={id}
        className="cell"
      >
        <Icon type={icon}></Icon>
      </div>
    );
  });

  return <div className="game">{cellElements}</div>;
}

export default Board;
