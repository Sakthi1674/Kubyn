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
  CreateAccount: undefined;
  Login: undefined;
};

const CreateAccount: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showError, setShowError] = useState(false);

  const handleCreateAccount = () => {
    if (!userName || !email || !password || !confirmPassword || !isChecked) {
      setShowError(true);
      return;
    }
    setShowError(false);
    console.log("Account Created Successfully!");
  };

  const isFieldEmpty = (field: string) => field === "";

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
        <Text style={styles.heading}>Create your account</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* User Name */}
        <TextInput
          style={[
            styles.inputBox,
            {
              borderColor: showError && userName === ""
                ? "rgba(231,76,60,0.35)"   
                : focusedField === "userName"
                  ? "rgba(34,63,97,0.35)"     
                  : "#E3E9F1CC",             
              backgroundColor: showError && userName === ""
                ? "#FBFDFF"                
                : "#E3E9F1CC",              
            },
          ]}
          placeholder="User Name"
          placeholderTextColor={
            showError && userName === ""
              ? "rgba(231,76,60,0.35)"
              : "rgba(34,63,97,0.35)"
          }
          value={userName}
          onChangeText={(text) => {
            setUserName(text);
            if (showError && text !== "") setShowError(false); // reset error after typing
          }}
          onFocus={() => setFocusedField("userName")}
          onBlur={() => setFocusedField(null)}
        />

        {/* Email */}
        <TextInput
          style={[
            styles.inputBox,
            {
              borderColor: showError && email === ""
                ? "rgba(231,76,60,0.35)"    // Error
                : focusedField === "email"
                  ? "rgba(34,63,97,0.35)"     // Focus
                  : "#E3E9F1CC",              // Default
              backgroundColor: showError && email === ""
                ? "#FBFDFF"                 // Error background
                : "#E3E9F1CC",              // Default/focus background
            },
          ]}
          placeholder="Email"
          placeholderTextColor={
            showError && email === ""
              ? "rgba(231,76,60,0.35)"
              : "rgba(34,63,97,0.35)"
          }
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (showError && text !== "") setShowError(false); // reset error after typing
          }}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          keyboardType="email-address"
        />

        {/* Password Field */}
        {/* Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.inputBoxPassword,
              {
                borderColor: showError && password === ""
                  ? "rgba(231,76,60,0.35)"    // Error
                  : focusedField === "password"
                    ? "rgba(34,63,97,0.35)"     // Focus
                    : "#E3E9F1CC",              // Default
                backgroundColor: showError && password === ""
                  ? "#FBFDFF"                 // Error background
                  : "#E3E9F1CC",              // Default/focus background
              },
            ]}
            placeholder="Password"
            placeholderTextColor={
              showError && password === ""
                ? "rgba(231,76,60,0.35)"
                : "rgba(34,63,97,0.35)"
            }
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (showError && text !== "") setShowError(false); // reset error after typing
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
              color={showError && password === ""
                ? "rgba(231,76,60,0.35)"
                : "#223F61"}
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
                borderColor: showError && confirmPassword === ""
                  ? "rgba(231,76,60,0.35)"    // Error
                  : focusedField === "confirmPassword"
                    ? "rgba(34,63,97,0.35)"     // Focus
                    : "#E3E9F1CC",              // Default
                backgroundColor: showError && confirmPassword === ""
                  ? "#FBFDFF"                 // Error background
                  : "#E3E9F1CC",              // Default/focus background
              },
            ]}
            placeholder="Confirm Password"
            placeholderTextColor={
              showError && confirmPassword === ""
                ? "rgba(231,76,60,0.35)"
                : "rgba(34,63,97,0.35)"
            }
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (showError && text !== "") setShowError(false); // reset error after typing
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
              color={showError && confirmPassword === ""
                ? "rgba(231,76,60,0.35)"
                : "#223F61"}
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
              isChecked && styles.checkboxChecked,
              showError && !isChecked && {
                borderColor: "#E74C3C",
              },
            ]}
            onPress={() => setIsChecked(!isChecked)}
          >
            {isChecked && <Text style={styles.tick}>✓</Text>}
          </TouchableOpacity>

          <Text style={styles.termsText}>Terms and Conditions</Text>
        </View>

        <View style={styles.errorWrapper}>
          {showError && (
            <Text style={styles.errorText}>
              * Please fill out all required details
            </Text>
          )}
        </View>
      </View>

      {/* Create Account Button */}
      <ButtonComp
        title="Create Account"
        onPress={handleCreateAccount}
        style={{ backgroundColor: "#223F61", marginTop: 30 }}
        textStyle={{ color: "#FAF8F5" }}
      />

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

      {/* Already have account */}
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 30 }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.alreadyText}>Already have an account? </Text>
        <Text style={styles.loginText}>Log In</Text>
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
    backgroundColor:"rgba(18, 18, 18, 0.25)",
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