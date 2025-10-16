import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import ButtonComp from "../../components/common/ButtonComp";
import GoogleIcon from "../../assets/icons/GoogleIcon";
import AppleIcon from "../../assets/icons/Ios";
import EyeIcon from "../../assets/icons/EyeIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
  NumOtp: undefined;
  Login: undefined;
  CreateAccount: undefined;
  LoginNumOtp: undefined;
  ForgetPassword: { phoneNumber: string };
};

const Login: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showRememberError, setShowRememberError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);


  const handleLogin = async () => {
    const digitsOnly = phone.replace(/\s/g, "");

    if (digitsOnly.length !== 10 || !password) {
      setErrorMessage("* Enter valid phone and password");
      return;
    }

    try {
      const response = await fetch("http://10.0.2.2:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: digitsOnly, password }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login success:", data.user);
        navigation.navigate("LoginNumOtp"); // or dashboard
      } else {
        setErrorMessage(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Server error");
    }
  };

  const handlePhoneChange = (text: string) => {
    // Remove non-digit characters
    let digits = text.replace(/\D/g, "");

    // Limit to 10 digits
    if (digits.length > 10) digits = digits.slice(0, 10);

    // Format as 5 + 5 digits
    if (digits.length > 5) digits = digits.slice(0, 5) + " " + digits.slice(5);

    setPhone(digits);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackWard width={10} height={16} color="#223F61" />
        </TouchableOpacity>
        <Text style={styles.heading}>Login</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* Phone Number */}
        {/* Phone Number */}
        <TextInput
          style={[
            styles.inputBox,
            {
              borderColor: showPhoneError
                ? "rgba(231,76,60,0.35)"       // Error
                : focusedField === "phone"
                  ? "rgba(34,63,97,0.35)"        // Focus
                  : "#E3E9F1CC",                 // Default
              backgroundColor: showPhoneError
                ? "#FBFDFF"                     // Error background
                : "#E3E9F1CC",                  // Default
            },
          ]}
          placeholder="Phone Number"
          placeholderTextColor={
            showPhoneError ? "rgba(231,76,60,0.35)" : "rgba(34,63,97,0.35)"
          }
          keyboardType="number-pad"
          value={phone}
          onChangeText={(text) => {
            handlePhoneChange(text);
            if (showPhoneError && text.replace(/\s/g, "").length > 0) setShowPhoneError(false);
          }}
          onFocus={() => setFocusedField("phone")}
          onBlur={() => setFocusedField(null)}
          maxLength={11}
        />

        {/* Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.inputBoxPassword,
              {
                borderColor: showPasswordError
                  ? "rgba(231,76,60,0.35)"      // Error
                  : focusedField === "password"
                    ? "rgba(34,63,97,0.35)"       // Focus
                    : "#E3E9F1CC",                // Default
                backgroundColor: showPasswordError
                  ? "#FBFDFF"                    // Error background
                  : "#E3E9F1CC",                 // Default/focus background
              },
            ]}
            placeholder="Password"
            placeholderTextColor={
              showPasswordError ? "rgba(231,76,60,0.35)" : "rgba(34,63,97,0.35)"
            }
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (showPasswordError && text.length > 0) setShowPasswordError(false);
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
              color={showPasswordError ? "rgba(231,76,60,0.35)" : "#223F61"}
              opacity={0.35}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Remember Me */}
      <View style={styles.termsErrorContainer}>
        <View style={styles.termsContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <Text style={styles.tick}>✓</Text>}
          </TouchableOpacity>
          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <View style={{ minHeight: verticalScale(20), width: "100%" }}>
          {errorMessage !== "" && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
        </View>
      </View>


      {/* Log In Button */}
      <ButtonComp
        title="Log In"
        onPress={handleLogin}
        style={{ backgroundColor: "#223F61", marginTop: 30 }}
        textStyle={{ color: "#FAF8F5" }}
      />


      <TouchableOpacity
        onPress={async () => {
          const digitsOnly = phone.replace(/\s/g, "");
          if (digitsOnly.length !== 10) {
            setErrorMessage("* Enter valid phone number before continuing");
            return;
          }

          try {
            const response = await fetch("http://10.0.2.2:5000/api/forget-password", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phoneNumber: digitsOnly }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
              // ✅ phone found → go to ForgetPassword
              navigation.navigate("ForgetPassword", { phoneNumber: digitsOnly });
            } else {
              // ❌ not found
              setErrorMessage("Phone number not found");
            }
          } catch (err) {
            console.error("Error verifying phone:", err);
            setErrorMessage("Server error, try again");
          }
        }}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* OR Continue with */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or Continue with</Text>
        <View style={styles.line} />
      </View>

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBox}>
          <GoogleIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBox}>
          <AppleIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Create Account */}
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 60 }}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.createText}>Create a new account? </Text>
        <Text style={styles.signUpText}>Sign up</Text>
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
    marginBottom: verticalScale(40),
    alignItems: "center",
    position: "relative",
  },

  backButton: {
    position: "absolute",
    left: scale(8),
    top: verticalScale(8),
  },

  heading: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(32),
    lineHeight: moderateScale(36),
    color: "#121212",
  },

  inputContainer: {
    gap: verticalScale(15),
    marginTop: verticalScale(20),
    alignItems: "center",
  },

  inputBox: {
    width: scale(260),
    height: verticalScale(54),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    backgroundColor: "#E3E9F1CC",
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    color: "#223F61",
    paddingHorizontal: scale(15),

  },

  passwordContainer: {
    position: "relative",
    width: scale(260),
    alignItems: "center",
  },

  inputBoxPassword: {
    width: "100%",
    height: verticalScale(54),
    borderRadius: scale(10),
    borderWidth: 1,
    borderColor: "#E3E9F1CC",
    backgroundColor: "#E3E9F1CC",
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
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
    width: scale(260),
    marginTop: verticalScale(15),
    alignItems: "flex-end",
  },

  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: verticalScale(5),
  },

  checkbox: {
    width: scale(14),
    height: scale(14),
    borderWidth: 0.5,
    borderColor: "#223F61",
    borderRadius: scale(3),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(8),
  },

  checkboxChecked: { backgroundColor: "#223F61" },

  tick: {
    color: "#FFFFFF",
    fontSize: moderateScale(8),
    fontWeight: "700",
  },

  rememberText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    color: "#223F61",
    opacity: 0.44,
  },

  errorText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: moderateScale(20),
    color: "#E74C3C",
    textAlign: "right",
    width: "100%",
  },

  forgotText: {
    fontFamily: "Avenir LT Std 85 Heavy",
    fontWeight: "700",
    fontSize: moderateScale(14),
    color: "rgba(34, 63, 97, 0.72)",
    marginTop: verticalScale(17),
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(50),
    gap: scale(10),
  },

  line: {
    width: scale(38),
    height: 0,
    borderWidth: 1,
    opacity: 0.25,
    borderColor: "#121212",
  },

  orText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(16),
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
    shadowOffset: { width: scale(1), height: verticalScale(1) },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(4.4),
    elevation: 4,
  },

  createText: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(14),
    color: "#121212",
    opacity: 0.44,

  },

  signUpText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    color: "#223F61",

  },
});

export default Login;