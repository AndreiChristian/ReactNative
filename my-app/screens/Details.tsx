import { Button, Text, View } from "react-native";

function DetailsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}

export default DetailsScreen;
