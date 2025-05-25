import { useRouter } from "expo-router";
import { useEffect } from "react";

import { ThemedLoader } from "../ThemedLoader";

export function UserOnly({ children }: any) {
  const user = null;
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace("/login");
    }
  }, [user]);

  if (!user) {
    return <ThemedLoader />;
  }

  return children;
}
