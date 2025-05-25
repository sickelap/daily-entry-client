import { StyleSheet, View } from "react-native";
import { Colors } from "../constants";

export function ThemedCard({ style = {}, ...props }) {
  const theme = Colors["dark"];

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
