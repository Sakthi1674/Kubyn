import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
  ForgetPasswordOtp: { method: "sms" | "email"; contact: string };
  PasswordReset: { phoneNumber: string };
};

type ForgetPasswordOtpRouteProp = RouteProp<RootStackParamList, "ForgetPasswordOtp">;

const ForgetPasswordOtp: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<ForgetPasswordOtpRouteProp>();
  const { method, contact } = route.params; // ✅ 'contact' = phone number
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const inputsRef = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      setError(false);

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
      console.log("✅ Verified OTP, navigating with phone:", contact);
      // 👇 Send the phone number to PasswordReset screen
      navigation.navigate("PasswordReset", { phoneNumber: contact });
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

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => {
          const isFocused = focusedIndex === index;

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
              style={[styles.otpBox, { borderColor, backgroundColor }]}
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

      {error && <Text style={styles.errorText}>OTP is required</Text>}

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
  container: { flex: 1, backgroundColor: "#FFFFFF", paddingHorizontal: scale(40), paddingTop: verticalScale(90) },
  headerContainer: { width: "100%", marginBottom: verticalScale(20), position: "relative" },
  backButton: { position: "absolute", left: 0, top: 2 },
  heading: { fontFamily: "Kollektif", fontWeight: "700", fontSize: 20, color: "#121212", textAlign: "center" },
  textContainer: { marginTop: verticalScale(10) },
  instructionText: { color: "rgba(18, 18, 18, 0.6)", fontSize: 14 },
  emailText: { color: "#121212", opacity: 0.6, fontSize: 16, marginTop: 4 },
  otpContainer: { flexDirection: "row", gap: scale(19), marginTop: verticalScale(20) },
  otpBox: { width: scale(54), height: verticalScale(54), borderRadius: 10, borderWidth: 1, backgroundColor: "#E3E9F1CC", fontSize: 24, textAlign: "center", color: "#223F61" },
  errorText: { color: "#E74C3C", alignSelf: "flex-end", marginTop: 6 },
});

export default ForgetPasswordOtp;
