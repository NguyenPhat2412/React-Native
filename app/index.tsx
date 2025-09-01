import { globalStyles } from "@/utils/const";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import Footer from "./components/app.footer";
import Header from "./components/app.header";
import "./global.css";
SplashScreen.preventAutoHideAsync();
interface DataItem {
  id: number;
  title: string;
  description: string;
}
const App = () => {
  const router = useRouter();
  const [data, setData] = useState<DataItem[]>([
    {
      id: 1,
      title: "Item 1",
      description: "Description for item 1",
    },
    {
      id: 2,
      title: "Item 2",
      description: "Description for item 2",
    },
  ]);
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
    <SafeAreaView>
      <View className="flex p-5 justify-center items-center bg-dark">
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

        {/* Danh sách data */}
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Button
                title={item.title}
                onPress={() =>
                  router.push({
                    pathname: "/components/app.details",
                    params: {
                      id: item.id,
                      title: item.title,
                      description: item.description,
                    },
                  })
                }
              />
            )}
          />
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default App;
