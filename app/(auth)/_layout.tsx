import { Stack } from "expo-router";
import { GuestOnly } from "../../components/auth/GuestOnly";

export default function AuthLayout() {
  return (
    <GuestOnly>
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
}
