import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const FirstNumTrap = () => {
    return (
        <View style={styles.container}>
            {/* --- Image Section --- */}
            <Image
                source={require("../../assets/images/DashBoard/NumberTrapKuboo.png")} // 👈 correct syntax
                style={styles.image}
                resizeMode="contain"
            />

            {/* --- Text Section --- */}
            <Text style={styles.title}>The First Number Trap</Text>
        </View>
    );
};

export default FirstNumTrap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(34, 63, 97, 1)",
    },
    image: {
        width: 160,
        height: 160,
        marginBottom: 20,
    },
    title: {
        fontFamily: "Open Sans",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0,
        color: "rgba(251, 253, 255, 1)",
    },
});