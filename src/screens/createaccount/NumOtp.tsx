import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  useColorScheme,
} from "react-native";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import ButtonComp from "../../components/common/ButtonComp";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import auth from "@react-native-firebase/auth";
import colors from "../../theme/color";

type RootStackParamList = {
  NumVerify: undefined;
  NumOtp: { phone: string; confirmResult: any };
  CreateAccount: { number: string };
  LoginSuccess: undefined;
};

const NumOtp: React.FC = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputsRef = useRef<TextInput[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "NumOtp">>();
  const phone = route.params?.phone || "";
  const confirmResult = route.params?.confirmResult;

  // Detect theme
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text) setError(false);

      if (text && index < 5) inputsRef.current[index + 1]?.focus();
      else if (!text && index > 0) inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6 && /^\d{6}$/.test(enteredOtp)) {
      setError(false);
      if (!confirmResult) return;
      try {
        await confirmResult.confirm(enteredOtp);
        navigation.navigate("CreateAccount", { number: phone });
      } catch (err: any) {
        console.error("OTP verification error:", err);
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>
          Verify your phone number
        </Text>
      </View>

      <Text style={[styles.otpText, { color: theme.text }]}>
        Enter your OTP here
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => {
          const isFocused = focusedIndex === index;
          let borderColor = theme.buttondark;
          let backgroundColor = theme.buttondark;
          let placeholderColor = "rgba(3, 3, 4, 0.35)";

          if (error) {
            borderColor = theme.notification;
            backgroundColor = theme.background;
            placeholderColor = "rgba(231,76,60,0.35)";
          } else if (isFocused) {
            borderColor = theme.radio;
          }

          return (
            <TextInput
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              style={[
                styles.otpBox,
                { borderColor, backgroundColor, color: theme.radio },
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

      <View style={styles.errorWrapper}>
        {error ? (
          <Text style={[styles.errorText, { color: theme.notification }]}>
            * Invalid OTP
          </Text>
        ) : null}
      </View>

      <View style={styles.resendContainer}>
        <Text style={[styles.infoText, { color: theme.textSecondary }]}>
          Didn’t receive the OTP?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => confirmResult && confirmResult.resend && confirmResult.resend()}
        >
          <Text style={[styles.resendText, { color: theme.radio }]}>Resend</Text>
        </TouchableOpacity>
      </View>

      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{ backgroundColor: theme.Button }}
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
    lineHeight: moderateScale(26),
    textAlign: "center",
  },
  otpText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(15),
    lineHeight: verticalScale(15),
    marginTop: moderateScale(50),
    marginBottom: verticalScale(20),
    textAlignVertical: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: scale(5),
    marginBottom: verticalScale(5),
  },
  otpBox: {
    width: scale(39),
    height: verticalScale(39),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    fontSize: moderateScale(20),
    fontWeight: "600",
    fontFamily: "Avenir LT Std",
  },
  errorWrapper: {
    height: verticalScale(20),
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
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
    marginTop: moderateScale(30),
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
    lineHeight: verticalScale(25),
  },
});

export default NumOtp;
