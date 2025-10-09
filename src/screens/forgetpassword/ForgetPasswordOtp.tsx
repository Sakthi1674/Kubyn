import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
  ForgetPasswordOtp: { method: "sms" | "email"; contact: string };
  PasswordReset: undefined;
};
 
type ForgetPasswordOtpRouteProp = RouteProp<RootStackParamList, "ForgetPasswordOtp">;
 
const ForgetPasswordOtp: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<ForgetPasswordOtpRouteProp>();
 
  const { method, contact } = route.params; // ✅ get passed data
 
 
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState(false);
 
    const inputsRef = useRef<TextInput[]>([]); // ✅ added ref
 
    const handleChange = (text: string, index: number) => {
        if (/^\d$/.test(text) || text === "") {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            setError(false); // ✅ boolean
 
            // move to next input
            if (text && index < 3) {
                inputsRef.current[index + 1]?.focus();
            } else if (!text && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };
 
    const handleVerify = () => {
        const isEmpty = otp.some((digit) => digit.trim() === "");
        if (isEmpty) {
            setError(true);
        } else {
            setError(false);
            navigation.navigate("PasswordReset");
        }
    };
 
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <BackWard width={10} height={16} color="#223F61" />
                </TouchableOpacity>
                <Text style={styles.heading}>Verify</Text>
            </View>
 
            {/* Info */}
            <View style={styles.textContainer}>
                <Text style={styles.instructionText}>Enter the 4-digit code sent to</Text>
                <Text style={styles.emailText}>{contact}</Text>
            </View>
 
            {/* Label */}
            <Text style={styles.otpLabel}>Enter your OTP here</Text>
 
            {/* OTP Boxes */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(el) => { inputsRef.current[index] = el!; }}
                        style={[
                            styles.otpBox,
                            // ✅ highlight in red if error AND this box is empty
                            error && otp[index] === "" && {
                                borderColor: "#E74C3C",
                                backgroundColor: "#FBFDFF",
                            },
                        ]}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        textAlign="center"
                        placeholder="0"
                        placeholderTextColor={error ? "#E74C3C59" : "rgba(34, 63, 97, 0.35)"}
                    />
                ))}
            </View>
 
            {/* Error message aligned right */}
            <View style={styles.errorWrapper}>
            {error && <Text style={styles.errorText}>OTP is required</Text>}
            </View>

            {/* Resend Section */}
            <View style={styles.resendContainer}>
                <Text style={styles.infoText}>Didn’t receive the OTP? </Text>
                <TouchableOpacity onPress={() => console.log("Resend OTP")}>
                    <Text style={styles.resendText}>Resend</Text>
                </TouchableOpacity>
            </View>
 
            {/* Button */}
            <ButtonComp
                title="Verify"
                onPress={handleVerify}
                style={{ backgroundColor: "#223F61", marginTop: 20 }}
                textStyle={{ color: "#FAF8F5" }}
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
    },
    headerContainer: {
        width: "100%",
        marginBottom: verticalScale(20),
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: scale(0),
        top: verticalScale(2),
    },
    heading: {
        fontFamily: "Kollektif",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 20,
        color: "#121212",
        textAlign: "center",
    },
    textContainer: {
        marginTop: 10,
    },
    instructionText: {
        fontFamily: "Avenir LT Std 45 Book", // or "AvenirLTStd-Book" if using a separate font file
        fontWeight: "300",           // closest to 350
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
        color: "rgba(18, 18, 18, 0.6)",
    },
    emailText: {
        fontFamily: "Avenir LT Std 45 Book",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 25,
        color: "#121212",
        opacity: 0.6,
        marginTop: 4,
    },
    otpLabel: {
        fontFamily: "Avenir LT Std 65 Medium",
        fontWeight: "600",
        fontSize: 20,
        lineHeight: 31,
        color: "#121212",
        textAlign: "left",
        marginTop: 25,
    },
    otpContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 19,
        marginTop: 20,
    },
    otpBox: {
        width: 54,
        height: 54,
        borderRadius: 10,
        borderBottomWidth: 1,
        borderColor: "rgba(34,63,97,0.35)",
        backgroundColor: "#E3E9F1CC",
        textAlign: "center",
        fontFamily: "Avenir LT Std 65 Medium",
        fontWeight: "600",
        fontSize: 24,
        color: "#223F61",
    },
    errorText: {
        fontFamily: "Avenir LT Std 55 Roman",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 19,
        color: "#E74C3C",
        alignSelf: "flex-end",
        marginRight: 48,
        marginTop: 6,
    },
    errorWrapper: {
        height: verticalScale(20), // ⬅ keeps layout stable
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        marginBottom: verticalScale(10),
    },
    resendContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:25,
        marginLeft:40,
    },
    infoText: {
        fontFamily: "Avenir LT Std 45 Book",  
        fontWeight: "300",            
        fontSize: 16,
        lineHeight: 25,               
        letterSpacing: 0,
        color: "rgba(18, 18, 18, 0.59)",
    },
    resendText: {
        fontFamily: "Avenir LT Std 65 Medium", 
        fontWeight: "600",            
        fontSize: 16,
        lineHeight: 16,               
        letterSpacing: 0,
        color: "#223F61",
    },
});
 
export default ForgetPasswordOtp;
 
 