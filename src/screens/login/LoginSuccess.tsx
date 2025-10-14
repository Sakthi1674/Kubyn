import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

// Replace this with your actual success image
 
const LoginSuccess: React.FC = () => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image source={require("../../assets/images/onboardimg/successpage.png")} style={styles.image} />
 
            {/* Successful! */}
            <Text style={styles.successText}>Successful!</Text>
 
            {/* Two-Factor Authentication Successful */}
            <Text style={styles.subText}>
                Two - Factor
            </Text>
            <Text style={styles.subText}>
               Authentication Successful
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:scale(150),
    backgroundColor: "#223F61",
    paddingHorizontal: scale(40),
    alignItems:"center"
  },
  image: {
    width: scale(224),
    height: verticalScale(210),
    marginBottom: verticalScale(30),
    resizeMode: "contain",
    alignItems: "center",
    marginRight:scale(50), //remove during animation
  },
  successText: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(36),
    color: "#FAF8F5",
    marginBottom: verticalScale(10),
  },
  subText: {
    fontFamily: "Kollektif-Regular",
    fontWeight: "400",
    fontSize: moderateScale(20),
    color: "#FAF8F5",
    opacity: 0.58,
    textAlign: "center",
  },
});

 
export default LoginSuccess;
 
 