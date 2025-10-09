import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonComp from "../../components/common/ButtonComp";
import BackWard from "../../assets/icons/BackWard";
import EyeIcon from "../../assets/icons/EyeIcon";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

type RootStackParamList = {
    ForgetPasswordOtp: undefined;
    PasswordReset: undefined;
    ForgetPasswordSuccess: undefined;
};
 
const PasswordReset: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
 
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showError, setShowError] = useState(false);
 
    const isFieldEmpty = (field: string) => field === "";
 
    const handleVerify = () => {
        if (!password || !confirmPassword) {
            setShowError(true);
            return;
        }
        setShowError(false);
        navigation.navigate("ForgetPasswordSuccess");
    };
 
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                </TouchableOpacity>
                <Text style={styles.heading}>Password Reset</Text>
            </View>
 
            <Text style={styles.instructionText}>
                Your new password must be different from previously used passwords
            </Text>
 
            {/* Password Field */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[
                        styles.inputBoxPassword,
                        isFieldEmpty(password) && showError && { borderColor: "rgba(231, 76, 60, 0.35)" },
                    ]}
                    placeholder="Password"
                    placeholderTextColor={
                        isFieldEmpty(password) && showError
                            ? "rgba(231, 76, 60, 0.35)"
                            : "rgba(34, 63, 97, 0.35)"
                    }
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                    <EyeIcon
                        color={isFieldEmpty(password) && showError ? "rgba(231, 76, 60, 0.35)" : "#223F61"}
                    />
                </TouchableOpacity>
            </View>
 
            {/* Confirm Password Field */}
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[
                        styles.inputBoxPassword,
                        isFieldEmpty(confirmPassword) && showError && { borderColor: "rgba(231, 76, 60, 0.35)" },
                    ]}
                    placeholder="Confirm Password"
                    placeholderTextColor={
                        isFieldEmpty(confirmPassword) && showError
                            ? "rgba(231, 76, 60, 0.35)"
                            : "rgba(34, 63, 97, 0.35)"
                    }
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <EyeIcon
                        color={
                            isFieldEmpty(confirmPassword) && showError ? "rgba(231, 76, 60, 0.35)" : "#223F61"
                        }
                    />
                </TouchableOpacity>
            </View>
 <View style={styles.errorWrapper}>
            {showError && (
                <Text style={styles.errorText}>* Please fill out all required details</Text>
            )}
 </View>
            {/* Verify Button */}
            <ButtonComp
                title="Confirm"
                onPress={handleVerify}
                style={{ backgroundColor: "#223F61", marginTop: 50 }}
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
    },
    headerContainer: {
        width: "100%",
        position: "relative",
    },
    backButton: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(2)
    },
    heading: {
        fontFamily: "Kollektif-Bold",
        fontWeight: "700",
        fontSize: 20,
        lineHeight: 20,
        color: "#121212",
        marginBottom: scale(27),
        textAlign:"center",
    },
        errorWrapper: {
        height: verticalScale(20), // ⬅ keeps layout stable
        justifyContent: "flex-end",
        alignItems: "flex-end",
        width: "100%",
        marginBottom: verticalScale(10),
    },
    instructionText: {
        fontFamily: "Avenir LT Std 45 Book",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: 0,
        color: "rgba(18, 18, 18, 0.6)",
        textAlign: "left",
        marginBottom:scale(20),
    },
    passwordContainer: { position: "relative", width: "100%", marginTop: 15 },
    inputBoxPassword: {
        width: "100%",
        height: 54,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E3E9F1CC",
        backgroundColor: "#E3E9F1CC",
        fontFamily: "Avenir LT Std 65 Medium",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 20,
        color: "#223F61",
        paddingHorizontal: 15,
    },
    eyeIcon: { position: "absolute", right: 15, top: 15, opacity: 0.23 },
    errorText: {
        fontFamily: "Avenir LT Std",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 20,
        color: "rgba(231, 76, 60, 0.35)",
        marginTop: 6,
        textAlign: "right",
        width: "100%",
    },
});
 
export default PasswordReset;
 
 