import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import MobileIcon from "../../assets/icons/MobileIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
  ForgetPasswordOtp: {
    method: "sms" | "email";
    contact: string;
    userId: string;
    phone: string;
    email: string;
  };
};

const ForgetPin: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selectedMethod, setSelectedMethod] = useState<"sms" | "email">("sms");

  // Static placeholder data (no backend)
  const phone = "+91 ***** **234";
  const email = "example@gmail.com";
  const userId = "static_user_001";

  const handleVerify = () => {
    const contactInfo = selectedMethod === "sms" ? phone : email;
    navigation.navigate("ForgetPasswordOtp", {
      method: selectedMethod,
      contact: contactInfo,
      userId,
      phone,
      email,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackWard width={10} height={16} color="#223F61" />
        </TouchableOpacity>
        <Text style={styles.heading}>Forget Password</Text>
      </View>

      <Text style={styles.infoText}>Select how we should reset your password:</Text>

      {/* SMS Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "sms" && styles.selectedContainer,
        ]}
        onPress={() => setSelectedMethod("sms")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[styles.bigCircle, { opacity: selectedMethod === "sms" ? 1 : 0.2 }]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.viaSmsText}>via SMS</Text>
          <Text style={styles.phoneText}>{phone}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <MobileIcon />
        </View>
      </TouchableOpacity>

      {/* Email Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "email" && styles.selectedContainer,
        ]}
        onPress={() => setSelectedMethod("email")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[styles.bigCircle, { opacity: selectedMethod === "email" ? 1 : 0.2 }]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.viaSmsText}>via Email</Text>
          <Text style={styles.phoneText}>{email}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <EmailIcon />
        </View>
      </TouchableOpacity>

      {/* Verify Button */}
      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{
          backgroundColor: "#223F61",
          marginTop: verticalScale(57),
        }}
        textStyle={{
          color: "#FAF8F5",
        }}
      />
    </View>
  );
};

export default ForgetPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: scale(40),
    paddingTop: verticalScale(90),
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: verticalScale(50),
  },
  backButton: {
    position: "absolute",
    left: 0,
  },
  heading: {
    fontWeight: "700",
    fontSize: moderateScale(32),
    color: "#121212",
  },
  infoText: {
    fontSize: moderateScale(14),
    color: "#121212",
    marginBottom: verticalScale(20),
  },
  contactMethodContainer: {
    width: "100%",
    height: verticalScale(100),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E9F1CC",
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    borderColor: "#223F61",
    padding: scale(16),
    marginBottom: verticalScale(20),
  },
  selectedContainer: {
    borderWidth: 2,
  },
  circleWrapper: {
    marginRight: scale(10),
  },
  bigCircle: {
    width: scale(18),
    height: scale(18),
    borderWidth: 2,
    borderColor: "#223F61",
    borderRadius: scale(9),
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    width: scale(9),
    height: scale(9),
    backgroundColor: "#223F61",
    borderRadius: scale(4.5),
  },
  textContainer: {
    flex: 1,
  },
  viaSmsText: {
    fontSize: moderateScale(16),
    color: "#223F61",
    opacity: 0.52,
  },
  phoneText: {
    fontSize: moderateScale(16),
    color: "#121212",
    opacity: 0.75,
    marginTop: verticalScale(10),
  },
  iconWrapper: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    backgroundColor: "#FBFDFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
