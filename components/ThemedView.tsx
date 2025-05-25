import { View } from "react-native";
import { Colors } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ThemedView({ style = {}, ...props }: any) {
  const theme = Colors.dark;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
