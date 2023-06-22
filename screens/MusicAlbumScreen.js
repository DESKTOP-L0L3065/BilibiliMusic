import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
} from "react-native";
import bilibili from "../Api/bilibili";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
const MusicAlbumScreen = ({ route }) => {
    const [albumInfo, setAlbumInfo] = useState(null);
    const infoGetter = bilibili({ axios, dayjs });
    useEffect(() => {
        // cid bvid aid
        infoGetter
            .getAlbumInfo({
                bvid: route.params.bvid,
                aid: route.params.aid,
            })
            .then((value) => value)
            .then((value) => {
                setAlbumInfo(value.musicList);
            });
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: route.params.artwork,
                }}
                style={styles.image}
            ></Image>
            {albumInfo != null ? (
                albumInfo.length > 1 ? (
                    albumInfo.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    let a = infoGetter
                                        .getMediaSource({
                                            aid: item.aid,
                                            bvid: item.bvid,
                                        })
                                        .then((value) => {
                                            console.log(value);
                                        });
                                }}
                            >
                                <View>
                                    <Text>{item.title}aaaa</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        );
                    })
                ) : (
                    <Text onPress={() => {}}>{route.params.title}</Text>
                )
            ) : (
                <Text>...</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default MusicAlbumScreen;
