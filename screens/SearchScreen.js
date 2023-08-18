import { useEffect, useState } from "react";
import {
    ScrollView,
    TextInput,
    StyleSheet,
    Keyboard,
    View,
    Text,
    Button,
    Modal,
    TouchableHighlight,
    KeyboardAvoidingView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setShowPlaybar } from "../store/Slices/PlaybarSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
    setState,
    addAlbum,
    removeAlbum,
} from "../store/Slices/AlbumListSlice";

const SearchScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState();
    const dispatch = useDispatch();
    const albumList = useSelector((state) => state.AlbumListSlice.album);
    const [modal, setModal] = useState(false);

    Keyboard.addListener("keyboardDidShow", () => {
        dispatch(setShowPlaybar(false));
    });
    Keyboard.addListener("keyboardDidHide", () => {
        dispatch(setShowPlaybar(true));
    });

    useEffect(() => {
        (async () => {
            if ((await AsyncStorage.getItem("albumList").length) >= 1) {
                console.log(AsyncStorage.getItem("albumList").length);
                dispatch(
                    setState(
                        JSON.parse(await AsyncStorage.getItem("albumList"))
                    )
                );
            } else {
                await AsyncStorage.setItem(
                    "albumList",
                    JSON.stringify([{ name: "收藏", album: [] }])
                );
                dispatch(setState([{ name: "收藏", album: [] }]));
            }
        })();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.search}
                    value={searchValue}
                    onChangeText={(value) => {
                        setSearchValue(value);
                    }}
                    onSubmitEditing={() => {
                        if (searchValue) {
                            navigation.navigate("MusicAlbumListScreen", {
                                searchValue: searchValue,
                            });
                        }
                    }}
                ></TextInput>
                <View style={styles.btnBox}>
                    <View style={styles.btn}>
                        <AntDesign name="heart" size={24} color="#ff6666" />
                        <Text>收藏</Text>
                    </View>
                    <View style={styles.btn}>
                        <Feather
                            name="download-cloud"
                            size={24}
                            color="black"
                        />
                        <Text>下载</Text>
                    </View>
                    <View style={styles.btn}>
                        <AntDesign
                            name="clockcircleo"
                            size={24}
                            color="black"
                        />
                        <Text>历史</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => setModal(true)}>
                        <View style={styles.btn}>
                            <AntDesign
                                name="plussquareo"
                                size={24}
                                color="black"
                            />
                            <Text>创建</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ width: "100%", marginTop: 30 }}>
                    {
                        (albumList.length = 0
                            ? null
                            : albumList.map((item, index) => (
                                  <TouchableHighlight
                                      key={index}
                                      activeOpacity={1}
                                      underlayColor="#bababa"
                                      onPress={() => {}}
                                  >
                                      <View style={styles.albumItem}>
                                          {item.artwork ? (
                                              <Image
                                                  source={{
                                                      uri: item.artwork,
                                                  }}
                                                  style={styles.image}
                                              ></Image>
                                          ) : (
                                              <Image
                                                  source={require("../assets/FFFFFFFF.png")}
                                                  style={styles.image}
                                              ></Image>
                                          )}
                                          <Text
                                              numberOfLines={1}
                                              ellipsizeMode="tail"
                                              style={{
                                                  flex: 1,
                                                  marginRight: 40,
                                              }}
                                          >
                                              {item.name}
                                          </Text>
                                          {index == 0 ? null : (
                                              <AntDesign
                                                  name="delete"
                                                  size={24}
                                                  color="black"
                                                  style={styles.delete}
                                                  onPress={() => {
                                                      dispatch(
                                                          removeAlbum(index)
                                                      );
                                                  }}
                                              />
                                          )}
                                      </View>
                                  </TouchableHighlight>
                              )))
                    }
                </View>
                <Modal
                    animationType="fade"
                    visible={modal}
                    hardwareAccelerated={true}
                    transparent={true}
                    style={styles.modalContainer}
                    statusBarTranslucent={true}
                >
                    <View style={styles.modalContainer}>
                        <KeyboardAvoidingView behavior="height">
                            <View style={styles.modal}>
                                <View>
                                    <TextInput
                                        style={styles.albumName}
                                    ></TextInput>
                                </View>
                                <View style={styles.btnContainer}>
                                    <TouchableHighlight
                                        activeOpacity={0.6}
                                        style={styles.cancel}
                                        onPress={() => {
                                            setModal(false);
                                        }}
                                        underlayColor="#DDDDDD"
                                    >
                                        <Text>取消</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        activeOpacity={0.6}
                                        style={styles.enter}
                                        onPress={() => {
                                            setModal(false);
                                        }}
                                        underlayColor="#DDDDDD"
                                    >
                                        <Text>确定</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    search: {
        width: 300,
        borderRadius: 20,
        height: 35,
        backgroundColor: "#f5f5f5",
        marginTop: 10,
        paddingLeft: 20,
    },
    albumItem: {
        flexDirection: "row",
        // borderWidth: 1,
        // width: "100%",
        height: 60,
        alignItems: "center",
        paddingLeft: 30,
        paddingRight: 30,
    },
    image: {
        height: 45,
        width: 45,
        marginRight: 10,
        borderRadius: 3,
    },
    delete: {
        // position: "absolute",
        right: 0,
    },
    btnBox: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(178,178,178,0.3)",
    },
    modal: {
        height: 200,
        width: 300,
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 10,
    },
    albumName: {
        width: 250,
        height: 35,
        borderWidth: 1,
        borderColor: "#dbdde1",
        marginTop: 40,
        paddingLeft: 10,
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        position: "absolute",
        bottom: 0,
        height: 50,
        borderColor: "#dbdde1",
    },
    enter: {
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    cancel: {
        borderRightWidth: 1,
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#dbdde1",
    },
});

export default SearchScreen;
