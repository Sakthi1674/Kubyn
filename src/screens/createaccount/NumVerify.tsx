import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import Flag from "../../assets/icons/IndianFlag";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
 
// Define navigation type
type RootStackParamList = {
  NumVerify: undefined;
  NumOtp: { phone: string };
};
 
type NumVerifyNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NumVerify"
>;
 
const NumVerify: React.FC = () => {
  const navigation = useNavigation<NumVerifyNavigationProp>();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
 
  const handlePhoneChange = (text: string) => {
    // Remove non-numeric characters
    const numericText = text.replace(/[^0-9]/g, "");
    // Limit to 10 digits
    const limitedText = numericText.slice(0, 10);
    // Format as 12345 67890
    const formatted =
      limitedText.length > 5
        ? `${limitedText.slice(0, 5)} ${limitedText.slice(5)}`
        : limitedText;
    setPhone(formatted);
  };
 
  const handleConfirm = () => {
    const rawPhone = phone.replace(/\s/g, ""); // remove space
    if (rawPhone.length !== 10) {
      setError("* Please enter a valid 10-digit mobile number");
    } else {
      setError("");
      console.log("Phone Number:", rawPhone);
      // Navigate to OTP screen
      navigation.navigate("NumOtp", { phone: rawPhone });
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
 
      {/* Description */}
      <Text style={styles.description}>
        Enter your phone number. We will be sending an SMS with a code to the
        number
      </Text>
 
      {/* Label */}
      <Text style={styles.label}>Phone Number</Text>
 
      {/* Phone Input Section */}
      <View style={styles.phoneContainer}>
        <View style={{ marginRight: 10 ,marginLeft:20}}>
          <Flag width={30} height={23}  />
        </View>
        <View style={[styles.countryBox, { marginRight: 10 }]}>
          <Text style={styles.countryText}>+91</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          keyboardType="number-pad"
          placeholder="00000 00000"
          placeholderTextColor="#223F61"
          value={phone}
          onChangeText={handlePhoneChange}
        />
      </View>
 
      {/* Error Text */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
 
      {/* Confirm Button */}
      <ButtonComp
        title="Confirm"
        onPress={handleConfirm}
        style={{
          backgroundColor: "#223F61",
          marginTop: 30,

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
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(90),
    alignItems: "center",
  },

  headerContainer: {
    fontSize: moderateScale(20),
    fontFamily: "Kollektif",
    fontWeight: "700",
    width: "100%",
    alignItems: "center",
    marginBottom: verticalScale(40),
  },

  backButton: {
    position: "absolute",
    left: scale(15),
    top: verticalScale(5),
  },

  heading: {
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: moderateScale(18),
    lineHeight: verticalScale(24),
    color: "#121212",
    textAlign: "left",
  },

  description: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    color: "#666666",
    textAlign: "left",
    width: "90%",
    marginBottom: verticalScale(35),
  },

  label: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "500",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(22),
    color: "#121212",
    alignSelf: "flex-start",
    marginLeft: scale(15),
    marginBottom: verticalScale(17),
  },

  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: verticalScale(35),
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
    backgroundColor: "#F8F9FB",
    
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
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#223F61",
    backgroundColor: "#F8F9FB",
  },

  errorText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(18),
    color: "#E74C3C",
    alignSelf: "flex-start",
    marginTop: verticalScale(2),
    marginLeft:moderateScale(95),
  },
});
 
export default NumVerify;
 
 