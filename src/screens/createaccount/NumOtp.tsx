import React, { useState, useRef } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import ButtonComp from "../../components/common/ButtonComp";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

// Define your route types
type RootStackParamList = {
    NumVerify: undefined;
    NumOtp: undefined;
    CreateAccount: undefined;
};

const NumOtp: React.FC = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const inputsRef = useRef<TextInput[]>([]);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleChange = (text: string, index: number) => {
        if (/^\d$/.test(text) || text === "") {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            setError("");

            if (text && index < 3) {
                inputsRef.current[index + 1]?.focus();
            } else if (!text && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length === 4 && /^\d{4}$/.test(enteredOtp)) {
            setError("");
            console.log("Entered OTP:", enteredOtp);
            navigation.navigate("CreateAccount");
        } else {
            setError("* OTP is required");
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <BackWard width={10} height={16} color="#223F61" />
                </TouchableOpacity>
                <Text style={styles.heading}>Verify your phone number</Text>
            </View>

            <Text style={styles.otpText}>Enter your OTP here</Text>

            {/* OTP Boxes */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => {
                    const isFocused = focusedIndex === index;
                    const borderColor = error
                        ? "#E74C3C"
                        : isFocused
                        ? "#223F61"
                        : "#E3E9F1CC";

                    return (
                        <TextInput
                            key={index}
                            ref={(el) => {
                                if (el) inputsRef.current[index] = el;
                            }}
                            style={[styles.otpBox, { borderColor }]}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            textAlign="center"
                            placeholder="0"
                            placeholderTextColor={
                                error ? "#E74C3C" : "rgba(34, 63, 97, 0.35)"
                            }
                        />
                    );
                })}
            </View>

            {/* Error message */}
            <View style={styles.errorWrapper}>
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>

            {/* Resend Section */}
            <View style={styles.resendContainer}>
                <Text style={styles.infoText}>Didn’t receive the OTP? </Text>
                <TouchableOpacity onPress={() => console.log("Resend OTP")}>
                    <Text style={styles.resendText}>Resend</Text>
                </TouchableOpacity>
            </View>

            {/* Verify Button */}
            <ButtonComp
                title="Verify"
                onPress={handleVerify}
                style={{
                    backgroundColor: "#223F61",
                    
                }}
                textStyle={{
                    color: "#FAF8F5",
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(90),
    alignItems: "center",
    },
    headerContainer: {
        width: "100%",
        marginBottom: verticalScale(20),
        alignItems: "center",
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: scale(0),
        top: verticalScale(5),
    },
    heading: {
        fontFamily: "Kollektif-Bold",
        fontWeight: "700",
        fontSize: moderateScale(20),
        lineHeight: moderateScale(24),
        color: "#121212",
        textAlign: "center",
    },
    otpText: {
        fontFamily: "Avenir LT Std 65 Medium",
        fontWeight: "600",
        fontSize: moderateScale(20),
        lineHeight: verticalScale(31),
        color: "#121212",
        marginTop: moderateScale(50),
        marginBottom: verticalScale(10),
        textAlignVertical: "center",
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: scale(19),
        marginBottom: verticalScale(5),
    },
    otpBox: {
        width: scale(54),
        height: verticalScale(54),
        borderRadius: moderateScale(10),
        borderWidth: 1.5,
        fontSize: moderateScale(24),
        fontWeight: "600",
        fontFamily: "Avenir LT Std",
        color: "#223F61",
        backgroundColor: "#E3E9F1CC",
    },
    errorWrapper: {
        height: verticalScale(20), // ⬅ keeps layout stable
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        marginBottom: verticalScale(10),
    },
    errorText: {
        fontFamily: "Avenir LT Std 55 Roman",
        fontWeight: "400",
        fontSize: moderateScale(12),
        lineHeight: verticalScale(19),
        color: "#E74C3C",
    },
    resendContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: verticalScale(15),
    },
    infoText: {
        fontFamily: "Avenir LT Std 45 Book",
        fontWeight: "300",
        fontSize: moderateScale(16),
        lineHeight: verticalScale(25),
        color: "#121212",
        marginTop: moderateScale(30),
    },
    resendText: {
        fontFamily: "Avenir LT Std 65 Medium",
        fontWeight: "600",
        fontSize: moderateScale(16),
        lineHeight: verticalScale(25),
        color: "#223F61",
        marginTop: moderateScale(30),
    },
});

export default NumOtp;
