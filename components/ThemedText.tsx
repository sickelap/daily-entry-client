import { Text } from "react-native";
import { Colors } from "../constants";

export function ThemedText({ title = false, ...props }) {
  const theme = Colors.dark;

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }]} {...props} />;
}
