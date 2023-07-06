import {
    StyleSheet,
    Text,
    View,
    Button,
    Modal,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

const Test = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, alignItems: "center", borderWidth: 10 }}
            behavior="position"
        >
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{
                        height: 30,
                        backgroundColor: "gray",
                        width: "80%",
                    }}
                ></TextInput>
                <View
                    style={{
                        height: 50,
                        backgroundColor: "gray",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    {/* 音乐栏内容 */}
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Test;
