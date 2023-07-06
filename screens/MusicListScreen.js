import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import bilibili from "../Api/bilibili";
import MusicList from "../components/MusicListScreen/MusicList";

const MusicListScreen = ({ route, navigation }) => {
    const [musicList, setMusicList] = useState(null);
    useEffect(() => {
        console.log("bb");
        const api = bilibili({ axios, dayjs });
        const getMusicList = async () => {
            await api
                .search(route.params.searchValue, 1, "album")
                .then((value) => value)
                .then((value) => {
                    setMusicList(value.data);
                });
        };
        getMusicList();
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={musicList}
                renderItem={(item) => {
                    return (
                        <MusicList
                            info={item}
                            navigation={navigation}
                        ></MusicList>
                    );
                }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
});
export default MusicListScreen;
