import { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    video: {
        height: 200,
        borderWidth: 1,
    },
});

const Test = () => {
    const musicInfo = useSelector((state) => state.MusicInfoSlice);
    const soundRef = useRef(null);
    const playSound = async () => {
        console.log(musicInfo.musicTitle);
        await soundRef.current.playAsync();
    };
    const pauseSound = async () => {
        await soundRef.current.pauseAsync();
    };

    async function unloadSound() {
        try {
            await soundRef.current.unloadAsync();
            // console.log("音乐卸载完成");
        } catch (error) {
            // console.log("Error unloading sound:", error);
            // console.log("音乐卸载失败");
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const { sound } = await Audio.Sound.createAsync({
                    uri: musicInfo.musicUrl,
                });
                soundRef.current = sound;
                // console.log("音乐加载完成");
            } catch (error) {
                // console.log("音乐加载失败");
            }
        })();
        return () => {
            unloadSound();
        };
    }, []);
    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
            <Button title="Pause Sound" onPress={pauseSound} />
        </View>
    );
};

export default Test;
