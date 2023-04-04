import { View } from "react-native";

const Cell = ({ row, col, isBomb = false, isFlipped = false, value = 0 }) => {
  return <View className="w-8 h-8 bg-red-600"></View>;
};

export default Cell;
