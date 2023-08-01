import { useState } from "react";
import {
    ScrollView,
    TextInput,
    StyleSheet,
    Keyboard,
    View,
    Text,
} from "react-native";
import { useDispatch } from "react-redux";
import { setShowPlaybar } from "../store/Slices/PlaybarSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import {
    setState,
    addAlbum,
    removeAlbum,
} from "../store/Slices/AlbumListSlice";

const SearchScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState();
    const dispatch = useDispatch();
    Keyboard.addListener("keyboardDidShow", () => {
        dispatch(setShowPlaybar(false));
    });
    Keyboard.addListener("keyboardDidHide", () => {
        dispatch(setShowPlaybar(true));
    });
    (async () => {
        if (await AsyncStorage.getItem("albumList")) {
            dispatch(setState(await AsyncStorage.getItem("albumList")));
        } else {
            await AsyncStorage.setItem(
                "albumList",
                JSON.stringify([{ name: "收藏", album: [] }])
            );
            dispatch(setState([{ name: "收藏", album: [] }]));
        }
    })();

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.search}
                    value={searchValue}
                    onChangeText={(value) => {
                        setSearchValue(value);
                    }}
                    onSubmitEditing={() => {
                        if (searchValue) {
                            navigation.navigate("MusicAlbumListScreen", {
                                searchValue: searchValue + ` #音乐`,
                            });
                        }
                    }}
                ></TextInput>
                <View style={styles.btnBox}>
                    <View style={styles.btn}>
                        <AntDesign name="heart" size={30} color="pink" />
                        <Text>收藏</Text>
                    </View>
                    <View style={styles.btn}>
                        <AntDesign name="heart" size={30} color="pink" />
                        <Text>下载</Text>
                    </View>
                    <View style={styles.btn}>
                        <AntDesign name="heart" size={30} color="pink" />
                        <Text>历史</Text>
                    </View>
                    <View style={styles.btn}>
                        <AntDesign name="heart" size={30} color="pink" />
                        <Text>创建</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    search: {
        width: 300,
        borderRadius: 20,
        height: 35,
        backgroundColor: "#f5f5f5",
        marginTop: 10,
        paddingLeft: 20,
    },
    btnBox: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        // borderWidth: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    btn: {
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SearchScreen;
