import { Stack } from "expo-router";
import { View } from "react-native";
import "../global.css";

export default function App() {
  return (
    <View className="flex-1 ">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}
