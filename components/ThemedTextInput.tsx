import { TextInput } from "react-native";
import { Colors } from "../constants";

export function ThemedTextInput({ style = {}, ...props }) {
  const theme = Colors.dark;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
}
