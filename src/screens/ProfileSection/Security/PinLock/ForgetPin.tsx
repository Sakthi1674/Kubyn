import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import BackWard from "../../../../assets/icons/BackWard";
import MobileIcon from "../../../../assets/icons/MobileIcon";
import EmailIcon from "../../../../assets/icons/EmailIcon";
import ButtonComp from "../../../../components/common/ButtonComp";
import colors from "../../../../theme/color";

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

  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;

  // Static data for UI
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
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>
          Forget Password
        </Text>
      </View>

      <Text style={[styles.infoText, { color: theme.textSecondary }]}>
        Select which contact detail should we use to reset your password
      </Text>

      {/* SMS Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          {
            backgroundColor: theme.buttondark,
            borderColor:
              selectedMethod === "sms" ? theme.Button : theme.Button,
          },
        ]}
        onPress={() => setSelectedMethod("sms")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { borderColor: theme.Button, opacity: selectedMethod === "sms" ? 1 : 0.3 },
            ]}
          >
            {selectedMethod === "sms" && (
              <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
            )}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.viaSmsText, { color: theme.textSecondary }]}>
            via SMS
          </Text>
          <Text style={[styles.phoneText, { color: theme.text }]}>{phone}</Text>
        </View>
        <View
          style={[styles.iconWrapper, { backgroundColor: theme.bttext }]}
        >
          <MobileIcon color={theme.icon} />
        </View>
      </TouchableOpacity>

      {/* Email Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          {
            backgroundColor: theme.buttondark,
            borderColor:
              selectedMethod === "email" ? theme.Button : theme.Button,
          },
        ]}
        onPress={() => setSelectedMethod("email")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              { borderColor: theme.Button, opacity: selectedMethod === "email" ? 1 : 0.3 },
            ]}
          >
            {selectedMethod === "email" && (
              <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
            )}
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.viaSmsText, { color: theme.textSecondary }]}>
            via Email
          </Text>
          <Text style={[styles.phoneText, { color: theme.text }]}>{email}</Text>
        </View>
        <View
          style={[styles.iconWrapper, { backgroundColor: theme.bttext }]}
        >
          <EmailIcon color={theme.icon} />
        </View>
      </TouchableOpacity>

      {/* Verify Button */}
      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{
          backgroundColor: theme.Button,
          marginTop: verticalScale(37),
        }}
        textStyle={{
          color: theme.bttext,
        }}
      />
    </View>
  );
};

export default ForgetPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    top: verticalScale(12),
  },
  heading: {
    fontWeight: "700",
    fontSize: moderateScale(32),
    fontFamily: "Avenir LT Std",
  },
  infoText: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(20),
    fontFamily: "Avenir LT Std",
    fontWeight: "300",
    lineHeight: verticalScale(20),
  },
  contactMethodContainer: {
    width: "100%",
    height: verticalScale(100),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(10),
    borderWidth: 1,
    padding: scale(16),
    marginBottom: verticalScale(20),
  },
  circleWrapper: {
    marginRight: scale(10),
  },
  bigCircle: {
    width: scale(18),
    height: scale(18),
    borderWidth: 2,
    borderRadius: scale(9),
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    width: scale(9),
    height: scale(9),
    borderRadius: scale(4.5),
  },
  textContainer: {
    flex: 1,
  },
  viaSmsText: {
    fontSize: moderateScale(16),
  },
  phoneText: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(10),
  },
  iconWrapper: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(24),
    justifyContent: "center",
    alignItems: "center",
  },
});
