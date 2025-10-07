import React from "react";
import { View, Text, StyleSheet, Image,useColorScheme } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonComp from "./../../components/common/ButtonComp";
import colors from "../../theme/color";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  NumVerify: undefined; // ✅ added this
};




const WelcomePage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || "light"];

  const goToHome = () => {
    navigation.navigate("Home");
  };

  const goToNumVerify = () => {
    navigation.navigate("NumVerify");
  };

  return (
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      <View style={styles.textContainer}>
        {/* Welcome to (same line) */}
        <Text style={styles.welcomeLine}>
            <Text style={[styles.welcome, { color: theme.text }]}>Welcome </Text>
          <Text style={[styles.to, { color: theme.text }]}>to</Text>
        </Text>

        {/* Kubyn separate, same font */}
         <Text style={[styles.kubyn, { color: theme.text }]}>Kubyn</Text>

        <Text style={[styles.description, { color: theme.text }]}>
          Plan cash. Track goals. Master your money.
        </Text>
      </View>

      <Image
        source={require("../../assets/images/onboardimg/wingedkuboo.png")} // 👈 your image path
        style={styles.image}
        resizeMode="contain"
      />

      <ButtonComp
        title="Log in"
        onPress={goToHome}
        style={{
          backgroundColor:theme.Button
        }}
        textStyle={{
          color: theme.bttext, 
          fontWeight: '700',
        }}

      />

      {/* Create Account button → NumVerify */}
      <ButtonComp
        title="Create Account"
        onPress={goToNumVerify} // ✅ updated handler
        style={{
          backgroundColor: theme.buttondark,
          marginTop: verticalScale(14),
        }}
        textStyle={{
          color: theme.text,
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: scale(52),
    alignItems: "center",
    paddingTop: verticalScale(66),
  },
  textContainer: {
    paddingRight: scale(42)
  },
  welcomeLine: {
    flexDirection: "row",
  },
  welcome: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(40),
    color: "#223F61",
  },
  to: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(40),
    color: "#121212",
  },
  kubyn: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(24),
    lineHeight: 40,
    color: "#121212",
    marginBottom: verticalScale(34),
  },
  description: {
    fontFamily: "Avenir LT Std 85 Heavy",
    fontWeight: "700",
    fontSize: moderateScale(20),
    lineHeight: 35,
    color: "#121212",
  },
  buttonContainer: {
  },
  // Image styles
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: scale(273),
    height: verticalScale(173),
    marginTop: verticalScale(109),
  },

});

export default WelcomePage;