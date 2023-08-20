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

const MusicList = (props) => {
    const albumInfo = props.albumInfo;
    const dispatch = useDispatch();
    return (
        <View style={{ width: "100%", marginTop: 50 }}>
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
                                <Feather name="heart" size={20} color="black" />
                                {/* <AntDesign
                                    name="heart"
                                    size={20}
                                    color="#ff6666"
                                /> */}
                                <Feather
                                    name="plus-square"
                                    size={20}
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
        height: 45,
        paddingLeft: 30,
        flexDirection: "row",
    },
    title: {
        width: "60%",
        justifyContent: "center",
    },
    btnBox: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
