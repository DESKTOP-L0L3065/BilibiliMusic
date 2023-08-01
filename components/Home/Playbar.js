import { StyleSheet, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import { Feather } from "@expo/vector-icons";

const Playbar = () => {
    const musicInfo = useSelector((state) => state.MusicInfoSlice);
    const [width, setWidth] = useState(null);
    const soundRef = useRef(null);
    const [isPlaying, SetIsPlaying] = useState(false);
    const playSound = async () => {
        console.log(musicInfo.musicTitle);
        await soundRef.current.playAsync();
        SetIsPlaying(true);
    };
    const pauseSound = async () => {
        await soundRef.current.pauseAsync();
        SetIsPlaying(false);
    };

    async function unloadSound() {
        try {
            await soundRef.current.unloadAsync();
            console.log("音乐卸载完成");
        } catch (error) {
            console.log("Error unloading sound:", error);
            console.log("音乐卸载失败");
        }
    }

    useEffect(() => {
        if (musicInfo.musicUrl != null) {
            (async () => {
                try {
                    Audio.setAudioModeAsync({ staysActiveInBackground: true });
                    const { sound } = await Audio.Sound.createAsync({
                        headers: musicInfo.musicHeaders,
                        uri: musicInfo.musicUrl,
                    });
                    soundRef.current = sound;
                    console.log("音乐加载完成");
                    playSound();
                    console.log("开始播放");
                } catch (error) {
                    console.log("音乐加载失败", error);
                }
            })();
            return () => {
                if (soundRef.current) {
                    unloadSound();
                }
            };
        }
    }, [musicInfo.musicCid]);

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: 75,
            borderTopWidth: 1,
            borderColor: "#f5f5f5",
            zIndex: 100,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
        },
        playbar: {
            width: "90%",
            height: "70%",
            flexDirection: "row",
            alignItems: "center",
        },
        image: {
            height: "100%",
            width,
        },
        progressBar: {
            flex: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderColor: "#e8e8e8",
            height: "80%",
            justifyContent: "center",
        },
        btnBox: {
            flexDirection: "row",
            // borderWidth: 1,
            position: "absolute",
            right: 0,
            width: 100,
            justifyContent: "space-around",
        },
    });
    return (
        <View style={styles.container}>
            <View style={styles.playbar}>
                <Image
                    source={{
                        uri: musicInfo.musicCover,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                    resizeMethod="resize"
                    onLayout={(e) => {
                        setWidth(e.nativeEvent.layout.height);
                    }}
                ></Image>
                <View style={styles.progressBar}>
                    <View style={styles.btnBox}>
                        <Feather name="skip-back" size={26} color="black" />
                        {isPlaying ? (
                            <Feather
                                name="pause-circle"
                                size={26}
                                color="black"
                                onPress={pauseSound}
                            />
                        ) : (
                            <Feather
                                name="play-circle"
                                size={26}
                                color="black"
                                onPress={playSound}
                            />
                        )}
                        <Feather name="skip-forward" size={26} color="black" />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Playbar;
