import { Stack } from "expo-router";
import { theme } from "../constants";
import { UserProvider } from "../contexts/UserContext";

export default function index() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.background },
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(metrics)" />
        <Stack.Screen name="index" />
      </Stack>
    </UserProvider>
  );
}
