import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Appbar,
  BottomNavigation,
  FAB,
  Icon,
  Provider as PaperProvider,
  Text,
} from "react-native-paper";
import AddTodo from "./pages/add-todo";

// Screens
const HomeRoute = () => <Text>Home</Text>;
const SettingsRoute = () => <Text>Settings</Text>;
const ProfileRoute = () => <Text>Profile</Text>;

const routes = [
  {
    key: "home",
    title: "Home",
    focusedIcon: "home",
    unfocusedIcon: "home-outline",
    component: HomeRoute,
  },
  {
    key: "settings",
    title: "Settings",
    focusedIcon: "cog",
    unfocusedIcon: "cog-outline",
    component: SettingsRoute,
  },
  {
    key: "profile",
    title: "Profile",
    focusedIcon: "account",
    unfocusedIcon: "account-outline",
    component: ProfileRoute,
  },
];

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [currentRoute] = React.useState(routes[index]);

  const renderSceneObject = {
    home: HomeRoute,
    settings: SettingsRoute,
    profile: ProfileRoute,
    addTodo: AddTodo,
  };

  const renderIcon = ({ route, focused, color }) => {
    const icon = focused ? route.focusedIcon : route.unfocusedIcon;
    return <Icon source={icon} color={color} />;
  };

  console.log("renderSceneObject :", renderSceneObject);

  const renderScene = BottomNavigation.SceneMap(renderSceneObject);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title={routes[index].title} />
        </Appbar.Header>

        <View style={styles.body}>
          <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            renderIcon={renderIcon}
          />

          <FAB
            style={styles.fab}
            icon="plus"
            onPress={() =>
              setIndex(routes.findIndex((route) => route.key === "add-todo"))
            }
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 16, // Adjust the value to position the FAB relative to the BottomNavigation
  },
});
