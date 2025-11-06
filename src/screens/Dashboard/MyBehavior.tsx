import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, SafeAreaView, Animated, useColorScheme } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import Question from "../../assets/icons/Question";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ReturnIcon from "../../assets/icons/ReturnIcon";
import TwoArrowsIcon from "../../assets/icons/TwoArrowsIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SomeIcon from "../../assets/icons/SomeIcon";
import { LineChart } from "react-native-gifted-charts";
import CrossIcon from "../../assets/icons/CrossIcon";
import colors from "../../theme/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";
type RootStackParamList = {
    Notification: undefined;

};
const MyBehavior = () => {
    const lineData = [
        { value: 90 },
        { value: 0 },
        { value: 60 },
        { value: -10 },
        { value: 70 },
        { value: 20 },
        { value: 15 },
        { value: 90 },
        { value: 10 },
    ];

    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);

    const [visible, setVisible] = useState(false);

    const monthlyIncome = 90000;
    const saved = 40000;
    const spend = monthlyIncome - saved;

    const savedYear = saved * 12;
    const spendYear = spend * 12;
    const navigation = useNavigation<NavigationProp<any>>();
    // Animated bar heights
    const savedHeight = useRef(new Animated.Value(5)).current;
    const spendHeight = useRef(new Animated.Value(5)).current;
    const scheme = useColorScheme();
    const theme = colors[scheme === "dark" ? "dark" : "light"];
    useEffect(() => {
        if (visible) {
            Animated.timing(savedHeight, {
                toValue: Math.min((saved / monthlyIncome) * 140, 135),
                duration: 1000,
                useNativeDriver: false,
            }).start();

            Animated.timing(spendHeight, {
                toValue: Math.min((spend / monthlyIncome) * 140, 140),
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }, [visible]);


    return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
                bounces={true}
            >
                <View style={styles.header}>
                    <Text style={[styles.title, { color: theme.text }]}>My Behavior</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                                 <NotificationBell fill={theme.text} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.shareBox, { backgroundColor: theme.background }]}>
                    <TouchableOpacity style={styles.question}>
                        <Question color={theme.Button} />
                    </TouchableOpacity>
                    <Text style={[styles.shareText, { color: theme.textSecondary }]}>
                        Share, tweak, and track your finances.
                    </Text>
                </View>

                <Text style={[styles.sectionTitle, { color: theme.text }]}>AI Spend Tracking</Text>



                <View
                    style={[
                        styles.chartContainer,
                        {
                            backgroundColor: theme.background,
                            borderColor: theme.text,
                            shadowColor: theme.text,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 4,
                            elevation: 5,
                        },
                    ]}
                >
                    <View style={styles.chart}>
                        <LineChart
                            data={lineData}
                            curved
                            height={60}
                            width={180}
                            thickness={3}
                            color={theme.Button} // ✅ dynamic chart color
                            hideDataPoints
                            hideRules
                            spacing={12}
                            hideYAxisText
                            yAxisThickness={0}
                            xAxisThickness={0}
                            startFillColor={theme.text}
                            endFillColor={theme.text}
                            startOpacity={0.4}
                            endOpacity={0.1}
                            backgroundColor="transparent"
                        />
                    </View>

                    <View style={styles.tip}>
                        <ReturnIcon color={theme.Button} /> {/* ✅ use theme color */}
                        <Text style={[styles.tipText, { color: theme.text }]}>
                            You don't need to stop spending, just start noticing.
                        </Text>
                    </View>

                    <View style={[styles.infoBox]}>
                        <TwoArrowsIcon color={theme.Button} />
                        <Text style={[styles.infoText, { color: theme.bar }]}>
                            You spent 20% less than last month. AI suggests {"\n"}
                            investing the extra ₹2,400 in your Growth Fund.
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.addExpenseButton, { backgroundColor: theme.Button }]}
                    >
                        <PlusIcon width={13} height={15} color={theme.background} />
                        <Text style={[styles.addExpenseText, { color: theme.background }]}>
                            Add Expense
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionTitle1, { color: theme.text }]}>Income & Lifestyle</Text>

                <View style={styles.lifestyleRow}>
                    <View>
                        {/* 🔹 Archetype Card */}
                        <TouchableOpacity
                            style={[
                                styles.lifestyleCard,
                                {
                                    backgroundColor: theme.background,
                                    borderColor: theme.text,
                                    shadowColor: theme.text || theme.text, // fallback to text color if no shadow color in theme
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.15,
                                    shadowRadius: 6,
                                    elevation: 6, // Android shadow
                                },
                            ]}
                            onPress={() => {
                                console.log("Pressed!");
                                setVisible1(true);
                            }}
                        >
                            <Text style={[styles.lifestyleLabel, { color: theme.text }]}>
                                Archetype
                            </Text>

                            <Image
                                source={require("../../assets/images/DashBoard/RagstoRiches.png")}
                                style={styles.manimg}
                            />

                            <Text style={styles.lifestyleText}>
                                Rags - to - Riches
                            </Text>
                        </TouchableOpacity>

                        {/* 🔹 Popup */}
                        <Modal visible={visible1} transparent animationType="fade">
                            <View style={styles.overlay}>
                                <View
                                    style={[
                                        styles.popup,
                                        {
                                            backgroundColor: theme.background,
                                            borderColor: theme.text,
                                            shadowColor: theme.text,
                                            shadowOpacity: 0.25,
                                            shadowOffset: { width: 0, height: 3 },
                                            shadowRadius: 6,
                                            elevation: 5,
                                        },
                                    ]}
                                >
                                    {/* Header */}
                                    <View style={styles.popupHeader}>
                                        <Text style={[styles.popupTitle, { color: theme.text }]}>Rags to Riches</Text>
                                        <TouchableOpacity onPress={() => setVisible1(false)}>
                                            <CrossIcon color={theme.Button} />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Image */}
                                    <Image
                                        source={require("../../assets/images/DashBoard/RagstoRiches.png")}
                                        style={styles.popupImage}
                                        resizeMode="contain"
                                    />

                                    {/* Points */}
                                    <View
                                        style={[
                                            styles.pointsContainer,
                                            { backgroundColor: theme.buttondark || theme.chart },
                                        ]}
                                    >
                                        <Text
                                            style={[styles.pointText, { color: theme.Button }]}
                                            numberOfLines={3}
                                            ellipsizeMode="tail"
                                        >
                                            • From humble beginnings, dreams big.{"\n"}
                                            • Careful with money but wants upward mobility.{"\n"}
                                            • Loves seeing small savings grow into wealth.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                    <View>
                        <TouchableOpacity style={styles.matchCard} onPress={() => setVisible2(true)}>
                            <View>
                                <Text style={styles.matchLabel}>Your Lifestyle match is</Text>
                                <Text style={styles.matchTitle}>The Adventurer</Text>
                            </View>
                            <Image
                                source={require("../../assets/images/DashBoard/Adventurer.png")}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>

                        <Modal visible={visible2} transparent animationType="fade">
                            <View style={styles.overlay}>
                                <View
                                    style={[
                                        styles.popup,
                                        { backgroundColor: theme.background, borderColor: theme.text },
                                    ]}
                                >
                                    {/* Header */}
                                    <View style={styles.popupHeader2}>
                                        <TouchableOpacity onPress={() => setVisible2(false)}>
                                            <CrossIcon color={theme.text} /> {/* ✅ uses theme color */}
                                        </TouchableOpacity>
                                    </View>

                                    {/* Image */}
                                    <Image
                                        source={require("../../assets/images/DashBoard/Adventurer.png")}
                                        style={styles.popupImage2}
                                        resizeMode="contain"
                                    />

                                    {/* Title */}
                                    <Text style={[styles.adventurerTitle, { color: theme.text }]}>
                                        The Adventurer
                                    </Text>

                                    {/* Description */}
                                    <View
                                        style={[
                                            styles.pointsContainer2,
                                            { backgroundColor: theme.buttondark || theme.chart },
                                        ]}
                                    >
                                        <Text style={[styles.pointText2, { color: theme.Button }]}>
                                            Lives light, values simplicity, avoids clutter.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
                <TouchableOpacity style={styles.surplusCard} onPress={() => setVisible(true)}>
                    <View style={styles.surplusIconBox}>
                        <Image
                            source={require("../../assets/images/DashBoard/Simplification.png")}
                            style={styles.Simplification}
                        />
                    </View>
                    <View style={styles.surplusTextBox}>
                        <Text style={styles.surplusTitle}>Surplus simulation</Text>
                        <Text style={styles.surplusText}>Add the surplus to your travel fund.</Text>
                    </View>
                </TouchableOpacity>

                {/* ✅ Popup Modal */}
                <Modal visible={visible} transparent animationType="fade">
                    <SafeAreaView style={[styles.overlay3]}>
                        <View
                            style={[
                                styles.popup3,
                                {
                                    backgroundColor: theme.background,
                                    borderColor: theme.text,
                                    shadowColor: theme.introbg,
                                },
                            ]}
                        >
                            {/* Header */}
                            <View style={styles.popupHeader3}>
                                <Text style={[styles.aiTitle, { color: theme.text }]}>
                                    Your Monthly Income: ₹{monthlyIncome.toLocaleString()}
                                </Text>
                                <TouchableOpacity onPress={() => setVisible(false)}>
                                    <CrossIcon color={theme.text} /> {/* ✅ uses theme color */}
                                </TouchableOpacity>
                            </View>

                            {/* Chart */}
                            <View style={styles.chartRow}>
                                {/* Saved Column */}
                                <View style={styles.columnBox}>
                                    <Text style={[styles.smallLabel, { color: theme.text }]}>Saved</Text>
                                    <Text style={[styles.smallLabel1, { color: theme.text }]}>
                                        ₹{saved.toLocaleString()}/month
                                    </Text>
                                    <View style={styles.smallbar} />
                                    <View
                                        style={[
                                            styles.barWrapper,
                                        ]}
                                    >
                                        <Animated.View
                                            style={[
                                                styles.savedBar,
                                                { height: savedHeight, backgroundColor: theme.text },
                                            ]}
                                        />
                                    </View>
                                    <Text style={[styles.yearText, { color: theme.text }]}>
                                        ₹{savedYear.toLocaleString()}/Year
                                    </Text>
                                </View>

                                {/* Spend Column */}
                                <View style={styles.columnBox}>
                                    <Text style={[styles.smallLabel, { color: theme.text }]}>Spend Now</Text>
                                    <Text style={[styles.smallLabel1, { color: theme.text }]}>
                                        ₹{spend.toLocaleString()}/month
                                    </Text>
                                    <View style={styles.smallbar1} />
                                    <View
                                        style={[
                                            styles.barWrapper1,

                                        ]}
                                    >
                                        <Animated.View
                                            style={[
                                                styles.spendBar,
                                                { height: spendHeight },
                                            ]}
                                        />
                                    </View>
                                    <Text style={[styles.yearText1, { color: theme.text }]}>
                                        ₹{spendYear.toLocaleString()}/Year
                                    </Text>
                                </View>
                            </View>

                            {/* Footer */}
                            <View style={[styles.footerBox, { backgroundColor: theme.buttondark }]}>
                                <Text style={[styles.footerText, { color: theme.text }]}>
                                    Saving small surpluses compounds{"\n"}into big cushions
                                </Text>
                            </View>
                        </View>
                    </SafeAreaView>
                </Modal>

            </ScrollView>
    );
};

export default MyBehavior;

const styles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(40),
        paddingHorizontal: scale(20),
        paddingBottom: verticalScale(10),
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "Kollektif-Bold",
        fontWeight: "700",
        fontSize: moderateScale(16),
        color: "rgba(18, 18, 18, 1)",
    },
    shareBox: {
        backgroundColor: "rgba(251, 253, 255, 1)",
        borderColor: "rgba(217, 217, 217, 0.5)",
        borderWidth: scale(3),
        marginTop: verticalScale(20),
        height: verticalScale(66),
        borderRadius: moderateScale(20),
        padding: scale(14),
        alignItems: "center",
        flexDirection: "row",
    },
    question: {
        backgroundColor: "rgba(214, 214, 214, 1)",
        borderRadius: moderateScale(25),
        width: scale(44),
        height: scale(44),
        alignItems: "center",
        justifyContent: "center",
    },
    shareText: {
        color: "rgba(34, 63, 97, 1)",
        fontFamily: "Avenir LT Std",
        fontSize: moderateScale(12),
        fontWeight: "600",
        left: scale(30),
    },
    sectionTitle: {
        color: "rgba(18, 18, 18, 1)",
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontSize: moderateScale(12),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10),
    },
    tip: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: scale(20),
        marginBottom: verticalScale(15),
    },
    tipText: {
        color: "rgba(18, 18, 18, 1)",
        fontSize: moderateScale(10),
        fontWeight: "400",
        fontFamily: "Avenir LT Std",
    },
    infoBox: {
        flexDirection: "row",
        backgroundColor: "#E3E9F1",
        borderRadius: moderateScale(25),
        alignItems: "center",
        justifyContent: "center",
        gap: scale(20),
        paddingHorizontal: scale(24),
        paddingVertical: verticalScale(20),
    },
    infoText: {
        color: "rgba(34, 63, 97, 1)",
        fontSize: moderateScale(10),
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        lineHeight: verticalScale(16),
    },
    chartContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: moderateScale(15),

        // iOS shadow
        shadowColor: "#000",         // You can use "#878889" if you want soft gray shadow
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: verticalScale(2) },
        shadowRadius: moderateScale(4),

        // Android shadow
        elevation: 5,

        position: "relative",
        padding: scale(20),
        alignItems: "center",
    },

    addExpenseButton: {
        position: "absolute",
        top: verticalScale(15),
        right: scale(20),
        backgroundColor: "#243D63",
        borderRadius: moderateScale(30),
        flexDirection: "row",
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(8),
        gap: scale(10),
    },
    addExpenseText: {
        color: "rgba(251, 253, 255, 1)",
        fontSize: moderateScale(10),
        fontWeight: "700",
        fontFamily: "Avenir LT Std",
    },
    sectionTitle1: {
        color: "#121212",
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(12),
        marginTop: verticalScale(15),
    },
    lifestyleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(10),
        gap:scale(5)
    },
    lifestyleCard: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: moderateScale(12),
        width: scale(104),
        height: verticalScale(75),
    },
    lifestyleLabel: {
        color: "rgba(34, 63, 97, 1)",
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontSize: moderateScale(11),
        opacity: 0.7,
        transform: [{ rotate: "270deg" }],
        right: scale(40),
    },
    lifestyleText: {
        color: "rgba(18, 18, 18, 1)",
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(10),
        backgroundColor: "rgba(227, 233, 241, 1)",
        borderRadius: moderateScale(12),
        padding: scale(2),
        textAlign: "center",
    },
    manimg: {
        width: scale(50),
        height: verticalScale(50),
        left: scale(40),
        bottom: verticalScale(10),
    },
    matchCard: {
        backgroundColor: "rgba(227, 233, 241, 1)",
        borderRadius: moderateScale(12),
        padding: scale(10),
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10),
    },
    avatar: {
        width: scale(60),
        height: verticalScale(60),
        borderRadius: moderateScale(30),
    },
    matchLabel: {
        color: "rgba(18, 18, 18, 1)",
        fontSize: moderateScale(10),
        opacity: 0.7,
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
    },
    matchTitle: {
        fontSize: moderateScale(16),
        fontWeight: "700",
        color: "rgba(18, 18, 18, 1)",
        fontFamily: "Avenir LT Std",
        marginTop: verticalScale(5),
    },
    surplusCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(227, 233, 241, 1)",
        borderRadius: moderateScale(12),
        paddingVertical: verticalScale(18),
        marginTop: verticalScale(15),
        paddingHorizontal: scale(12),
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: verticalScale(2) },
        shadowRadius: moderateScale(4),
        elevation: 1,
        gap: scale(20),
    },
    surplusIconBox: {
        backgroundColor: "#F1F4F8",
        borderRadius: moderateScale(40),
        width: scale(36),
        height: scale(36),
        justifyContent: "center",
        alignItems: "center",
    },
    surplusTextBox: {
        marginLeft: scale(10),
    },
    surplusTitle: {
        color: "rgba(18, 18, 18, 1)",
        fontWeight: "400",
        fontSize: moderateScale(10),
        fontFamily: "Avenir LT Std",
        opacity: 0.54,
    },
    surplusText: {
        color: "rgba(18, 18, 18, 1)",
        fontSize: moderateScale(10),
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        marginTop: verticalScale(5),
    },
    Simplification: {
        width: scale(30),
        height: scale(30),
    },
    chart: {
        marginTop: verticalScale(20),
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: scale(20),
    },
    popup: {
        backgroundColor: "#FBFDFF",
        borderRadius: moderateScale(20),
        padding: scale(20),
        width: "95%",
        shadowColor: "#223F61",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: verticalScale(4) },
        shadowRadius: moderateScale(10),
        elevation: 8,
    },
    popupHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: verticalScale(10),
    },
    popupHeader2: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: verticalScale(10),
    },
    popupTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(20),
        lineHeight: moderateScale(34),
        color: "#000000",
    },
    adventurerTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(20),
        lineHeight: moderateScale(34),
        color: "#000000",
        textAlign: "center",
        marginBottom: verticalScale(15),
    },
    popupImage: {
        width: scale(132),
        height: verticalScale(198),
        alignSelf: "center",
        marginBottom: verticalScale(15),
    },
    popupImage2: {
        width: scale(180),
        height: verticalScale(180),
        alignSelf: "center",
        marginBottom: verticalScale(15),
    },
    pointsContainer: {
        backgroundColor: "#E3E9F1",
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(20),
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: scale(2), height: verticalScale(2) },
        shadowRadius: moderateScale(4),
        elevation: 3,
    },
    pointText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: moderateScale(10),
        lineHeight: moderateScale(18),
        color: "#223F61",
    },
    pointsContainer2: {
        backgroundColor: "#E3E9F1",
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(12),
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: scale(2), height: verticalScale(2) },
        shadowRadius: moderateScale(4),
        elevation: 3,
        marginBottom: verticalScale(20),
    },
    pointText2: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: moderateScale(10),
        lineHeight: moderateScale(17),
        color: "#223F61",
        textAlign: "center"
    },
    overlay3: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        alignItems: "center",
    },
    popup3: {
        width: "85%",
        backgroundColor: "rgba(251, 253, 255, 1)",
        borderRadius: moderateScale(30),
        padding: moderateScale(30),
        alignItems: "center",
    },
    popupHeader3: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: verticalScale(10),
    },
    aiTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(16),
        color: "#000",
    },
    chartRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: verticalScale(20),
        gap: scale(20),
    },
    columnBox: {
        alignItems: "center",
    },
    smallLabel: {
        fontSize: moderateScale(10),
        color: "rgba(34, 35, 45, 1)",
        marginBottom: verticalScale(4),
        fontWeight: "300",
    },
    smallLabel1: {
        fontSize: moderateScale(10),
        color: "rgba(34, 35, 45, 1)",
        fontWeight: "700",
        marginBottom: verticalScale(10),
    },
    barWrapper: {
        width: scale(114),
        height: verticalScale(100),
        backgroundColor: "rgba(94, 170, 34, 0.3)",
        borderRadius: moderateScale(15),
        justifyContent: "flex-end",
        marginBottom: verticalScale(8),
    },
    barWrapper1: {
        width: scale(114),
        height: verticalScale(100),
        backgroundColor: "rgba(220,220,220,0.8)",
        borderRadius: moderateScale(15),
        justifyContent: "flex-end",
        marginBottom: verticalScale(8),
    },
    savedBar: {
        width: "100%",
        backgroundColor: "rgba(94, 170, 34, 1)",
        opacity: 0.24,
        borderRadius: moderateScale(15),
    },
    spendBar: {
        width: "100%",
        backgroundColor: "rgba(179, 181, 178, 1)",
        borderRadius: moderateScale(15),
    },
    smallbar: {
        width: scale(36),
        height: verticalScale(12),
        backgroundColor: "rgba(94, 170, 34, 0.3)",
        borderRadius: moderateScale(3),
    },
    smallbar1: {
        width: scale(36),
        height: verticalScale(12),
        backgroundColor: "rgba(220,220,220,0.8)",
        borderRadius: moderateScale(3),
    },
    yearText: {
        fontSize: moderateScale(10),
        fontWeight: "700",
        color: "rgba(34, 35, 45, 1)",
        marginTop: verticalScale(4),
    },
    yearText1: {
        fontSize: moderateScale(10),
        fontWeight: "700",
        color: "rgba(34, 35, 45, 1)",
        marginTop: verticalScale(4),
    },
    footerBox: {
        backgroundColor: "rgba(34, 63, 97, 0.08)",
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(16),
        borderRadius: moderateScale(12),
        marginTop: verticalScale(10),
        width: scale(212),
        height: verticalScale(53),
        justifyContent: "center",
    },
    footerText: {
        fontSize: moderateScale(10),
        color: "rgba(0, 0, 0, 1)",
        textAlign: "center",
        lineHeight: verticalScale(13),
        fontWeight: "400",
    },
});