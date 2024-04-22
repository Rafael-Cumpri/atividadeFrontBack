import Home from "../screens/home"; // Fix the file path casing
import Profile from "../screens/profile"; // Fix the file path casing

import { Feather } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "blue" : "#d6d6d6"}
            />
          ),
          tabBarLabel: "Home",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "#d6d6d6",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "blue" : "#d6d6d6"}
            />
          ),
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "#d6d6d6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
