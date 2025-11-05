import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, useColorScheme } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import SearchSymbol from "../../assets/icons/SearchSymbol";
import ExclamationIcon from "../../assets/icons/ExclamationIcon";
import CrossIcon from "../../assets/icons/CrossIcon";
import LossAverse from "../../assets/icons/LossAverse";
import GrowthArrow from "../../assets/icons/GrowthArrow";
import { LineChart, PieChart } from "react-native-chart-kit";
import { BarChart } from "react-native-gifted-charts";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from "../../theme/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";
type RootStackParamList = {
    Notification: undefined;

};
const MyGoal = () => {
    const [activeTab, setActiveTab] = React.useState<"Active" | "Achieved">("Active");
    const [showMore, setShowMore] = React.useState(false);

    const [showSuggestion, setShowSuggestion] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);


    const boxes = [
        { title: "Suggestion", img: require("../../assets/images/DashBoard/Suggestion.png") },
        { title: "Loss aversion simulation", img: require("../../assets/images/DashBoard/LossAversionsimulation.png") },
        { title: "Wealth projection", img: require("../../assets/images/DashBoard/WealthProjection.png") },
        { title: "AI outcomes", img: require("../../assets/images/DashBoard/AIOutcomes.png") },
    ];


    const saved = 350000;
    const goal = 1000000;
    const progress = (saved / goal) * 100;

    const lineData = {
        labels: ['', '5', '', '10'],
        datasets: [
            {
                data: [20000, 500000, 1000000],
                color: () => 'rgba(94, 170, 34, 1)',
                strokeWidth: 2,
            },
            {
                data: [10000, 300000, 700000],
                color: () => 'rgba(240, 81, 81, 1)',
                strokeWidth: 2,
            },
        ],
    };

    const data = [
        {
            name: "High",
            population: 65,
            color: "rgba(34, 63, 97, 1)",
            legendFontColor: "rgba(34, 63, 97, 1)",
            legendFontSize: 12,
        },
        {
            name: "Low",
            population: 35,
            color: "rgba(227, 233, 241, 1)",
            legendFontColor: "rgba(34, 63, 97, 1)",
            legendFontSize: 12,
        },
    ];

    const [visible6, setVisible6] = useState(false);

    const saved1 = 30000;
    const goal1 = 100000;
    const progress1 = (saved1 / goal1) * 100;

    const lossgain = [
        {
            value: 15,
            label: 'Gain',
            frontColor: 'rgba(94, 170, 34, 1)',
            subLabel: '15k',
            topLabelComponent: () => (
                <View style={{ alignItems: 'center', marginTop: 4 }}>
                    <Text style={{ fontSize: 10, color: '#223F61', fontWeight: '600' }}>Gain</Text>
                    <Text style={{ fontSize: 8, color: '#223F61' }}>15%</Text>
                </View>
            ),
        },
        {
            value: 20,
            label: 'Loss',
            frontColor: 'rgba(231, 76, 60, 1)',
            subLabel: '10k',
            topLabelComponent: () => (
                <View style={{ alignItems: 'center', marginTop: 4 }}>
                    <Text style={{ fontSize: 10, color: '#223F61', fontWeight: '600' }}>Loss</Text>
                    <Text style={{ fontSize: 8, color: '#223F61' }}>20%</Text>
                </View>
            ),
        },
    ];
    const scheme = useColorScheme();
    const theme = colors[scheme === "dark" ? "dark" : "light"];
    const navigation = useNavigation<NavigationProp<any>>();
    return (

        <ScrollView
            contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
            showsVerticalScrollIndicator={false}
        >
            {/* 🔹 Header */}
            <View style={styles.header}>
                <Text style={[styles.title, { color: theme.text }]}>My Goals</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                              <NotificationBell fill={theme.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                {["Active", "Achieved"].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        style={[
                            styles.button,
                            activeTab === tab
                                ? { backgroundColor: theme.Button }
                                : { backgroundColor: theme.buttondark },
                        ]}
                        onPress={() => setActiveTab(tab as "Active" | "Achieved")}

                    >
                        <Text
                            style={{
                                color: activeTab === tab ? theme.background : theme.text,
                                fontWeight: "600",
                            }}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.createGoalCard}
                onPress={() => navigation.navigate("CreateGoal")}
            >
                <View style={styles.createGoalContainer}>
                    <View style={styles.iconWrapper}>
                        <Image
                            source={require("../../assets/images/DashBoard/ArrowGroup.png")}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.createGoalText}>Create a Goal</Text>
                </View>
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
                <View style={styles.goalCardsWrapper}>
                    <View style={styles.debtCard}>
                        <Text style={styles.debtTitle}>Debt Management</Text>
                        <Text style={styles.debtSubtitle}>You’ve achieved 82% of your goal</Text>
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressFill, { width: "82%" }]} />
                        </View>
                    </View>

                    <View style={styles.debtCard}>
                        <Text style={styles.debtTitle}>Savings</Text>
                        <Text style={styles.debtSubtitle}>You’ve achieved 64% of your goal</Text>
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressFill, { width: "64%" }]} />
                        </View>
                    </View>

                    <View style={styles.debtCard}>
                        <Text style={styles.debtTitle}>Emergency Fund</Text>
                        <Text style={styles.debtSubtitle}>You’ve achieved 72% of your goal</Text>
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressFill, { width: "72%" }]} />
                        </View>
                    </View>

                    {showMore && (
                        <>
                            <View style={styles.debtCard}>
                                <Text style={styles.debtTitle}>Retirement Fund</Text>
                                <Text style={styles.debtSubtitle}>You’ve achieved 58% of your goal</Text>
                                <View style={styles.progressContainer}>
                                    <View style={[styles.progressFill, { width: "58%" }]} />
                                </View>
                            </View>

                            <View style={styles.debtCard}>
                                <Text style={styles.debtTitle}>Investment Goal</Text>
                                <Text style={styles.debtSubtitle}>You’ve achieved 76% of your goal</Text>
                                <View style={styles.progressContainer}>
                                    <View style={[styles.progressFill, { width: "76%" }]} />
                                </View>
                            </View>
                        </>
                    )}
                </View>
                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                    <Text style={[styles.seeMoreTextBottom, { color: theme.Button }]}>
                        {showMore ? "See Less" : "See More"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxGrid}>
                {boxes.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.boxItem}
                        onPress={() => {
                            if (item.title === "Suggestion") {
                                setShowSuggestion(true);
                            }
                            if (item.title === "AI outcomes") {
                                setVisible4(true);
                            }
                            if (item.title === "Wealth projection") {
                                setVisible5(true);
                            }
                            if (item.title === "Loss aversion simulation") {
                                setVisible6(true);
                            }
                        }}
                    >
                        <Text style={styles.boxText}>{item.title}</Text>
                        <View style={styles.imageWrapper}>
                            <Image source={item.img} style={styles.boxImage} />
                        </View>
                    </TouchableOpacity>
                ))}

                {/* 🔹 Popup for "Suggestion" */}
                <Modal visible={showSuggestion} transparent animationType="fade">
                    <View style={styles.overlay}>
                        <View style={[styles.popup, { backgroundColor: theme.background }]}>
                            {/* Header */}
                            <View style={styles.popupHeader}>
                                <Text style={[styles.aiTitle, { color: theme.text }]}>AI Suggestion</Text>
                                <TouchableOpacity onPress={() => setShowSuggestion(false)}>
                                    <CrossIcon color={theme.text} />
                                </TouchableOpacity>
                            </View>

                            {/* Image */}
                            <Image
                                source={require("../../assets/images/DashBoard/TopLeftIcon.png")}
                                style={styles.aiImage}
                                resizeMode="contain"
                            />

                            {/* 1️⃣ Pattern Detected */}
                            <View
                                style={[
                                    styles.aiBox1,
                                    { backgroundColor: theme.bttext, shadowColor: theme.text },
                                ]}
                            >
                                <View style={styles.aiRow}>
                                    <SearchSymbol width={20} height={20} color={theme.text} />
                                    <View style={styles.aiTextBlock}>
                                        <Text style={[styles.patternTitle, { color: theme.Button }]}>
                                            Pattern Detected
                                        </Text>
                                        <Text style={[styles.patternDescription, { color: theme.text }]}>
                                            Your recent decisions are leaning heavily on the initial numbers you
                                            see, rather than the broader data trends.
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* 2️⃣ Impact on You */}
                            <View
                                style={[
                                    styles.aiBox2,
                                    { backgroundColor: theme.container, shadowColor: theme.text },
                                ]}
                            >
                                <View style={styles.aiRow}>
                                    <ExclamationIcon color={theme.icon} />
                                    <View style={styles.aiTextBlock}>
                                        <Text
                                            style={[styles.patternTitle, { color: theme.suggestion }]}
                                        >
                                            Impact on You
                                        </Text>
                                      <Text style={[styles.patternDescription, { color: theme.suggestion }]}>
                                            This creates a false sense of progress and may cause you to lock in
                                            on the wrong benchmark, leading to missed opportunities.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Popup Modal */}
                <Modal visible={visible4} transparent animationType="fade">
                    <View style={styles.overlay}>
                        <View style={[styles.popup, { backgroundColor: theme.background }]}>
                            {/* Header */}
                            <View style={styles.popupHeader4}>
                                <Text style={[styles.aiTitle, { color: theme.text }]}>
                                    AI Insight on Your Goal
                                </Text>
                                <TouchableOpacity onPress={() => setVisible4(false)}>
                                    <CrossIcon color={theme.icon} />
                                </TouchableOpacity>
                            </View>

                            {/* Chart */}
                            <View style={styles.mainContainer}>
                                <View
                                    style={[
                                        styles.borderCircle,
                                    ]}
                                >
                                    <View style={styles.chartContainer}>
                                        <PieChart
                                            data={data}
                                            width={190}
                                            height={120}
                                            chartConfig={{
                                                color: () => theme.text,
                                            }}
                                            accessor="population"
                                            backgroundColor="transparent"
                                            paddingLeft="0"
                                            hasLegend={false}
                                            center={[0, 0]}
                                        />

                                        {/* Center Text */}
                                        <View
                                            style={[
                                                styles.centerCircle,
                                                // { backgroundColor: theme.cardBackground },
                                            ]}
                                        >
                                            <Text style={[styles.percentText, { color: theme.textSecondary }]}>
                                                65%
                                            </Text>
                                            <Text style={[styles.subText, { color: theme.textSecondary }]}>
                                                on-track
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            {/* Background Icon */}
                            <Image
                                source={require("../../assets/images/DashBoard/TopLeftIcon.png")}
                                style={styles.aiImage2}
                                resizeMode="contain"
                            />

                            {/* 1️⃣ Pattern Detected */}
                            <View
                                style={[
                                    styles.aiBox1,
                                    { backgroundColor: theme.background, shadowColor: theme.text },
                                ]}
                            >
                                <View style={styles.aiRow}>
                                    <LossAverse />
                                    <View style={styles.aiTextBlock}>
                                        <Text style={[styles.patternTitle, { color: theme.text }]}>
                                            Loss Averse
                                        </Text>
                                        <Text style={[styles.patternDescription, { color: theme.text }]}>
                                            You are choosing safety over risk for your Trip Goal.
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* 2️⃣ How to Improve */}
                            <View
                                style={[
                                    styles.aiBox2,
                                    { backgroundColor: theme.buttondark, shadowColor: theme.text },
                                ]}
                            >
                                <View style={styles.aiRow}>
                                    <GrowthArrow />
                                    <View style={styles.aiTextBlock}>
                                        <Text style={[styles.patternTitle, { color: theme.text }]}>
                                            How to improve?
                                        </Text>
                                        <Text style={[styles.patternDescription, { color: theme.textSecondary }]}>
                                            Balance your safety with small calculated risks to grow faster.
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Popup Modal */}
                <Modal visible={visible5} transparent animationType="fade">
                    <View style={styles.modalOverlay}>
                        <View style={[styles.card, { backgroundColor: theme.background, shadowColor: theme.text }]}>

                            {/* Header */}
                            <View style={styles.headerRow}>
                                <Text style={[styles.title2, { color: theme.text }]}>Wealth Projection</Text>
                                <TouchableOpacity onPress={() => setVisible5(false)}>
                                    <CrossIcon color={theme.icon} />
                                </TouchableOpacity>
                            </View>

                            {/* Progress Bar */}
                            <View style={styles.progressRow}>
                                <Text style={[styles.label, { color: theme.text }]}>You save</Text>
                                <View style={styles.progressContainer2}>
                                    <View style={[styles.progressBar, { backgroundColor: theme.buttondark }]}>
                                        <View
                                            style={[
                                                styles.progressFill2,
                                                { backgroundColor: theme.Button, width: `${progress}%` },
                                            ]}
                                        />
                                        <Text style={[styles.amount, { color: theme.text }]}>
                                            ₹{saved.toLocaleString()}
                                        </Text>
                                        <Text style={[styles.goalAmount, { color: theme.text }]}>
                                            ₹{goal.toLocaleString()}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={[styles.label, { color: theme.text }]}>Your Goal</Text>
                            </View>

                            {/* Line Chart */}
                            <View style={styles.chartContainer2}>
                                <LineChart
                                    data={lineData}
                                    width={250}
                                    height={190}
                                    fromZero
                                    segments={2}
                                    chartConfig={{
                                        backgroundGradientFrom: theme.background,
                                        backgroundGradientTo: theme.background,
                                        decimalPlaces: 0,
                                        color: () => theme.text,
                                        propsForBackgroundLines: {
                                            strokeDasharray: '',
                                            stroke: theme.text,
                                        },
                                        propsForDots: {
                                            r: '0',
                                        },
                                    }}
                                    bezier
                                    withShadow={false}
                                    withInnerLines={false}
                                />
                                <Text style={[styles.yearsText, { color: theme.text }]}>Years</Text>
                                <Text style={[styles.savingsText, { color: theme.text }]}>Total savings</Text>
                            </View>

                            {/* Info Tags */}
                            <View style={styles.tagRow}>
                                <View style={[styles.tag, { backgroundColor: 'rgba(234, 245, 226, 1)', borderColor: 'rgba(94, 170, 34, 1)' }]}>
                                    <Text style={[styles.tagText, { color: 'rgba(94, 170, 34, 1)' }]}>
                                        Stay consistent with savings
                                    </Text>
                                </View>
                                <View style={[styles.tag, { backgroundColor: 'rgba(255, 229, 226, 1)', borderColor: 'rgba(231, 76, 60, 1)', borderStyle: 'dashed' }]}>
                                    <Text style={[styles.tagText, { color: 'rgba(231, 76, 60, 1)' }]}>
                                        Skip some months of saving
                                    </Text>
                                </View>
                            </View>

                            {/* Footer */}
                            <View
                                style={[
                                    styles.footer,
                                    { backgroundColor: theme.buttondark, shadowColor: theme.text },
                                ]}
                            >
                                <Text style={[styles.footerText, { color: theme.text }]}>
                                    Consistency matters, missing small amounts delays your goal.
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>
                {/* Popup */}
                <Modal visible={visible6} transparent animationType="fade">
                    <View style={styles.modalBackground}>
                        <View style={[styles.popup, { backgroundColor: theme.background, shadowColor: theme.text }]}>

                            {/* Header */}
                            <View style={styles.popupHeader}>
                                <Text style={[styles.aiTitle, { color: theme.text }]}>Wealth Projection</Text>
                                <TouchableOpacity onPress={() => setVisible6(false)}>
                                    <CrossIcon color={theme.icon} />
                                </TouchableOpacity>
                            </View>

                            {/* Progress Section */}
                            <View style={styles.progressRow}>
                                <Text style={[styles.label, { color: theme.text }]}>You save</Text>
                                <View style={styles.progressContainer2}>
                                    <View style={[styles.progressBar, { backgroundColor: theme.buttondark }]}>
                                        <View
                                            style={[
                                                styles.progressFill2,
                                                { width: `${progress1}%`, backgroundColor: theme.Button },
                                            ]}
                                        />
                                        <Text style={[styles.amount, { color: theme.text }]}>
                                            ₹{saved1.toLocaleString()}
                                        </Text>
                                        <Text style={[styles.goalAmount, { color: theme.text }]}>
                                            ₹{goal1.toLocaleString()}
                                        </Text>
                                    </View>
                                </View>
                                <Text style={[styles.label, { color: theme.text }]}>Your Goal</Text>
                            </View>

                            {/* Chart */}
                            <View style={styles.chartContainer3}>
                                <Text style={[styles.axisLabel, { color: theme.text }]}>Emotional Intensity</Text>
                                <BarChart data={lossgain} barWidth={30}
                                    noOfSections={3}
                                    yAxisThickness={1}
                                    xAxisThickness={1}
                                    hideRules hideYAxisText isAnimated width={200}
                                    height={150} spacing={60}
                                    barBorderTopLeftRadius={6}
                                    barBorderTopRightRadius={6} />
                            </View>

                            {/* Legend */}
                            <View style={styles.legendContainer}>
                                <View style={[styles.legendBox, { backgroundColor: "rgba(255, 204, 199, 1)" }]}>
                                    <Text style={[styles.legendTextLoss, { color: theme.notification }]}>Loss</Text>
                                    <Text style={[styles.legendSubTextLoss, { color: theme.notification }]}>₹40,000</Text>
                                </View>

                                <View style={[styles.legendBox, { backgroundColor: "rgba(227, 233, 241, 1)" }]}>
                                    <Text style={[styles.legendTextSave, { color: theme.bar }]}>Save</Text>
                                    <Text style={[styles.legendSubTextSave, { color: theme.bar }]}>₹50,000</Text>
                                </View>

                                <View style={[styles.legendBox, { backgroundColor: "rgba(221, 235, 210, 1)" }]}>
                                    <Text style={styles.legendTextGain}>Gain</Text>
                                    <Text style={styles.legendSubTextGain}>₹65,000</Text>
                                </View>
                            </View>

                            {/* Footer */}
                            <View style={[styles.footer2, { backgroundColor: theme.buttondark }]}>
                                <Text style={[styles.footerText2, { color: theme.text }]}>
                                    Losses feel twice as strong as gains
                                </Text>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </ScrollView>
    );
};
export default MyGoal;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        paddingTop: verticalScale(40),
        paddingHorizontal: scale(20),
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        fontFamily: "Kollektif",
        fontWeight: "700",
        fontSize: moderateScale(16),
        color: "rgba(18, 18, 18, 1)",
    },

    buttonRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: verticalScale(30),
        gap: scale(12),
    },

    button: {
        width: scale(83),
        height: verticalScale(23),
        borderRadius: moderateScale(20),
        borderWidth: moderateScale(0.25),
        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(10),
        lineHeight: moderateScale(10),
    },

    activeButton: {
        backgroundColor: "rgba(34, 63, 97, 1)",
        borderColor: "rgba(34, 63, 97, 1)",
    },

    inactiveButton: {
        backgroundColor: "rgba(251, 253, 255, 1)",
        borderColor: "rgba(34, 63, 97, 1)",
    },

    activeText: {
        color: "rgba(251, 253, 255, 1)",
    },

    inactiveText: {
        color: "rgba(34, 63, 97, 1)",
    },

    createGoalCard: {
        borderRadius: moderateScale(16),
        borderWidth: 1,
        borderColor: "#E1E1E1",
        backgroundColor: "rgba(227, 233, 241, 0.6)",
        marginTop: verticalScale(25),
        paddingVertical: verticalScale(14),
        paddingHorizontal: scale(18),
        alignSelf: "center",
        justifyContent: "center",
    },

    createGoalContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    iconWrapper: {
        width: scale(40),
        height: scale(40),
        borderRadius: moderateScale(50),
        borderWidth: 1,
        borderColor: "rgba(34, 63, 97, 1)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#223F61",
    },

    icon: {
        width: scale(20),
        height: scale(20),
        tintColor: "#FBFDFF",
    },

    createGoalText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
        fontSize: moderateScale(18),
        lineHeight: moderateScale(18),
        color: "rgba(34, 63, 97, 1)",
        marginLeft: scale(12),
    },

    goalCardsWrapper: {
        width: "100%",
        alignSelf: "center",
    },

    debtCard: {
        width: "100%",
        backgroundColor: "#1F3B5C",
        borderRadius: moderateScale(20),
        marginTop: verticalScale(10),
        alignSelf: "center",
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(20),
        justifyContent: "center",
    },

    debtTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: moderateScale(12),
        lineHeight: moderateScale(20),
        color: "#FBFDFF",
    },

    debtSubtitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontStyle: "italic",
        fontSize: moderateScale(10),
        lineHeight: moderateScale(17),
        color: "#FBFDFF",
        marginTop: verticalScale(4),
    },

    progressContainer: {
        width: "100%",
        height: verticalScale(7),
        backgroundColor: "#CFDFF3",
        borderRadius: moderateScale(100),
        marginTop: verticalScale(10),
        overflow: "hidden",
    },

    progressFill: {
        height: "100%",
        backgroundColor: "#223F61",
        borderRadius: moderateScale(100),
    },

    seeMoreTextBottom: {
        alignSelf: "flex-end",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: moderateScale(16),
        lineHeight: moderateScale(16),
        color: "rgba(34, 63, 97, 1)",
        opacity: 0.92,
        marginTop: verticalScale(15),
    },
    boxGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: verticalScale(15),
    },

    boxItem: {
        width: "48%",
        maxWidth: scale(190), // Prevents stretching on wider screens
        height: verticalScale(100),
        borderRadius: moderateScale(20),
        backgroundColor: "#E3E9F1",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: verticalScale(10),
    },

    boxText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontStyle: "italic",
        fontSize: moderateScale(10),
        lineHeight: moderateScale(17),
        textAlign: "center",
        color: "#121212",
        paddingHorizontal: scale(8),
    },

    imageWrapper: {
        width: scale(40),
        height: scale(40),
        borderRadius: moderateScale(50),
        backgroundColor: "#E3E9F1CC",
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(8),
        shadowColor: "#5E8BC026",
        shadowOffset: { width: scale(1), height: verticalScale(1) },
        shadowOpacity: 1,
        shadowRadius: moderateScale(4),
        elevation: 2,
    },

    boxImage: {
        width: scale(32),
        height: scale(32),
        resizeMode: "contain",
    },

    bottomBar: {
        position: "absolute",
        bottom: verticalScale(20),
        left: scale(20),
        right: scale(20),
        flexDirection: "row",
        backgroundColor: "rgba(18, 18, 18, 1)",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: moderateScale(25),
        height: verticalScale(55),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: verticalScale(4) },
        shadowOpacity: 0.3,
        shadowRadius: moderateScale(6),
        elevation: 5,
    },

    centerButton: {
        backgroundColor: "rgba(18, 18, 18, 1)",
        width: scale(60),
        height: scale(60),
        borderRadius: moderateScale(55),
        alignItems: "center",
        justifyContent: "center",
        bottom: verticalScale(40),
        borderColor: "rgba(244, 242, 239, 1)",
        borderWidth: moderateScale(5),
    },

    plus: {
        alignItems: "center",
        justifyContent: "center",
    },

    star: {
        backgroundColor: "#FBFDFF",
        borderRadius: moderateScale(25),
        width: scale(44),
        height: scale(44),
        alignItems: "center",
        justifyContent: "center",
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
        width: "85%",
        padding: scale(30),
        elevation: 5,
    },

    popupHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: verticalScale(10),
    },

    aiTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(16),
        lineHeight: moderateScale(22),
        color: "#000000",
    },

    aiImage: {
        width: scale(125),
        height: verticalScale(110),
        alignSelf: "center",
        marginTop: verticalScale(20),
        marginHorizontal: scale(10),
    },

    aiImage2: {
        width: scale(75),
        height: verticalScale(65),
        alignSelf: "flex-end",
        marginHorizontal: scale(10),
    },

    aiBox1: {
        backgroundColor: "#E3E9F1",
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(25),
        marginBottom: verticalScale(12),
        shadowColor: "#223F61",
        shadowOpacity: 0.08,
        shadowOffset: { width: scale(2), height: verticalScale(2) },
        shadowRadius: scale(4),
        elevation: 3,
        marginHorizontal: scale(10),
    },

    aiBox2: {
        backgroundColor: "#223F61",
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(15),
        paddingHorizontal: scale(25),
        marginBottom: verticalScale(12),
        marginHorizontal: scale(10),
        shadowColor: "#E5F1FF",
        shadowOpacity: 0.2,
        shadowOffset: { width: scale(3), height: verticalScale(4) },
        shadowRadius: scale(5.4),
        elevation: 3,
        marginTop: verticalScale(5),
    },

    aiRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: scale(20),
    },

    aiTextBlock: {
        flex: 1,
    },

    patternTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: moderateScale(10),
        lineHeight: verticalScale(17),
        color: "#223F61",
    },

    patternDescription: {
        fontFamily: "Avenir LT Std",
        fontWeight: "300",
        fontSize: moderateScale(8),
        lineHeight: verticalScale(13),
        color: "#000000",
        marginTop:verticalScale(3)
    },

    popupHeader4: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: verticalScale(15),
    },

    borderCircle: {
        width: scale(105),
        height: scale(106),
        borderRadius: scale(100),
        borderWidth: scale(5),
        borderColor: "rgba(34, 63, 97, 0.25)",
        alignItems: "center",
        justifyContent: "center",
    },

    chartContainer: {
        alignItems: "center",
        justifyContent: "center",
        left: scale(47),
    },

    centerCircle: {
        position: "absolute",
        width: scale(80),
        height: scale(80),
        borderRadius: scale(60),
        backgroundColor: "#F7FAFD",
        alignItems: "center",
        justifyContent: "center",
        left: scale(8),
    },

    percentText: {
        fontSize: moderateScale(24),
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        color: "rgba(34, 63, 97, 1)",
        letterSpacing: scale(1),
    },

    subText: {
        fontSize: moderateScale(12),
        color: "rgba(34, 63, 97, 1)",
        opacity: 0.63,
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
    },

    mainContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: verticalScale(20),
    },

    cardButton: {
        backgroundColor: "#243D63",
        padding: scale(12),
        borderRadius: moderateScale(10),
    },

    cardText: {
        color: "#fff",
        fontWeight: "700",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        backgroundColor: "#FBFDFF",
        borderRadius: moderateScale(20),
        width: "85%",
        padding: scale(30),
        elevation: 5,
    },

    headerRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title2: {
        fontSize: moderateScale(16),
        color: "#000",
        fontWeight: "700",
    },

    progressRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: verticalScale(30),
    },

    label: {
        fontSize: moderateScale(12),
        color: "#223F61",
        fontWeight: "600",
    },
    progressContainer2: {
        flex: 1,
        marginHorizontal: scale(8),
    },

    progressBar: {
        height: verticalScale(20),
        backgroundColor: 'rgba(227, 233, 241, 0.8)',
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        overflow: 'hidden',
    },

    progressFill2: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#223F61',
        borderRadius: moderateScale(10),
    },

    amount: {
        position: 'absolute',
        left: scale(10),
        color: '#FBFDFF',
        fontSize: moderateScale(12),
        fontWeight: '700',
    },

    goalAmount: {
        position: 'absolute',
        right: scale(10),
        color: '#223F61',
        fontSize: moderateScale(12),
        fontWeight: '700',
    },

    chartContainer2: {
        alignItems: 'center',
        marginTop: verticalScale(40),
    },

    chartContainer3: {
        alignItems: 'center',
        marginVertical: verticalScale(25),
        flexDirection: 'row',
        right: scale(60),
        marginTop: verticalScale(30),
    },

    tagRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(15),
    },

    tag: {
        borderRadius: moderateScale(15),
        paddingVertical: verticalScale(6),
        paddingHorizontal: scale(10),
        marginHorizontal: scale(2),
        borderWidth: scale(1),
    },

    tagText: {
        fontSize: moderateScale(12),
        fontWeight: '500',
        width: scale(100),
        textAlign: 'center',
    },

    footer: {
        borderRadius: moderateScale(15),
        backgroundColor: '#E3E9F1',
        shadowColor: '#223F61',
        shadowOffset: { width: scale(2), height: verticalScale(2) },
        shadowOpacity: 0.08,
        shadowRadius: scale(4),
        elevation: 3,
        marginTop: verticalScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: scale(50),
        paddingVertical: verticalScale(15),
        marginHorizontal: scale(5),
    },

    footerText: {
        fontFamily: 'Avenir LT Std',
        fontWeight: '400',
        fontSize: moderateScale(10),
        lineHeight: verticalScale(20),
        textAlign: 'center',
        color: '#000000',
    },

    yearsText: {
        fontFamily: 'Avenir LT Std',
        fontWeight: '600',
        fontSize: moderateScale(10),
        lineHeight: verticalScale(17),
        color: '#223F61',
        position: 'absolute',
        bottom: verticalScale(25),
        right: 0,
    },

    savingsText: {
        position: 'absolute',
        left: scale(-20),
        bottom: verticalScale(90),
        transform: [{ rotate: '-90deg' }],
        fontFamily: 'Avenir LT Std',
        fontWeight: '400',
        fontSize: moderateScale(10),
        lineHeight: verticalScale(17),
        color: '#223F61',
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    axisLabel: {
        fontSize: moderateScale(10),
        color: 'rgba(34, 63, 97, 1)',
        transform: [{ rotate: '270deg' }],
        left: scale(30),
    },

    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(10),
    },
    legendBox: {
        borderRadius: moderateScale(25),
        alignItems: "center",
        paddingVertical: verticalScale(8),
        paddingHorizontal: scale(30),
    },

    legendTextLoss: {
        color: "rgba(231, 76, 60, 1)",
        fontSize: moderateScale(10)
    },

    legendTextSave: {
        color: "rgba(34, 63, 97, 1)",
        fontSize: moderateScale(10)
    },

    legendTextGain: {
        color: "rgba(94, 170, 34, 1)",
        fontSize: moderateScale(10)
    },

    legendSubTextLoss: {
        color: "rgba(231, 76, 60, 1)",
        fontSize: moderateScale(8),
        fontWeight: "700"
    },

    legendSubTextSave: {
        color: "rgba(34, 63, 97, 1)",
        fontSize: moderateScale(8),
        fontWeight: "700"
    },

    legendSubTextGain: {
        color: "rgba(94, 170, 34, 1)",
        fontSize: moderateScale(8),
        fontWeight: "700"
    },

    footer2: {
        marginTop: verticalScale(15),
        alignSelf: "center",
        backgroundColor: "rgba(227, 233, 241, 1)",
        borderRadius: moderateScale(18),
        paddingVertical: verticalScale(8),
        paddingHorizontal: scale(20),
    },

    footerText2: {
        color: "rgba(34, 63, 97, 1)",
        fontSize: moderateScale(10),
        fontWeight: "400",
    },
});
