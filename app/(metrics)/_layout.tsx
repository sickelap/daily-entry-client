import { Stack } from "expo-router";
import { theme } from "../../constants";
import { UserProvider } from "../../contexts/UserContext";

export default function MetricsLayout() {
  return (
    <UserProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerShown: false,
        }}
      >
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(metrics)" />
      </Stack>
    </UserProvider>
  );
}
