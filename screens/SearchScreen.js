import { useState } from "react";
import { ScrollView, TextInput, StyleSheet, Keyboard } from "react-native";
import { useDispatch } from "react-redux";
import { setShowPlaybar } from "../store/Slices/PlaybarSlice";

const SearchScreen = ({ navigation, route }) => {
    const [searchValue, setSearchValue] = useState();
    const dispatch = useDispatch();
    Keyboard.addListener("keyboardDidShow", () => {
        dispatch(setShowPlaybar(false));
    });
    Keyboard.addListener("keyboardDidHide", () => {
        dispatch(setShowPlaybar(true));
    });
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TextInput
                style={styles.search}
                value={searchValue}
                onChangeText={(value) => {
                    setSearchValue(value);
                }}
                onSubmitEditing={() => {
                    if (searchValue) {
                        navigation.navigate("MusicListScreen", {
                            searchValue: searchValue,
                        });
                    }
                }}
            ></TextInput>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    search: {
        width: 300,
        borderRadius: 20,
        height: 35,
        alignContent: "center",
        backgroundColor: "#f5f5f5",
        marginTop: 10,
        paddingLeft: 20,
    },
});

export default SearchScreen;
