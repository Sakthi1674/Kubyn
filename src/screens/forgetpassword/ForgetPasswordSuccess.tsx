import React from "react";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";


const ForgetPasswordSuccess: React.FC = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? colors.dark : colors.light;

  return (
    <View style={[styles.container, { backgroundColor: theme.Button }]}>
      {/* Success Image */}
      <Image
        source={require("../../assets/images/onboardimg/successpage.png")}
        style={styles.image}
      />

      {/* Success Text */}
      <Text style={[styles.successText, { color: theme.bttext }]}>
        Successful!
      </Text>

      {/* Subtitle */}
      <Text style={[styles.subText, { color: theme.bttext, opacity: 0.7 }]}>
        Your password has been
      </Text>
      <Text style={[styles.subText, { color: theme.bttext, opacity: 0.7 }]}>
        changed successfully
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
    justifyContent: "center",
  },
  image: {
    width: scale(224),
    height: verticalScale(210),
    marginBottom: verticalScale(30),
    resizeMode: "contain",
    alignItems: "center",
    marginRight: scale(50), // remove during animation
  },
  successText: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(36),
    marginBottom: verticalScale(10),
    textAlign: "center",
  },
  subText: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "400",
    fontSize: moderateScale(20),
    textAlign: "center",
  },
});

export default ForgetPasswordSuccess;
