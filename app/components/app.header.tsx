import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const options = [
    {
      id: 1,
      label: "Tiếng Việt",
    },
    {
      id: 2,
      label: "English",
    },
    {
      id: 3,
      label: "Français",
    },
    {
      id: 4,
      label: "Español",
    },
  ];

  const handleSelect = (item) => {
    setSelectedValue(item.label);
    setVisible(false);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Address: 123 Main St, Anytown, USA</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.selectButton}
        >
          <Text style={styles.selectText}>
            {selectedValue || "Chọn ngôn ngữ"}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={visible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={options}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleSelect(item)}
                    style={styles.option}
                  >
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: "center",
  },
  selectText: {
    fontSize: 16,
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 8,
    padding: 15,
  },
  option: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    padding: 12,
    alignItems: "center",
  },
  closeText: {
    fontSize: 16,
    color: "red",
  },
});
