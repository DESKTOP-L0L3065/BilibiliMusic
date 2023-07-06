import { StyleSheet, Text, View, ScrollView, Modal } from "react-native";
import { useSelector } from "react-redux";

const Playbar = () => {
    const showPlaybar = useSelector((state) => state.PlaybarSlice.showPlaybar);
    const styles = StyleSheet.create({
        playbar: {
            position: "absolute",
            bottom: showPlaybar == false ? -75 : 0,
            width: "100%",
            height: 75,
            borderWidth: 1,
            zIndex: 100,
            backgroundColor: "white",
        },
    });
    return (
        <View visible={true} style={styles.playbar}>
            <ScrollView style={styles.playbar}>
                <Text>Playbar</Text>
            </ScrollView>
        </View>
    );
};

export default Playbar;
