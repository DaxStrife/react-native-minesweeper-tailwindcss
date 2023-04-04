import { useReducer } from "react";
import { View } from "react-native";

import { createBoard } from "../utils/createBoard";

const BOARD_SIZE = 20;
const BOMBS = 10;

const Board = () => {
  const [gameState, dispatch] = useReducer(gameReducer, {
    board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS),
    boardWidth: 20,
    bombs: 10,
  });

  return (
    <View>
      {gameState.board.map((row, indexRow) => (
        <View key={`row-board-${indexRow}`}></View>
      ))}
    </View>
  );
};

export default Board;
