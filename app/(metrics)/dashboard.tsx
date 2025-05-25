import { StyleSheet } from "react-native";
import { ThemedView } from "../../components/ThemedView";
import { Link } from "expo-router";
import { ThemedText } from "../../components/ThemedText";

export default function Dashboard() {
  return (
    <ThemedView safe={true} style={styles.container}>
      <Link href="/login">
        <ThemedText>abr</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
