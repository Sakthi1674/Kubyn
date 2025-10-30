import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  useColorScheme,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import Flag from "../../assets/icons/IndianFlag";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import auth from "@react-native-firebase/auth";
import colors from "../../theme/color";

type RootStackParamList = {
  NumVerify: undefined;
  NumOtp: { phone: string; confirmResult: any };
  CreateAccount: { number: string };
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
  const [loading, setLoading] = useState(false);

  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;

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

  const handleConfirm = async () => {
    const rawPhone = phone.replace(/\s/g, "");

    if (!/^([6-9]\d{9})$/.test(rawPhone)) {
      setError(true);
      return;
    }

    setError(false);
    setLoading(true);

    const fullPhone = `+91${rawPhone}`;

    try {
      const confirmResult = await auth().signInWithPhoneNumber(fullPhone);
      setLoading(false);
      navigation.navigate("NumOtp", { phone: fullPhone, confirmResult });
    } catch (err: any) {
      setLoading(false);
      console.error("Firebase phone auth error:", err);
      setError(true);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>
          Verify your phone number
        </Text>
      </View>

      <Text style={[styles.description, { color: theme.textSecondary }]}>
        Enter your phone number. We will be sending an SMS with a code to the
        number
      </Text>

      <Text style={[styles.label, { color: theme.text }]}>Phone Number</Text>

      <View style={styles.phoneContainer}>
        <View style={{ marginRight: 10 }}>
          <Flag width={30} height={23} />
        </View>
        <View
          style={[
            styles.countryBox,
            {
              borderColor: theme.buttondark,
              backgroundColor: theme.buttondark,
            },
          ]}
        >
          <Text style={[styles.countryText, { color: theme.text }]}>+91</Text>
        </View>
       <TextInput
  style={[
    styles.phoneInput,
    {
      backgroundColor: theme.buttondark, // dynamic for dark/light
      color: theme.text, // entered text
      borderColor: isFocused
        ? theme.Button
        : error
        ? theme.notification
        : theme.buttondark,
    },
  ]}
  keyboardType="number-pad"
  placeholder="00000 00000"
  placeholderTextColor={
    error ? theme.notification : theme.textSecondary
  }
  value={phone}
  onChangeText={handlePhoneChange}
  onFocus={() => setIsFocused(true)}
  onBlur={() => setIsFocused(false)}
/>

      </View>

      <View style={styles.errorContainer}>
        {error ? (
          <Text style={[styles.errorText, { color: theme.notification }]}>
            *Please enter a valid mobile number
          </Text>
        ) : (
          <Text style={[styles.errorTextInvisible, { color: theme.text }]}>
            placeholder
          </Text>
        )}
      </View>

      <ButtonComp
        title={loading ? "Sending..." : "Confirm"}
        onPress={handleConfirm}
        style={{
          backgroundColor: theme.Button,
          marginTop: 29,
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
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(26),
    textAlign: "center",
  },
  description: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(20),
    textAlign: "left",
    width: "100%",
    marginBottom: verticalScale(35),
  },
  label: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "400",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(22),
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
    justifyContent: "center",
    alignItems: "center",
  },
  countryText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    textAlign: "center",
  },
  phoneInput: {
    flex: 1,
    height: verticalScale(54),
    borderRadius: moderateScale(12),
    borderWidth: 1,
    paddingHorizontal: scale(14),
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
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
