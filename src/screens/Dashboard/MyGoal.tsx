import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import SearchIcon from "../../assets/icons/SearchIcon";
import Brain from "../../assets/icons/Brain";
import PlusIcon from "../../assets/icons/PlusIcon";
import UpdatedIcon from "../../assets/icons/UpdateIcon";
import Protect from "../../assets/icons/Protect";
import { verticalScale } from "react-native-size-matters";

const MyGoal = () => {
    const [activeTab, setActiveTab] = React.useState<"Active" | "Achieved">("Active");
    const [showMore, setShowMore] = React.useState(false);

    return (
        <View style={styles.container}>
            {/* 🔹 Header */}
            <View style={styles.header}>
                <Text style={styles.title}>My Community</Text>
                <NotificationBell />
            </View>

            {/* 🔹 Buttons Row */}
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        activeTab === "Active" ? styles.activeButton : styles.inactiveButton,
                    ]}
                    onPress={() => setActiveTab("Active")}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            activeTab === "Active" ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        Active
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.button,
                        activeTab === "Achieved" ? styles.activeButton : styles.inactiveButton,
                    ]}
                    onPress={() => setActiveTab("Achieved")}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            activeTab === "Achieved" ? styles.activeText : styles.inactiveText,
                        ]}
                    >
                        Achieved
                    </Text>
                </TouchableOpacity>
            </View>

            {/* 🔹 Create a Goal Card */}
            <TouchableOpacity style={styles.createGoalCard}>
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

            {/* 🔹 Goal Cards */}
            <View>
                <View style={styles.debtCard}>
                    <Text style={styles.debtTitle}>Debt Management</Text>
                    <Text style={styles.debtSubtitle}>You’ve achieved 82% of your goal</Text>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressFill} />
                    </View>
                </View>

                <View style={styles.debtCard}>
                    <Text style={styles.debtTitle}>Savings</Text>
                    <Text style={styles.debtSubtitle}>You’ve achieved 64% of your goal</Text>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressFill} />
                    </View>
                </View>

                <View style={styles.debtCard}>
                    <Text style={styles.debtTitle}>Emergency Fund</Text>
                    <Text style={styles.debtSubtitle}>You’ve achieved 72% of your goal</Text>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressFill} />
                    </View>
                </View>

                {showMore && (
                    <>
                        <View style={styles.debtCard}>
                            <Text style={styles.debtTitle}>Retirement Fund</Text>
                            <Text style={styles.debtSubtitle}>You’ve achieved 58% of your goal</Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressFill} />
                            </View>
                        </View>

                        <View style={styles.debtCard}>
                            <Text style={styles.debtTitle}>Investment Goal</Text>
                            <Text style={styles.debtSubtitle}>You’ve achieved 76% of your goal</Text>
                            <View style={styles.progressContainer}>
                                <View style={styles.progressFill} />
                            </View>
                        </View>
                    </>
                )}

                <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                    <Text style={styles.seeMoreTextBottom}>
                        {showMore ? "See Less" : "See More"}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.boxGrid}>
                {[
                    { title: "Suggestion", img: require("../../assets/images/DashBoard/Suggestion.png") },
                    { title: "Loss aversion simulation", img: require("../../assets/images/DashBoard/LossAversionsimulation.png") },
                    { title: "Wealth projection", img: require("../../assets/images/DashBoard/WealthProjection.png") },
                    { title: "AI outcomes", img: require("../../assets/images/DashBoard/AIOutcomes.png") },
                ].map((item, index) => (
                    <View key={index} style={styles.boxItem}>
                        <Text style={styles.boxText}>{item.title}</Text>
                        <View style={styles.imageWrapper}>
                            <Image source={item.img} style={styles.boxImage} />
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.star}>
                    <SearchIcon width={30} height={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Brain />
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerButton}>
                    <TouchableOpacity style={styles.plus}>
                        <PlusIcon width={30} height={30} />
                    </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity>
                    <UpdatedIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Protect width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MyGoal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: "Kollektif",
        fontWeight: "700",
        fontSize: 16,
        color: "rgba(18, 18, 18, 1)",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 30,
        gap: 12,
    },
    button: {
        width: 83,
        height: 23,
        borderRadius: 20,
        borderWidth: 0.25,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 10,
        lineHeight: 10,
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
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E1E1E1",
        backgroundColor: "rgba(227, 233, 241, 0.6)",
        marginTop: 40,
        paddingVertical: 14,
        paddingHorizontal: 18,
        alignSelf: "center",
        justifyContent: "center",
    },

    createGoalContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "rgba(34, 63, 97, 1)",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#223F61",
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: "#FBFDFF",
    },
    createGoalText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 18,
        color: "rgba(34, 63, 97, 1)",
        marginLeft: 12,
    },
    debtCard: {
        width: "100%",
        backgroundColor: "#1F3B5C",
        borderRadius: 20,
        marginTop: 30,
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "center",
    },
    debtTitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: 12,
        lineHeight: 20,
        color: "#FBFDFF",
    },
    debtSubtitle: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontStyle: "italic",
        fontSize: 10,
        lineHeight: 17,
        color: "#FBFDFF",
        marginTop: 4,
    },
    progressContainer: {
        width: 300,
        height: 7,
        backgroundColor: "#CFDFF3",
        borderRadius: 100,
        marginTop: 10,
        overflow: "hidden",
    },
    progressFill: {
        width: "82%",
        height: "100%",
        backgroundColor: "#223F61",
        borderRadius: 100,
    },
    seeMoreTextBottom: {
        alignSelf: "flex-end",
        fontFamily: "Open Sans",
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: 16,
        lineHeight: 16,
        color: "rgba(34, 63, 97, 1)",
        opacity: 0.92,
        marginTop: 20
    },
    boxGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: 10,
    },
    boxItem: {
        width: 161,
        height: 88,
        borderRadius: 20,
        backgroundColor: "#E3E9F1",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    boxText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontStyle: "italic",
        fontSize: 10,
        lineHeight: 17,
        textAlign: "center",
        color: "#121212",
        paddingHorizontal: 8,
    },
    imageWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#E3E9F1CC",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 8,
        shadowColor: "#5E8BC026",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    boxImage: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
    bottomBar: {
        position: "absolute",         // ✅ Fixes it to bottom
        bottom: 20,                   // Distance from bottom edge
        left: 20,
        right: 20,
        flexDirection: "row",
        backgroundColor: "rgba(18, 18, 18, 1)",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 25,
        height: verticalScale(55),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 5,                 // ✅ Shadow for Android
    },
    centerButton: {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        width: 60,
        height: 60,
        borderRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 40,
        borderColor: 'rgba(244, 242, 239, 1)',
        borderWidth: 5,

    },
    plus: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    star: {
        backgroundColor: '#FBFDFF',
        borderRadius: 25,
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
