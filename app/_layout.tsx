import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Trang chủ",
        }}
      />
      <Stack.Screen
        name="components/app.details"
        options={{ title: "Chi tiết" }}
      />
    </Stack>
  );
}
