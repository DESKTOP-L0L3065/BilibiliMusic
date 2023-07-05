import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const Playbar = () => {
    const showPlaybar = useSelector((state) => state.PlaybarSlice.showPlaybar);
    return showPlaybar == false ? null : (
        <ScrollView style={styles.playbar}>
            <Text>Playbar</Text>
        </ScrollView>
    );
};

export default Playbar;

const styles = StyleSheet.create({
    playbar: {
        position: "absolute",
        // top: 20,
        bottom: 0,
        width: "100%",
        height: 50,
        borderWidth: 1,
        zIndex: 100,
    },
});
