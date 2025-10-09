import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import MobileIcon from "../../assets/icons/MobileIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
  ForgetPasswordOtp: { method: "sms" | "email"; contact: string };
};

const ForgetPassword: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [selectedMethod, setSelectedMethod] = useState<"sms" | "email">("sms");

 const handleVerify = () => {
  // Send data to next screen
  const contactInfo =
    selectedMethod === "sms" ? "+91 ***** **234" : "abc123@gmail.com";
 
  navigation.navigate("ForgetPasswordOtp", {
    method: selectedMethod,
    contact: contactInfo,
  });
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
        <Text style={styles.heading}>Forget Password</Text>
      </View>

      <Text style={styles.infoText}>
        Select which contact detail should we use to reset your password:
      </Text>

      {/* SMS Contact */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "sms" && styles.selectedContainer
        ]}
        onPress={() => setSelectedMethod("sms")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === "sms" ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.viaSmsText}>via SMS</Text>
          <Text style={styles.phoneText}>+91 ***** **234</Text>
        </View>

        <View style={styles.iconWrapper}>
          <View style={{ opacity: 0.25 }}>
            <MobileIcon />
          </View>
        </View>
      </TouchableOpacity>

      {/* Email Contact */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "email" && styles.selectedContainer
        ]}
        onPress={() => setSelectedMethod("email")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { opacity: selectedMethod === "email" ? 1 : 0.2 },
            ]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.viaSmsText}>via E-Mail</Text>
          <Text
            style={styles.phoneText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            abc123@gmail.com
          </Text>
        </View>

        <View style={styles.iconWrapper}>
          <View style={{ opacity: 0.25 }}>
            <EmailIcon />
          </View>
        </View>
      </TouchableOpacity>

      {/* Verify Button */}
      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{ backgroundColor: "#223F61", marginTop: 57 }}
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
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    marginBottom: 50,
    alignItems: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(6)
  },
  heading: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 32,
    color: "#121212",
    textAlign: "center",
  },
  infoText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: "#121212",
    textAlign: "left",
    marginBottom: 20,
  },
  contactMethodContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E9F1CC",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#223F61",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  circleWrapper: {
    marginRight: 0,
    marginLeft: 0,
  },
  bigCircle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#223F61",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 26,
  },
  smallCircle: {
    width: 9,
    height: 9,
    backgroundColor: "#223F61",
    borderRadius: 4.5,
  },
  textContainer: {
    flex: 1,
  },
  selectedContainer: {
    borderWidth: 1.5,
    borderColor: "#223F61",
  },

  viaSmsText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 14,
    color: "#223F61",
    opacity: 0.52,
  },
  phoneText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    color: "#121212",
    opacity: 0.75,
    marginTop: 10,
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FBFDFF",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 44,
  },
});

export default ForgetPassword;

