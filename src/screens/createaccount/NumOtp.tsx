import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import ButtonComp from "../../components/common/ButtonComp";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import auth from '@react-native-firebase/auth';

type RootStackParamList = {
  NumVerify: undefined;
  NumOtp: { phone: string; confirmResult: any };
  CreateAccount: { number: string };
  LoginSuccess: undefined;
};
const NumOtp: React.FC = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6 digits
  const [error, setError] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputsRef = useRef<TextInput[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "NumOtp">>();
  const phone = route.params?.phone || "";
  const confirmResult = route.params?.confirmResult;

  const handleChange = (text: string, index: number) => {
    if (/^\d$/.test(text) || text === "") {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      if (text) setError(false);

      // Auto-focus next or previous
      if (text && index < 5) inputsRef.current[index + 1]?.focus();
      else if (!text && index > 0) inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6 && /^\d{6}$/.test(enteredOtp)) {
      setError(false);
      if (!confirmResult) {
        // Alert.alert("Error", "OTP verification failed. Please try again.");
        return;
      }
      try {
        await confirmResult.confirm(enteredOtp);
        navigation.navigate("CreateAccount", { number: phone });
      } catch (err: any) {
        console.error("OTP verification error:", err);
        setError(true);
        // Alert.alert("Invalid OTP", "The OTP you entered is incorrect.");
      }
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackWard width={10} height={16} color="#223F61" />
        </TouchableOpacity>
        <Text style={styles.heading}>Verify your phone number</Text>
      </View>

      <Text style={styles.otpText}>Enter your OTP here</Text>

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
              ref={(el) => { if (el) inputsRef.current[index] = el; }}
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

      <View style={styles.errorWrapper}>
        {error ? <Text style={styles.errorText}>* Invalid OTP</Text> : null}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.infoText}>Didn’t receive the OTP? </Text>
        <TouchableOpacity onPress={() => confirmResult && confirmResult.resend && confirmResult.resend()}>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>
      </View>

      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{ backgroundColor: "#223F61" }}
        textStyle={{ color: "#FAF8F5" }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  // Main container for the screen
  container: {
    flex: 1, // fills the entire screen
    backgroundColor: "#FFFFFF", // white background
    paddingHorizontal: scale(40), // horizontal padding on both sides
    paddingTop: verticalScale(90), // top padding
    alignItems: "center", // center items horizontally
  },

  // Container for the header section (back button + title)
  headerContainer: {
    width: "100%", // full width
    marginBottom: verticalScale(20), // space below header
    alignItems: "center", // center title horizontally
    position: "relative", // allows absolute positioning for back button
  },

  // Back button styling
  backButton: {
    position: "absolute", // positioned relative to headerContainer
    left: scale(0), // align to the left
    top: verticalScale(5), // small top offset
  },

  // Header title text
  heading: {
    fontFamily: "Kollektif-Bold", // custom font
    fontWeight: "700", // bold weight
    fontSize: moderateScale(20), // responsive font size
    lineHeight: moderateScale(26), // line height
    color: "#121212", // dark text color
    textAlign: "center", // center text
  },

  // OTP instruction text
  otpText: {
    fontFamily: "Avenir LT Std 65 Medium", // medium font
    fontWeight: "600", // semi-bold
    fontSize: moderateScale(15), // font size
    lineHeight: verticalScale(15), // line height
    color: "#121212", // dark color
    marginTop: moderateScale(50), // top margin to separate from header
    marginBottom: verticalScale(20), // bottom margin before OTP boxes
    textAlignVertical: "center", // vertical alignment of text
  },

  // Container for OTP input boxes
  otpContainer: {
    flexDirection: "row", // arrange boxes in a row
    justifyContent: "center", // center them horizontally
    gap: scale(5), // space between each OTP box
    marginBottom: verticalScale(5), // small bottom margin
  },

  // Individual OTP input box
  otpBox: {
    width: scale(39), // width of the box
    height: verticalScale(39), // height of the box
    borderRadius: moderateScale(10), // rounded corners
    borderWidth: 1, // border width
    fontSize: moderateScale(20), // text size inside box
    fontWeight: "600", // semi-bold text
    fontFamily: "Avenir LT Std", // font family
    color: "#223F61", // text color
  },

  // Container for error messages
  errorWrapper: {
    height: verticalScale(20), // reserve height for error text
    justifyContent: "flex-end", // align text to the bottom
    alignItems: "flex-end", // align text to the right
    width: "100%", // full width
    marginBottom: verticalScale(10), // space below error
  },

  // Error text styling
  errorText: {
    fontFamily: "Avenir LT Std 55 Roman", // regular font
    fontWeight: "400", // normal weight
    fontSize: moderateScale(12), // small font size
    lineHeight: verticalScale(19), // line height
    color: "#E74C3C", // red color for errors
  },

  // Container for "Resend OTP" section
  resendContainer: {
    flexDirection: "row", // arrange text in a row
    alignItems: "center", // center vertically
    marginBottom: verticalScale(15), // bottom spacing
    marginTop: moderateScale(30), // top spacing from OTP box
  },

  // Info text before "Resend"
  infoText: {
    fontFamily: "Avenir LT Std 45 Book", // lighter font
    fontWeight: "300", // thin weight
    fontSize: moderateScale(16), // font size
    lineHeight: verticalScale(25), // line height
    color: "#121212", // dark text
  },

  // "Resend" clickable text
  resendText: {
    fontFamily: "Avenir LT Std 65 Medium", // medium font
    fontWeight: "600", // semi-bold
    fontSize: moderateScale(16), // font size
    lineHeight: verticalScale(25), // line height
    color: "#223F61", // blueish color to indicate action
  },
});

export default NumOtp;
