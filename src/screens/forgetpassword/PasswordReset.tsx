import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  useColorScheme,
} from "react-native";
import {
  useNavigation,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import EyeIcon from "../../assets/icons/EyeIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";


// Navigation types
type RootStackParamList = {
  ForgetPasswordOtp: { method: "sms" | "email"; contact: string };
  PasswordReset: { phoneNumber: string };
  ForgetPasswordSuccess: undefined;
};

type PasswordResetRouteProp = RouteProp<RootStackParamList, "PasswordReset">;
type PasswordResetNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PasswordReset"
>;

const PasswordReset: React.FC = () => {
  const navigation = useNavigation<PasswordResetNavigationProp>();
  const route = useRoute<PasswordResetRouteProp>();
  const { phoneNumber } = route.params;

  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const validateFields = () => {
    if (!password || !confirmPassword) {
      setShowError(true);
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return false;
    }
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleConfirm = async () => {
    if (!validateFields()) return;
    setShowError(false);

    try {
      const response = await fetch("http://10.0.2.2:5000/update-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          newPassword: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigation.navigate("ForgetPasswordSuccess");
      } else {
        Alert.alert("Error", data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      Alert.alert("Error", "Server error. Try again.");
    }
  };

  return (
    <View
      style={[
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
          <BackWard
            width={scale(10)}
            height={verticalScale(16)}
            color={theme.text}
          />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.text }]}>
          Password Reset
        </Text>
      </View>

      <Text
        style={[
          styles.instructionText,
          { color: theme.textSecondary },
        ]}
      >
        Your new password must be different from previously used passwords
      </Text>

      {/* Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputBoxPassword,
            {
              backgroundColor: theme.container,
              borderColor:
                !password && showError ? theme.notification : theme.container,
              color: theme.text,
            },
          ]}
          placeholder="Password"
          placeholderTextColor={
            !password && showError
              ? theme.notification
              : "rgba(34, 63, 97, 0.35)"
          }
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <EyeIcon
            color={
              !password && showError ? theme.notification : theme.radio
            }
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={[
            styles.inputBoxPassword,
            {
              backgroundColor: theme.container,
              borderColor:
                !confirmPassword && showError
                  ? theme.notification
                  : theme.container,
              color: theme.text,
            },
          ]}
          placeholder="Confirm Password"
          placeholderTextColor={
            !confirmPassword && showError
              ? theme.notification
              : "rgba(34, 63, 97, 0.35)"
          }
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        >
          <EyeIcon
            color={
              !confirmPassword && showError
                ? theme.notification
                : theme.radio
            }
          />
        </TouchableOpacity>
      </View>

      {/* Error message */}
      <View style={styles.errorWrapper}>
        {showError && (
          <Text style={[styles.errorText, { color: theme.notification }]}>
            * Please fill out all required fields
          </Text>
        )}
      </View>

      {/* Confirm Button */}
      <ButtonComp
        title="Confirm"
        onPress={handleConfirm}
        style={{
          backgroundColor: theme.Button,
          marginTop: verticalScale(60),
        }}
        textStyle={{ color: theme.bttext }}
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
    position: "relative",
    marginBottom: verticalScale(27),
    alignItems: "center",
  },
  backButton: { position: "absolute", left: scale(0), top: verticalScale(0) },
  heading: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(20),
    lineHeight: moderateScale(20),
    textAlign: "center",
  },
  instructionText: {
    fontFamily: "Avenir LT Std 45 Book",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(22),
    marginBottom: verticalScale(20),
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
    marginTop: verticalScale(15),
  },
  inputBoxPassword: {
    width: "100%",
    height: verticalScale(54),
    borderRadius: scale(10),
    borderWidth: scale(1),
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(20),
    paddingHorizontal: scale(15),
  },
  eyeIcon: {
    position: "absolute",
    right: scale(20),
    top: "50%",
    transform: [{ translateY: -moderateScale(10) }],
    justifyContent: "center",
    alignItems: "center",
  },
  errorWrapper: {
    height: verticalScale(20),
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    marginBottom: verticalScale(10),
  },
  errorText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(20),
    textAlign: "right",
    width: "100%",
  },
});

export default PasswordReset;
