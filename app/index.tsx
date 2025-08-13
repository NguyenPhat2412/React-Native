import Footer from "@/components/app.footer";
import Header from "@/components/app.header";
import Home from "@/components/app.home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const AppTodo = () => {
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
    <View>
      <Header />
      <Home />
      <Footer />
    </View>
  );
};
export default AppTodo;
