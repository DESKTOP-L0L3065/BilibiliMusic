import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { useDispatch } from "react-redux";
import {
    setMusicTitle,
    setDuration,
    setMusicCover,
    setMusicUrl,
    setMusicHeaders,
    setMusicCid,
} from "../../store/Slices/MusicInfoSlice";
import infoGetter from "../../Api/test2";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MusicList = (props) => {
    const albumInfo = props.albumInfo;
    const dispatch = useDispatch();
    return (
        <View style={{ width: "100%", marginTop: 30 }}>
            {albumInfo.map((item, index) => {
                return (
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => {
                            (async () => {
                                const value = await infoGetter.getMediaSource(
                                    {
                                        aid: item.aid,
                                        bvid: item.bvid,
                                        cid: item.cid,
                                    },
                                    "low"
                                );
                                dispatch(setMusicCover(props.artwork));
                                dispatch(setMusicTitle(item.title));
                                dispatch(setDuration(item.duration));
                                dispatch(setMusicHeaders(value.headers));
                                dispatch(setMusicUrl(value.url));
                                dispatch(setMusicCid(item.cid));
                            })();
                        }}
                    >
                        <View style={styles.list}>
                            <View style={styles.title}>
                                <Text numberOfLines={1}>{item.title}</Text>
                            </View>
                            <View style={styles.btnBox}>
                                <Feather name="heart" size={22} color="black" />
                                <AntDesign
                                    name="heart"
                                    size={22}
                                    color="pink"
                                />
                                <Feather
                                    name="plus-square"
                                    size={22}
                                    color="black"
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
};

export default MusicList;

const styles = StyleSheet.create({
    list: {
        height: 60,
        paddingLeft: 30,
        // borderWidth: 1,
        flexDirection: "row",
    },
    title: {
        // borderWidth: 1,
        width: "60%",
        justifyContent: "center",
    },
    btnBox: {
        flex: 1,
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
