import { globalStyles } from "@/utils/const";
import { useNavigation } from "@react-navigation/native";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 16 }}>
      <Text style={[styles.title, globalStyles.globalFont]}>Đây là Home</Text>
      <Button
        title="Đi đến Details"
        onPress={() => Alert.alert("Navigating to Details")}
      />
    </View>
  );
}
