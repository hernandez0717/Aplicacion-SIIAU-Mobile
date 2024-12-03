import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, Platform } from "react-native";
import MainWindow from "./Views/MainWindow";
import Login from "./Views/Login";
import Drawer from "./Views/Drawer";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={MainWindow} options={{ headerShown: false }} />
      <Stack.Screen name="Menu" component={Drawer} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#000000"
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <MyStack />
      {/* <Login /> */}
      {/* <Register/> */}
      {/* <AlumnData/> */}
    </NavigationContainer>
  );
}
