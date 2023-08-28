import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ArtificialAlbumListScreen = ({ route }) => {
    console.log(route.params);
    return (
        <View>
            <Text>ArtificialAlbumListScreen</Text>
        </View>
    );
};

export default ArtificialAlbumListScreen;

const styles = StyleSheet.create({});
