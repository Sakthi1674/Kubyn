import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import {
  useNavigation,
  useRoute,
  NavigationProp,
} from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import MobileIcon from "../../assets/icons/MobileIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";


type RootStackParamList = {
  ForgetPasswordOtp: {
    method: "sms" | "email";
    contact: string;
    userId: string;
    phone: string;
    email: string;
  };
};

const ForgetPassword: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<any>();
  const [selectedMethod, setSelectedMethod] = useState<"sms" | "email">("sms");
  const [phone, setPhone] = useState<string>(route.params?.phoneNumber || "");
  const [email, setEmail] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  // ✅ Get theme
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];

  useEffect(() => {
    const fetchUserData = async () => {
      if (!phone) return;
      try {
        const response = await fetch(
          "http://10.0.2.2:5000/api/forget-password",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phoneNumber: phone }),
          }
        );

        const data = await response.json();
        if (response.ok) {
          setEmail(data.email);
          setPhone(data.phoneNumber);
          setUserId(data.userId);
        } else {
          console.log("Error:", data.message);
        }
      } catch (err) {
        console.error("Server error:", err);
      }
    };
    fetchUserData();
  }, [phone]);

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
          <BackWard width={10} height={16} color={theme.Button} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>
          Forget Password
        </Text>
      </View>

      <Text style={[styles.infoText, { color: theme.textSecondary }]}>
        Select how we should reset your password:
      </Text>

      {/* SMS Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          {
            backgroundColor: theme.buttondark,
            borderColor:
              selectedMethod === "sms" ? theme.Button : `${theme.Button}55`,
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
            <View
              style={[
                styles.smallCircle,
                { backgroundColor: theme.Button },
              ]}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.viaSmsText,
              { color: theme.textSecondary },
            ]}
          >
            via SMS
          </Text>
          <Text
            style={[
              styles.phoneText,
              { color: theme.text },
            ]}
          >
            {phone || "+91 ***** **234"}
          </Text>
        </View>

        <View
          style={[
            styles.iconWrapper,
            { backgroundColor: theme.bttext },
          ]}
        >
          <MobileIcon />
        </View>
      </TouchableOpacity>

      {/* Email Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          {
            backgroundColor: theme.buttondark,
            borderColor:
              selectedMethod === "email" ? theme.Button : `${theme.Button}55`,
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
            <View
              style={[
                styles.smallCircle,
                { backgroundColor: theme.Button },
              ]}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[
              styles.viaSmsText,
              { color: theme.textSecondary },
            ]}
          >
            via Email
          </Text>
          <Text
            style={[
              styles.phoneText,
              { color: theme.text },
            ]}
          >
            {email || "example@gmail.com"}
          </Text>
        </View>

        <View
          style={[
            styles.iconWrapper,
            { backgroundColor: theme.bttext },
          ]}
        >
          <EmailIcon />
        </View>
      </TouchableOpacity>

      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{
          backgroundColor: theme.Button,
          marginTop: verticalScale(57),
        }}
        textStyle={{
          color: theme.bttext,
        }}
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
    alignItems: "center",
    marginBottom: verticalScale(50),
  },
  backButton: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(12),
  },
  heading: {
    fontWeight: "700",
    fontSize: moderateScale(32),
  },
  infoText: {
    fontSize: moderateScale(14),
    marginBottom: verticalScale(20),
  },
  contactMethodContainer: {
    width: "100%",
    height: verticalScale(100),
    flexDirection: "row",
    alignItems: "center",
    borderRadius: moderateScale(10),
    borderWidth: 1.5,
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
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    width: scale(9),
    height: scale(9),
    borderRadius: 4.5,
  },
  textContainer: {
    flex: 1,
  },
  viaSmsText: {
    fontSize: moderateScale(16),
    opacity: 0.7,
  },
  phoneText: {
    fontSize: moderateScale(16),
    opacity: 0.9,
    marginTop: verticalScale(10),
  },
  iconWrapper: {
    width: scale(48),
    height: scale(48),
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ForgetPassword;