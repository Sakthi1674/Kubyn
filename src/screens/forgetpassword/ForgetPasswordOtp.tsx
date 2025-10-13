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
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const { method, contact } = route.params; // ✅ get passed data
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState(false);
    const inputsRef = useRef<TextInput[]>([]); // ✅ added ref
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
 
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
                {otp.map((digit, index) => {
                    const isFocused = focusedIndex === index;
 
                    // 🔹 Dynamic color logic
                    let borderColor = "#E3E9F1CC";
                    let backgroundColor = "#E3E9F1CC";
                    let placeholderColor = "rgba(34,63,97,0.35)";
 
                    if (error) {
                        borderColor = "rgba(231,76,60,0.35)";
                        backgroundColor = "#FBFDFF";
                        placeholderColor = "rgba(231,76,60,0.35)";
                    } else if (isFocused) {
                        borderColor = "rgba(34,63,97,0.35)";
                    }
 
                    return (
                        <TextInput
                            key={index}
                            ref={(el) => {
                                if (el) inputsRef.current[index] = el;
                            }}
                            style={[
                                styles.otpBox,
                                { borderColor, backgroundColor },
                            ]}
                            keyboardType="number-pad"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleChange(text, index)}
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                            textAlign="center"
                            placeholder="0"
                            placeholderTextColor={placeholderColor}
                        />
                    );
                })}
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
    fontSize: moderateScale(20),
    lineHeight: verticalScale(26),
    color: "#121212",
    textAlign: "center",
  },
  textContainer: {
    marginTop: verticalScale(10),
  },
  instructionText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "300",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(22),
    letterSpacing: 0,
    color: "rgba(18, 18, 18, 0.6)",
  },
  emailText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(25),
    color: "#121212",
    opacity: 0.6,
    marginTop: verticalScale(4),
  },
  otpLabel: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(31),
    color: "#121212",
    textAlign: "left",
    marginTop: verticalScale(25),
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: scale(19),
    marginTop: verticalScale(20),
  },
  otpBox: {
    width: scale(54),
    height: verticalScale(54),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "rgba(34,63,97,0.35)",
    backgroundColor: "#E3E9F1CC",
    textAlign: "center",
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(24),
    color: "#223F61",
    borderBottomWidth: 1,
  },
  errorText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(19),
    color: "#E74C3C",
    alignSelf: "flex-end",
    marginRight: scale(48),
    marginTop: verticalScale(6),
  },
  errorWrapper: {
    height: verticalScale(20),
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    marginBottom: verticalScale(10),
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(25),
    width: "100%",
  },
  infoText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "300",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(25),
    letterSpacing: 0,
    color: "rgba(18, 18, 18, 0.59)",
  },
  resendText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(16),
    letterSpacing: 0,
    color: "#223F61",
  },
});
 
export default ForgetPasswordOtp;
 
 
 