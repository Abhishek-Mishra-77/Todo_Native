import { Stack } from 'expo-router';
import { TodoProvider } from "./context/ContextApi";

export default function RootLayout() {
  return (
    <TodoProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </TodoProvider>
  );
}
