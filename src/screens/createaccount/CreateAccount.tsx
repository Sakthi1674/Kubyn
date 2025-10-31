import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
  Alert,
  useColorScheme,
} from "react-native";
import { useNavigation, NavigationProp, useRoute, RouteProp } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import ButtonComp from "../../components/common/ButtonComp";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import AppleIcon from "../../assets/icons/Ios";
import EyeIcon from "../../assets/icons/EyeIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";

const API_BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

type RootStackParamList = {
  NumOtp: undefined;
  Login: undefined;
  HeyScreen: undefined;
  CreateAccount: { number: string };

};
type CreateAccountRouteProp = RouteProp<RootStackParamList, "CreateAccount">;
const CreateAccount: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const route = useRoute<RouteProp<RootStackParamList, "CreateAccount">>();
  const phone = route.params?.number || "";
  console.log("Received phone:", phone); // Debug

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || "light"];

const [showError, setShowError] = useState(false);
const [errorMessage, setErrorMessage] = useState(""); // dynamic inline error text

const handleCreateAccount = async () => {
  // 🔄 Reset error state
  setShowError(false);
  setErrorMessage("");

  // ✅ Frontend validation (specific)
  if (!userName) {
    setShowError(true);
    setErrorMessage("* Username is required");
    return;
  }
  if (!email) {
    setShowError(true);
    setErrorMessage("* Email is required");
    return;
  }
  if (!phone) {
    setShowError(true);
    setErrorMessage("* Phone number is required");
    return;
  }
  if (!password) {
    setShowError(true);
    setErrorMessage("* Password is required");
    return;
  }
  if (!confirmPassword) {
    setShowError(true);
    setErrorMessage("* Please confirm your password");
    return;
  }
  if (password !== confirmPassword) {
    setShowError(true);
    setErrorMessage("* Passwords do not match");
    return;
  }
  if (!isChecked) {
    setShowError(true);
    setErrorMessage("* Please accept the terms & conditions");
    return;
  }

  // ✅ Proceed with API call
  try {
    const response = await fetch(`${API_BASE_URL}/api/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName,
        email,
        password,
        phoneNumber: phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // 🧾 Backend error message
      setShowError(true);
      setErrorMessage(`* ${data.message || "Registration failed"}`);
      return;
    }

    // ✅ Success → reset or navigate
    setShowError(false);
    setErrorMessage("");
    navigation.navigate("HeyScreen");
  } catch (err) {
    console.error("Registration error:", err);
    setShowError(true);
    setErrorMessage("* Unable to reach server. Please try again later.");
  }
};



return (
  <ScrollView
    contentContainerStyle={[
      styles.container,
      { backgroundColor: theme.background },
    ]}
  >
    {/* Header */}
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackWard width={10} height={16} color={theme.text} />
      </TouchableOpacity>
      <Text style={[styles.heading, { color: theme.text }]}>
        Create your account
      </Text>
    </View>

    {/* Input Fields */}
    <View style={styles.inputContainer}>
      {/* User Name */}
      <TextInput
        style={[
          styles.inputBox,
          {
            borderColor:
              showError && userName === ""
                ? theme.notification
                : focusedField === "userName"
                ? theme.radio
                : theme.buttondark,
            backgroundColor: theme.buttondark,
            color: theme.text,
          },
        ]}
        placeholder="User Name"
        placeholderTextColor={
          showError && userName === "" ? theme.notification : theme.textSecondary
        }
        value={userName}
        onChangeText={(text) => {
          setUserName(text);
          if (showError && text !== "") setShowError(false);
        }}
        onFocus={() => setFocusedField("userName")}
        onBlur={() => setFocusedField(null)}
      />

      {/* Email */}
      <TextInput
        style={[
          styles.inputBox,
          {
            borderColor:
              showError && email === ""
                ? theme.notification
                : focusedField === "email"
                ? theme.radio
                : theme.buttondark,
            backgroundColor: theme.buttondark,
            color: theme.text,
          },
        ]}
        placeholder="Email"
        placeholderTextColor={
          showError && email === "" ? theme.notification : theme.textSecondary
        }
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          if (showError && text !== "") setShowError(false);
        }}
        onFocus={() => setFocusedField("email")}
        onBlur={() => setFocusedField(null)}
        keyboardType="email-address"
      />

      {/* Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputBoxPassword,
            {
              borderColor:
                showError && password === ""
                  ? theme.notification
                  : focusedField === "password"
                  ? theme.radio
                  : theme.buttondark,
              backgroundColor: theme.buttondark,
              color: theme.text,
            },
          ]}
          placeholder="Password"
          placeholderTextColor={
            showError && password === ""
              ? theme.notification
              : theme.textSecondary
          }
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (showError && text !== "") setShowError(false);
          }}
          onFocus={() => setFocusedField("password")}
          onBlur={() => setFocusedField(null)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <EyeIcon
            color={
              showError && password === "" ? theme.notification : theme.radio
            }
            opacity={0.35}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputBoxPassword,
            {
              borderColor:
                showError && confirmPassword === ""
                  ? theme.notification
                  : focusedField === "confirmPassword"
                  ? theme.radio
                  : theme.buttondark,
              backgroundColor: theme.buttondark,
              color: theme.text,
            },
          ]}
          placeholder="Confirm Password"
          placeholderTextColor={
            showError && confirmPassword === ""
              ? theme.notification
              : theme.textSecondary
          }
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (showError && text !== "") setShowError(false);
          }}
          onFocus={() => setFocusedField("confirmPassword")}
          onBlur={() => setFocusedField(null)}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <EyeIcon
            color={
              showError && confirmPassword === ""
                ? theme.notification
                : theme.radio
            }
            opacity={0.35}
          />
        </TouchableOpacity>
      </View>
    </View>

    {/* Terms & Conditions + Error */}
    <View style={styles.termsErrorContainer}>
      <View style={styles.termsContainer}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              borderColor: showError && !isChecked
                ? theme.notification
                : theme.radio,
              backgroundColor: isChecked ? theme.radio : theme.background,
            },
          ]}
          onPress={() => setIsChecked(!isChecked)}
        >
          {isChecked && <Text style={{ color: theme.bttext }}>✓</Text>}
        </TouchableOpacity>

        <Text style={[styles.termsText, { color: theme.textSecondary }]}>
          Terms and Conditions
        </Text>
      </View>

<View style={styles.errorWrapper}>
  {showError && (
    <Text style={[styles.errorText, { color: theme.notification }]}>
      {errorMessage}
    </Text>
  )}
</View>

    </View>

    {/* Create Account Button */}
    <ButtonComp
      title="Create Account"
      onPress={handleCreateAccount}
      style={{ backgroundColor: theme.Button, marginTop: 30 }}
      textStyle={{ color: theme.bttext }}
    />

    {/* OR Continue with */}
    <View style={styles.orContainer}>
      <View
        style={[styles.line, { backgroundColor: theme.textSecondary }]}
      />
      <Text style={[styles.orText, { color: theme.textSecondary }]}>
        or Continue with
      </Text>
      <View
        style={[styles.line, { backgroundColor: theme.textSecondary }]}
      />
    </View>

    {/* Social Login */}
    <View style={styles.socialContainer}>
      <TouchableOpacity
        style={[styles.socialBox, { backgroundColor: theme.buttondark }]}
      >
        <GoogleIcon width={24} height={24} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.socialBox, { backgroundColor: theme.buttondark }]}
      >
        <AppleIcon width={24} height={24} />
      </TouchableOpacity>
    </View>

    {/* Already have account */}
    <TouchableOpacity
      style={{ flexDirection: "row", marginTop: 30 }}
      onPress={() => navigation.navigate("Login")}
    >
      <Text style={[styles.alreadyText, { color: theme.textSecondary }]}>
        Already have an account?{" "}
      </Text>
      <Text style={[styles.loginText, { color: theme.radio }]}>Log In</Text>
    </TouchableOpacity>
  </ScrollView>
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
    marginBottom: verticalScale(30),
    alignItems: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(4),
  },
  heading: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(25),
    lineHeight: moderateScale(28),
    color: "#121212",
    textAlign: "center",
  },
  inputContainer: { gap: verticalScale(15), marginTop: verticalScale(10) },
  inputBox: {
    width: scale(260),
    height: verticalScale(45),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    backgroundColor: "#E3E9F1CC",
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#223F61",
    paddingHorizontal: scale(15),
  },
  passwordContainer: { position: "relative", width: 290 },
  inputBoxPassword: {
    width: scale(260),
    height: verticalScale(45),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    backgroundColor: "#E3E9F1CC",
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#223F61",
    paddingHorizontal: scale(15),
  },

  eyeIcon: {
    position: "absolute",
    right: scale(20),
    top: "50%",
    transform: [{ translateY: -moderateScale(5) }],
  },

  termsErrorContainer: {
    width: scale(250),
    marginTop: verticalScale(15),
    alignItems: "flex-end",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: verticalScale(15)
  },

  checkbox: {
    width: scale(14),
    height: scale(14),
    borderWidth: 0.5,
    borderColor: "#223F61",
    borderRadius: scale(3),
    justifyContent: "center",
    alignItems: "center",

  },
  checkboxChecked: { backgroundColor: "#223F61" },
  tick: { color: "#FFFFFF", fontSize: moderateScale(10), fontWeight: "700" },
  termsText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(12),
    color: "#223F61",
    textDecorationLine: "underline",
    textDecorationColor: "#223F61",
  },
  errorText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(20),
    color: "#E74C3C",
    marginTop: verticalScale(6),
    textAlign: "right",
    width: "100%",
  },
  errorWrapper: {
    height: verticalScale(20), // ⬅ keeps layout stable
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "80%",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
    gap: scale(10),
  },
  line: {
    width: scale(40),
    height: 0,
    borderWidth: 1,
    opacity: 0.25,
    borderColor: "#121212",
    backgroundColor: "rgba(18, 18, 18, 0.25)",
  },
  orText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    color: "#121212",
    opacity: 0.44,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: scale(20),
    marginTop: verticalScale(15),
  },
  socialBox: {
    width: scale(88),
    height: verticalScale(42),
    borderRadius: scale(10),
    backgroundColor: "#FBFDFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4.4,
    elevation: 4,
  },
  alreadyText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(14),
    color: "#121212",
    opacity: 0.44,
    marginTop: verticalScale(12),
  },
  loginText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    color: "#223F61",
    marginTop: verticalScale(10),
  },
  focusedInput: {
    borderColor: "#223F61",
    borderWidth: 1.5,
    backgroundColor: "#FBFDFF",
  },
});

export default CreateAccount;
