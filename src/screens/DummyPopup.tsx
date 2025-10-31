import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal,
    Image,
} from "react-native";
import CrossIcon from "../assets/icons/CrossIcon";
import SearchSymbol from "../assets/icons/SearchSymbol";
import ExclamationIcon from "../assets/icons/ExclamationIcon";
import LossAverse from "../assets/icons/LossAverse";
import GrowthArrow from "../assets/icons/GrowthArrow";

const DummyPopup = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);

    return (
        <View style={styles.container}>
            {/* 🔹 Button 1 */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible1(true)}>
                    <Text style={styles.title}>My Community</Text>
                </TouchableOpacity>
            </View>

            {/* 🔹 Button 2 */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible2(true)}>
                    <Text style={styles.title}>My Community 2</Text>
                </TouchableOpacity>
            </View>

            {/* 🔹 Button 3 */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible3(true)}>
                    <Text style={styles.title}>My Community 3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible4(true)}>
                    <Text style={styles.title}>My Community 4</Text>
                </TouchableOpacity>
            </View>

            {/* 🔹 Popup 1 - Rags to Riches */}
            <Modal visible={visible1} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        <View style={styles.popupHeader}>
                            <Text style={styles.popupTitle}>Rags to Riches</Text>
                            <TouchableOpacity onPress={() => setVisible1(false)}>
                                <CrossIcon />
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require("../assets/images/DashBoard/RagstoRiches.png")}
                            style={styles.popupImage}
                            resizeMode="contain"
                        />

                        <View style={styles.pointsContainer}>
                            <Text style={styles.pointText}>
                                • From humble beginnings, dreams big.{"\n"}
                                • Careful with money but wants upward mobility.{"\n"}
                                • Loves seeing small savings grow into wealth.
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* 🔹 Popup 2 - The Adventurer */}
            <Modal visible={visible2} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        <View style={styles.popupHeader2}>
                            <TouchableOpacity onPress={() => setVisible2(false)}>
                                <CrossIcon />
                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require("../assets/images/DashBoard/Adventurer.png")}
                            style={styles.popupImage2}
                            resizeMode="contain"
                        />

                        <Text style={styles.adventurerTitle}>The Adventurer</Text>

                        <View style={styles.pointsContainer2}>
                            <Text style={styles.pointText2}>
                                Lives light, values simplicity, avoids clutter.
                            </Text>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* 🔹 Popup 3 - AI Suggestion */}
            <Modal visible={visible3} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        {/* Header */}
                        <View style={styles.popupHeader3}>
                            <Text style={styles.aiTitle}>AI Suggestion</Text>
                            <TouchableOpacity onPress={() => setVisible3(false)}>
                                <CrossIcon />
                            </TouchableOpacity>
                        </View>

                        {/* Image */}
                        <Image
                            source={require("../assets/images/DashBoard/TopLeftIcon.png")}
                            style={styles.aiImage}
                            resizeMode="contain"
                        />

                        {/* 🔹 1st Container - Pattern Detected */}
                        <View style={styles.aiBox1}>
                            <View style={styles.aiRow}>
                                <SearchSymbol width={20} height={20} />
                                <View style={styles.aiTextBlock}>
                                    <Text style={styles.patternTitle}>Pattern Detected</Text>
                                    <Text style={styles.patternDescription}>
                                        Your recent decisions are leaning heavily on the initial numbers you see, rather than the broader data trends.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* 🔹 2nd Container - Impact on You */}
                        <View style={styles.aiBox2}>
                            <View style={styles.aiRow}>
                                <ExclamationIcon />
                                <View style={styles.aiTextBlock}>
                                    <Text style={[styles.patternTitle, { color: "#E5F1FF" }]}>Impact on You</Text>
                                    <Text style={[styles.patternDescription, { color: "#FFFFFF" }]}>
                                        This creates a false sense of progress and may cause you to lock in on the wrong benchmark, leading to missed opportunities.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* 🔹 Popup 3 - AI Suggestion */}
            <Modal visible={visible4} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        {/* Header */}
                        <View style={styles.popupHeader3}>
                            <Text style={styles.aiTitle}>AI Insight on Your Goal</Text>
                            <TouchableOpacity onPress={() => setVisible3(false)}>
                                <CrossIcon />
                            </TouchableOpacity>
                        </View>

                        {/* Image */}
                        <Image
                            source={require("../assets/images/DashBoard/TopLeftIcon.png")}
                            style={styles.aiImage}
                            resizeMode="contain"
                        />

                        {/* 🔹 1st Container - Pattern Detected */}
                        <View style={styles.aiBox1}>
                            <View style={styles.aiRow}>
                                <LossAverse />
                                <View style={styles.aiTextBlock}>
                                    <Text style={styles.patternTitle}>Loss Averse</Text>
                                    <Text style={styles.patternDescription}>
                                        You are choosing safety over risk for your Trip Goal.
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* 🔹 2nd Container - Impact on You */}
                        <View style={styles.aiBox2}>
                            <View style={styles.aiRow}>
                                <GrowthArrow />
                                <View style={styles.aiTextBlock}>
                                    <Text style={[styles.patternTitle, { color: "#E5F1FF" }]}>How to improve?</Text>
                                    <Text style={[styles.patternDescription, { color: "#FFFFFF" }]}>
                                        Balance your safety with small calculated risks to grow faster.                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default DummyPopup;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 60,
        paddingHorizontal: 30,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    title: {
        fontFamily: "Kollektif",
        fontWeight: "700",
        fontSize: 16,
        color: "#121212",
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    popup: {
        backgroundColor: "#FBFDFF",
        borderRadius: 20,
        padding: 20,
        width: "85%",
        shadowColor: "#223F61",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 8,
    },
    popupHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    popupHeader2: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
    },
    popupHeader3: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    popupTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 34,
        color: "#000000",
    },
    popupImage: {
        width: 132,
        height: 198,
        alignSelf: "center",
        marginBottom: 15,
    },
    popupImage2: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 20,
    },
    adventurerTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 34,
        color: "#000000",
        textAlign: "center",
        marginBottom: 15,
    },
    aiTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 16,
        lineHeight: 22,
        color: "#000000",
    },
    aiImage: {
        width: 75,
        height: 65,
        alignSelf: "flex-end",
        marginTop: 20,
        marginHorizontal:10,
    },
    aiBox: {
        backgroundColor: "#E3E9F1",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 12,
    },
    aiRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
    },
    aiTextBlock: {
        flex: 1,
    },
    patternTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 10,
        lineHeight: 17,
        color: "#223F61",
    },
    patternDescription: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: 8,
        lineHeight: 13,
        color: "#000000",
    },
    pointsContainer: {
        backgroundColor: "#E3E9F1",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 26,
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    pointText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 18,
        color: "#223F61",
    },
    pointsContainer2: {
        backgroundColor: "#E3E9F1",
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
    },
    pointText2: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: 10,
        lineHeight: 17,
        color: "#223F61",
        textAlign: "center",
    },
    aiBox1: {
        backgroundColor: "#E3E9F1",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginBottom: 12,
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 10,
    },

    aiBox2: {
        backgroundColor: "#223F61",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginBottom: 12,
        marginHorizontal: 10,
        shadowColor: "#E5F1FF",
        shadowOpacity: 0.2,
        shadowOffset: { width: 3, height: 4 },
        shadowRadius: 5.4,
        elevation: 3,
        marginTop: 5,
    },
});
