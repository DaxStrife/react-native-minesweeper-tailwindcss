import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Cell from "./src/components/Cell";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Cell />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
