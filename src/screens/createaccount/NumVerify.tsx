import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import Flag from "../../assets/icons/IndianFlag";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const API_BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

type RootStackParamList = {
  NumVerify: undefined;
  NumOtp: { phone: string };
  CreateAccount: { number: string }; // ✅ Add this
};

type NumVerifyNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NumVerify"
>;

const NumVerify: React.FC = () => {
  const navigation = useNavigation<NumVerifyNavigationProp>();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handlePhoneChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, "");
    const limitedText = numericText.slice(0, 10);
    const formatted =
      limitedText.length > 5
        ? `${limitedText.slice(0, 5)} ${limitedText.slice(5)}`
        : limitedText;
    setPhone(formatted);
    if (error) setError(false);
  };

  const handleConfirm = () => {
    const rawPhone = phone.replace(/\s/g, "");

    if (rawPhone.length !== 10) {
      setError(true);
      return;
    }

    setError(false);
    navigation.navigate("NumOtp", { phone: rawPhone });
  };




  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackWard width={10} height={16} color="#223F61" />
        </TouchableOpacity>
        <Text style={styles.heading}>Verify your phone number</Text>
      </View>

      <Text style={styles.description}>
        Enter your phone number. We will be sending an SMS with a code to the
        number
      </Text>

      <Text style={styles.label}>Phone Number</Text>

      <View style={styles.phoneContainer}>
        <View style={{ marginRight: 10 }}>
          <Flag width={30} height={23} />
        </View>
        <View style={[styles.countryBox, { marginRight: 10 }]}>
          <Text style={styles.countryText}>+91</Text>
        </View>
        <TextInput
          style={[
            styles.phoneInput,
            isFocused && !error && {
              borderColor: "rgba(34,63,97,0.35)",
              backgroundColor: "#E3E9F1CC",
            },
            error && {
              borderColor: "rgba(231,76,60,0.35)",
              backgroundColor: "#FBFDFF",
            },
          ]}
          keyboardType="number-pad"
          placeholder="00000 00000"
          placeholderTextColor={
            error ? "rgba(231,76,60,0.35)" : "rgba(34,63,97,0.35)"
          }
          value={phone}
          onChangeText={handlePhoneChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>

      <View style={styles.errorContainer}>
        {error ? (
          <Text style={styles.errorText}>
            *Please enter your mobile number
          </Text>
        ) : (
          <Text style={styles.errorTextInvisible}>placeholder</Text>
        )}
      </View>

      <ButtonComp
        title="Confirm"
        onPress={handleConfirm}
        style={{
          backgroundColor: "#223F61",
          marginTop: 29,
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
    alignItems: "center",
    marginBottom: verticalScale(40),
  },
  backButton: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(5),
  },
  heading: {
    fontFamily: "Kollektif-Bold", // ✅ Fixed typo: was "Kollekti-Bold"
    fontWeight: "700",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(26),
    color: "#121212",
    textAlign: "center",
  },
  description: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    color: "#666666",
    textAlign: "left",
    width: "100%",
    marginBottom: verticalScale(35),
  },
  label: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "400",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(22),
    color: "#121212",
    alignSelf: "flex-start",
    marginBottom: verticalScale(17),
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: scale(8),
  },
  countryBox: {
    width: scale(46),
    height: verticalScale(54),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E9F1CC",
  },
  countryText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#223F61",
    textAlign: "center",
  },
  phoneInput: {
    flex: 1,
    height: verticalScale(54),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    paddingHorizontal: scale(14),
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#223F61",
    backgroundColor: "#E3E9F1CC",
  },
  errorContainer: {
    height: verticalScale(20),
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    marginTop: verticalScale(5),
  },
  errorText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(18),
    color: "#E74C3C",
  },
  errorTextInvisible: {
    opacity: 0,
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(18),
  },
});

export default NumVerify;