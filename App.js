import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

import SearchScreen from "./screens/SearchScreen";
import MusicListScreen from "./screens/MusicListScreen";
import MusicAlbumScreen from "./screens/MusicAlbumScreen";

import Playbar from "./components/Home/Playbar";

import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { StatusBar } from "react-native";

import { Text, View, ScrollView } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer
                theme={{
                    colors: {
                        background: "white",
                    },
                }}
            >
                <Provider store={store}>
                    <Playbar></Playbar>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                            statusBarTranslucent: true,
                            statusBarStyle: "dark",
                            contentStyle: {
                                marginTop: StatusBar.currentHeight,
                            },
                        }}
                    >
                        <Stack.Screen
                            name="SearchScreen"
                            component={SearchScreen}
                        ></Stack.Screen>
                        <Stack.Screen
                            name="MusicListScreen"
                            component={MusicListScreen}
                        ></Stack.Screen>
                        <Stack.Screen
                            name="MusicAlbumScreen"
                            component={MusicAlbumScreen}
                        ></Stack.Screen>
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </View>
    );
}
