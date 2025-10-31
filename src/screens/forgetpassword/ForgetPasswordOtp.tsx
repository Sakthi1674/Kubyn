import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useColorScheme,
} from "react-native";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";


type RootStackParamList = {
  ForgetPasswordOtp: { method: "sms" | "email"; contact: string };
  PasswordReset: { phoneNumber: string };
};

type ForgetPasswordOtpRouteProp = RouteProp<RootStackParamList, "ForgetPasswordOtp">;

const ForgetPasswordOtp: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<ForgetPasswordOtpRouteProp>();
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"]; // ✅ Theme setup

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const inputsRef = useRef<TextInput[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { contact } = route.params;

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      setError(false);

      if (text && index < 3) inputsRef.current[index + 1]?.focus();
      else if (!text && index > 0) inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const isEmpty = otp.some((digit) => digit.trim() === "");
    if (isEmpty) {
      setError(true);
    } else {
      setError(false);
      navigation.navigate("PasswordReset", { phoneNumber: contact });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackWard width={10} height={16} color={theme.Button} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>Verify</Text>
      </View>

      {/* Info */}
      <View style={styles.textContainer}>
        <Text style={[styles.instructionText, { color: theme.textSecondary }]}>
          Enter the 4-digit code sent to
        </Text>
        <Text style={[styles.emailText, { color: theme.text }]}>{contact}</Text>
      </View>

      {/* Label */}
      <Text style={[styles.otpLabel, { color: theme.text }]}>Enter your OTP here</Text>

      {/* OTP Boxes */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => {
          const isFocused = focusedIndex === index;

          let borderColor = theme.buttondark;
          let backgroundColor = theme.buttondark;
          let placeholderColor = `${theme.Button}55`;

          if (error) {
            borderColor = `${theme.notification}55`;
            backgroundColor = theme.bttext;
            placeholderColor = `${theme.notification}55`;
          } else if (isFocused) {
            borderColor = `${theme.Button}55`;
          }

          return (
            <TextInput
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              style={[
                styles.otpBox,
                {
                  borderColor,
                  backgroundColor,
                  color: theme.Button,
                },
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

      {/* Error */}
      <View style={styles.errorWrapper}>
        {error && <Text style={[styles.errorText, { color: theme.notification }]}>OTP is required</Text>}
      </View>

      {/* Resend Section */}
      <View style={styles.resendContainer}>
        <Text style={[styles.infoText, { color: theme.textSecondary }]}>Didn’t receive the OTP? </Text>
        <TouchableOpacity onPress={() => console.log("Resend OTP")}>
          <Text style={[styles.resendText, { color: theme.Button }]}>Resend</Text>
        </TouchableOpacity>
      </View>

      {/* Button */}
      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{ backgroundColor: theme.Button, marginTop: 20 }}
        textStyle={{ color: theme.bttext }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  emailText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(25),
    opacity: 0.6,
    marginTop: verticalScale(4),
  },
  otpLabel: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(31),
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
    textAlign: "center",
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(24),
    borderBottomWidth: 1,
  },
  errorText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(19),
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
  },
  resendText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(16),
  },
});

export default ForgetPasswordOtp;
