import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Introduction: undefined;
};
const LoginSuccess: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
 const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      // 👇 Change "Home" to the screen you want to go after success
      navigation.navigate("Introduction");
    }, 1000); // 2000ms = 2 seconds

    // cleanup
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Image */}
      <Image
        source={require("../../assets/images/onboardimg/successpage.png")}
        style={styles.image}
      />

      {/* Successful! */}
      <Text style={[styles.successText, { color: theme.Button }]}>Successful!</Text>

      {/* Two-Factor Authentication Successful */}
      <Text style={[styles.subText, { color: theme.textSecondary }]}>
        Two - Factor
      </Text>
      <Text style={[styles.subText, { color: theme.textSecondary }]}>
        Authentication Successful
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(150),
    paddingHorizontal: scale(40),
    alignItems: "center",
  },
  image: {
    width: scale(224),
    height: verticalScale(210),
    marginBottom: verticalScale(30),
    resizeMode: "contain",
    alignItems: "center",
  },
  successText: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(36),
    marginBottom: verticalScale(10),
  },
  subText: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "400",
    fontSize: moderateScale(20),
    opacity: 0.58,
    textAlign: "center",
  },
});

export default LoginSuccess;
