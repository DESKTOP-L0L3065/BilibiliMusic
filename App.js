import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./screens/SearchScreen";
import MusicAlbumListScreen from "./screens/MusicAlbumListScreen";
import MusicAlbumInfoScreen from "./screens/MusicAlbumInfoScreen";
import ArtificialAlbumListScreen from "./screens/ArtificialAlbumListScreen";
import Test from "./screens/Test";

import Playbar from "./components/Home/Playbar";

import { Provider } from "react-redux";
import store from "./store/store";
import { StatusBar, Dimensions, View, Text } from "react-native";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();
export default function App() {
    let height = Dimensions.get("screen").height;

    return (
        <View style={{ height }}>
            <StatusBar
                backgroundColor="#f7f9fc"
                barStyle="dark-content"
            ></StatusBar>
            <PaperProvider>
                <Provider store={store}>
                    <Playbar></Playbar>
                    <NavigationContainer
                        theme={{
                            colors: {
                                background: "#f7f9fc",
                            },
                        }}
                    >
                        <View
                            style={{
                                height: height - 75 - StatusBar.currentHeight,
                                marginTop: StatusBar.currentHeight,
                            }}
                        >
                            <Stack.Navigator
                                screenOptions={{
                                    headerShown: false,
                                    statusBarTranslucent: true,
                                    statusBarStyle: "dark",
                                }}
                            >
                                <Stack.Screen
                                    name="SearchScreen"
                                    component={SearchScreen}
                                ></Stack.Screen>
                                <Stack.Screen
                                    name="MusicAlbumListScreen"
                                    component={MusicAlbumListScreen}
                                ></Stack.Screen>
                                <Stack.Screen
                                    name="MusicAlbumInfoScreen"
                                    component={MusicAlbumInfoScreen}
                                ></Stack.Screen>
                                <Stack.Screen
                                    name="TestScreen"
                                    component={Test}
                                ></Stack.Screen>
                                <Stack.Screen
                                    name="ArtificialAlbumListScreen"
                                    component={ArtificialAlbumListScreen}
                                ></Stack.Screen>
                            </Stack.Navigator>
                        </View>
                    </NavigationContainer>
                </Provider>
            </PaperProvider>
        </View>
    );
}
