import { globalStyles } from "@/utils/const";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import Footer from "./components/app.footer";
import Header from "./components/app.header";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const router = useRouter();
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("../assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Header />
        <Text style={globalStyles.globalFont}>Đây là Home</Text>
        <Button
          title="Đi đến Details"
          onPress={() => router.push("/components/app.details")}
        />
        <Button
          title="Đi đến Details (kèm params)"
          onPress={() =>
            router.push({
              pathname: "/components/app.details",
              params: { id: 42 },
            })
          }
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default App;
