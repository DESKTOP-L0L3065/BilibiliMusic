import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";

const MusicList = (props) => {
    return (
        <TouchableNativeFeedback
            onPress={() => {
                props.navigation.navigate("MusicAlbumScreen", {
                    aid: props.info.item.aid,
                    album: props.info.item.album,
                    artist: props.info.item.artist,
                    artwork: props.info.item.artwork,
                    bvid: props.info.item.bvid,
                    date: props.info.item.date,
                    description: props.info.item.description,
                    title: props.info.item.title,
                });
            }}
        >
            <View style={styles.list}>
                <Text numberOfLines={1} style={styles.title}>
                    {props.info.item.title.replace(/\【(.*?)\】/g, "")}
                </Text>
                <Text style={styles.artist}>{props.info.item.artist}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export default MusicList;

const styles = StyleSheet.create({
    list: {
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
    },
    title: {},
    artist: {
        color: "#7e847b",
        fontSize: 12,
    },
});
