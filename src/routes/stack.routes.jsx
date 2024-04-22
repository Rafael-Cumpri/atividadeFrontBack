import Home from "../screens/home"; // Fix the file path casing
import Profile from "../screens/profile"; // Fix the file path casing

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackRoutes;
