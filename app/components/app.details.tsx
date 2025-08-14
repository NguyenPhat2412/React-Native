import { globalStyles } from "@/utils/const";
import { useLocalSearchParams } from "expo-router";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
  },
});

export default function Details() {
  const { id, title, description } = useLocalSearchParams();
  return (
    <View style={{ padding: 16 }}>
      <Text>Đây là Details</Text>
      <Text style={[styles.review, globalStyles.globalFont]}>
        Chào mừng bạn đến với trang chi tiết của chúng tôi!
      </Text>
      <Button
        title="Nhấn vào đây"
        onPress={() => Alert.alert(`Bạn đã nhấn nút! ID: ${id}`)}
      />
      <View>
        <Text>ID: {id}</Text>
        <Text>Title: {title}</Text>
        <Text>Description: {description}</Text>
      </View>
    </View>
  );
}
