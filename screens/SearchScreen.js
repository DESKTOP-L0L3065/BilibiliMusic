import { useState } from "react";
import { ScrollView, TextInput, StyleSheet } from "react-native";

const SearchScreen = ({ navigation }) => {
    // useEffect(() => {
    //     const [searchValue, setSearchValue] = useState();
    // });
    const [searchValue, setSearchValue] = useState();
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
