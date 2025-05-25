import { ActivityIndicator } from "react-native";
import { Colors } from "../constants";

import { ThemedView } from "./ThemedView";

export function ThemedLoader() {
  const theme = Colors.dark;

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color={theme.text} />
    </ThemedView>
  );
}
