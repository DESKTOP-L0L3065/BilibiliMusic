import { Image, ScrollView, StyleSheet, Text } from "react-native";
import infoGetter from "../Api/test2";
import { useEffect, useState } from "react";
import MusicList from "../components/MusicAlbumInfoScreen/MusicList";

const MusicAlbumInfoScreen = ({ route }) => {
    const [albumInfo, setAlbumInfo] = useState(null);
    useEffect(() => {
        // cid bvid aid
        (async () => {
            const value = await infoGetter.getAlbumInfo({
                bvid: route.params.bvid,
                aid: route.params.aid,
            });
            if (value.musicList.length > 1) {
                setAlbumInfo(value.musicList);
            } else {
                value.musicList[0].title = route.params.title;
                value.musicList[0].duration = route.params.duration;
                setAlbumInfo(value.musicList);
            }
        })();
    }, []);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={{
                    uri: route.params.artwork,
                }}
                style={styles.image}
            ></Image>
            {albumInfo ? (
                <MusicList
                    albumInfo={albumInfo}
                    artwork={route.params.artwork}
                ></MusicList>
            ) : (
                <Text>Loading...</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        alignItems: "center",
        flexGrow: 1,
    },
    image: {
        width: 200,
        height: 200,
    },
});

export default MusicAlbumInfoScreen;
