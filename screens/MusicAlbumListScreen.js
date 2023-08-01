import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import bilibili from "../Api/bilibili";
import AlbumList from "../components/MusicAlbumListScreen/AlbumList";

const MusicAlbumListScreen = ({ route, navigation }) => {
    const [musicList, setMusicList] = useState(null);
    useEffect(() => {
        const api = bilibili({ axios, dayjs });
        const getMusicList = async () => {
            const value = await api.search(
                route.params.searchValue,
                1,
                "album"
            );
            setMusicList(value.data);
        };
        getMusicList();
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={musicList}
                renderItem={(item) => {
                    return (
                        <AlbumList
                            info={item}
                            navigation={navigation}
                        ></AlbumList>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
});
export default MusicAlbumListScreen;
