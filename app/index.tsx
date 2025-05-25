import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { theme } from "../constants";

export default function index() {
  return (
    <ThemedView style={style.container}>
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
