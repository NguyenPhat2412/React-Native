import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Nông Sản Sạch",
        }}
      />
      <Stack.Screen
        name="components/app.details"
        options={{ title: "Chi tiết" }}
      />
    </Stack>
  );
}
