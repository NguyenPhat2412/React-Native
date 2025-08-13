import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const increment = () => {
    setNumber((prev) => prev + 1);
  };

  const decrement = () => {
    setNumber((prev) => prev - 1);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text>Set Text: {name}</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter text"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "80%",
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
          multiline
        />
      </View>
      <View>
        <Text>Set Age: {age}</Text>
        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="Enter text"
          keyboardType="numeric"
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: "80%",
            marginBottom: 20,
            paddingHorizontal: 10,
          }}
          multiline
        />
      </View>

      <Text>{number}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
}
