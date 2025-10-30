import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Image,
} from "react-native";

const Anchoring = ({ navigation }: any) => {
    const [page, setPage] = useState(1);

    const handleNext = () => {
        if (page < 4) {
            setPage(page + 1);
        } else {
            // 👇 Navigate to KubynAI page when on last page
            navigation.navigate("KubynAI");
        }
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const pages = [
        {
            title: "The First Number",
            description:
                "Whenever we deal with money, our mind grabs onto the first number we see.\n\nIt becomes our reference point — our anchor.\n\nIf you once heard “10% of income is enough to save”, that number stays stuck, even when your life changes.",
        },
        {
            title: "Everyday Anchors",
            description:
                "Anchoring sneaks into daily choices:\n\nA stock that once touched ₹1,000 feels like a “steal” at ₹700. An EMI agreed at ₹15,000 keeps feeling “reasonable” forever.\n\nA ₹2,000 item “discounted” to ₹1,200 feels irresistible, even if unnecessary. The first number shapes the way we see value.",
        },
        {
            title: "The Cost of Anchors",
            description:
                "Anchors feel safe but quietly limit progress.\n\nWe may under-save, overspend, or overvalue investments simply because we never moved past that first number.\n\nWhat feels like security is often a trap that narrows our financial vision.",
        },
        {
            title: "Resetting Anchors",
            description:
                "Anchors are not facts, they’re just starting points.\n\nThe real progress is in asking: “Does this number fit my reality today?”\n\nBy recalibrating anchors — whether it’s savings, EMIs, or investments — we create space for decisions that reflect who we are now, not who we were when we first heard the number.",
        },
    ];

    return (
        <ImageBackground
            source={require("../../assets/images/DashBoard/AnchoringDoodle.png")}
            style={styles.background}
            resizeMode="cover"
        >
            {/* --- Absolute Small Image (Top Left) --- */}
            <Image
                source={require("../../assets/images/DashBoard/TopLeftIcon.png")}
                style={styles.absoluteImage}
                resizeMode="contain"
            />

            {/* --- Custom Progress Bar --- */}
            <View style={styles.progressContainer}>
                {/* --- Owl image --- */}
                <Image
                    source={require("../../assets/images/DashBoard/ProgressImg.png")}
                    style={[
                        styles.owl,
                        { left: (page / 4) * 179 - 45 },
                    ]}
                    resizeMode="contain"
                />

                {/* --- Progress Bar --- */}
                <View style={styles.progressBar}>
                    <View
                        style={[
                            styles.progressFill,
                            { width: `${(page / 4) * 100}%` },
                        ]}
                    />
                </View>

                {/* --- Progress Text --- */}
                <Text style={styles.progressText}>{page}/4</Text>
            </View>

            {/* --- Center Image --- */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/images/DashBoard/MessageBox.png")}
                    style={styles.centerImage}
                    resizeMode="contain"
                />
                <View style={styles.textInsideImage}>
                    <Text style={styles.title}>{pages[page - 1].title}</Text>
                    <Text style={styles.description}>{pages[page - 1].description}</Text>
                </View>
            </View>

            {/* --- Bottom Buttons --- */}
            <View style={styles.buttonContainer}>
                {page > 1 && (
                    <TouchableOpacity style={styles.button} onPress={handlePrev}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={[styles.button, styles.nextButton]}
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>
                        {page === 4 ? "Finish" : "Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Anchoring;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    // 🔹 Absolute image (new)
    absoluteImage: {
        position: "absolute",
        width: 80,
        height: 80,
        right: 30,
        top: 210,
        opacity: 1,
    },

    progressContainer: {
        marginTop: 50,
        width: 179,
        height: 60,
        alignSelf: "center",
        alignItems: "center",
        position: "relative",
    },

    progressText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 16,
        textAlign: "center",
        color: "rgba(171, 171, 171, 1)",
        marginTop: 26,
    },

    progressBar: {
        width: 179,
        height: 19,
        borderWidth: 1,
        borderColor: "rgba(34, 63, 97, 1)",
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "transparent",
    },

    progressFill: {
        height: "100%",
        backgroundColor: "rgba(34, 63, 97, 1)",
        borderRadius: 15,
    },

    owl: {
        position: "absolute",
        top: -45,
        width: 60,
        height: 60,
        alignSelf: "center",
    },

    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    centerImage: {
        width: 325,
        height: 346,
    },

    textInsideImage: {
        position: "absolute",
        width: 270,
        alignItems: "center",
        justifyContent: "center",
    },

    title: {
        fontFamily: "Avenir LT Std",
        fontWeight: "700",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        color: "rgba(18, 18, 18, 1)",
        marginBottom: 25,
        marginTop: 40,
    },

    description: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "center",
        color: "rgba(18, 18, 18, 1)",
    },

    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        marginBottom: 40,
    },

    button: {
        width: 140,
        height: 54,
        borderRadius: 10,
        backgroundColor: "rgba(34, 63, 97, 1)",
        justifyContent: "center",
        alignItems: "center",
    },

    nextButton: {
        marginLeft: "auto",
    },

    buttonText: {
        fontFamily: "Open Sans",
        fontWeight: "700",
        fontSize: 16,
        color: "rgba(251, 253, 255, 1)",
        textAlign: "center",
    },
});
