import { Button, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsInividual from "./DetailsInividual";

function Home({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Go to details"
        onPress={() => {
          navigation.navigate("Details");
        }}
      ></Button>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Overview" component={Home} />
      <Stack.Screen name="Details" component={DetailsInividual} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Overview" component={HomeStack} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
