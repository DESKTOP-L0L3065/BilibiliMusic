import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../store/Slices/AlbumListSlice";

const AlbumList = (props) => {
    // const albumList = useSelector((state) => state.AlbumListSlice.album);
    const dispatch = useDispatch();
    // console.log(props.info);
    return (
        <TouchableNativeFeedback
            onPress={() => {
                props.navigation.navigate("MusicAlbumInfoScreen", {
                    aid: props.info.item.aid,
                    album: props.info.item.album,
                    artist: props.info.item.artist,
                    artwork: props.info.item.artwork,
                    bvid: props.info.item.bvid,
                    date: props.info.item.date,
                    description: props.info.item.description,
                    title: props.info.item.title,
                    duration: props.info.item.duration,
                });
            }}
        >
            <View style={styles.list}>
                <View style={styles.infoBox}>
                    <Text numberOfLines={1} style={styles.title}>
                        {props.info.item.title.replace(/【|】/g, "")}
                    </Text>
                    <Text style={styles.artist}>{props.info.item.artist}</Text>
                </View>
                <Feather
                    name="plus-square"
                    style={styles.plus}
                    size={22}
                    color="black"
                    onPress={() => {
                        dispatch(
                            addAlbum({
                                name: props.info.item.title.replace(
                                    /【|】/g,
                                    ""
                                ),
                                aid: props.info.item.aid,
                                bvid: props.info.item.bvid,
                                artwork: props.info.item.artwork,
                            })
                        );
                    }}
                />
            </View>
        </TouchableNativeFeedback>
    );
};

export default AlbumList;

const styles = StyleSheet.create({
    list: {
        height: 60,
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    infoBox: {
        flex: 1,
        paddingRight: 40,
    },
    title: {},
    artist: {
        color: "#7e847b",
        fontSize: 12,
    },
    plus: {
        right: 0,
        top: -2,
    },
});
