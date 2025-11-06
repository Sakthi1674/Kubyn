import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { scale, moderateScale } from "react-native-size-matters";

interface Styles {
    mainContainer: ViewStyle;
    outerRing: ViewStyle;
    centerContent: ViewStyle;
    percentText: TextStyle;
    subText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
    mainContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    outerRing: {
        width: scale(160),
        height: scale(160),
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },

    centerContent: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },

    percentText: {
        fontSize: moderateScale(32),
        fontWeight: "700",
        color: "#1E3A5F",
    },

    subText: {
        fontSize: moderateScale(14),
        fontWeight: "600",
        color: "#5E7188",
    },
});

const ProgressRing: React.FC = () => {
    const radius = 70;
    const strokeWidth = 12;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    const progress = 0.65;
    const strokeDashoffset = circumference - circumference * progress;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.outerRing}>
                <Svg height="160" width="160">
                    <Circle
                        stroke="rgba(0,0,0,0.1)"
                        fill="none"
                        cx="80"
                        cy="80"
                        r={normalizedRadius}
                        strokeWidth={strokeWidth}
                    />

                    <Circle
                        stroke="#1E3A5F"
                        fill="none"
                        cx="80"
                        cy="80"
                        r={normalizedRadius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        rotation="-90"
                        origin="80, 80"
                    />
                </Svg>

                <View style={styles.centerContent}>
                    <Text style={styles.percentText}>65%</Text>
                    <Text style={styles.subText}>on-track</Text>
                </View>
            </View>
        </View>
    );
};

export default ProgressRing;