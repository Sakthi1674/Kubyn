import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, useColorScheme, ScrollView } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import HandPointer from "../../assets/icons/HandPointer";
import SearchIcon from "../../assets/icons/SearchIcon";
import Brain from "../../assets/icons/Brain";
import PlusIcon from "../../assets/icons/PlusIcon";
import UpdatedIcon from "../../assets/icons/UpdateIcon";
import Protect from "../../assets/icons/Protect";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
  Notification: undefined;

};
const MyCommunity = () => {
      const scheme = useColorScheme();
      const theme = colors[scheme === "dark" ? "dark" : "light"];
      const navigation = useNavigation<NavigationProp<any>>();
  return (
        <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
    <View style={[styles.container,{backgroundColor:theme.background}]}>
      {/* 🔹 Header Row */}
      <View style={styles.header}>
        <Text style={[styles.title,{color:theme.text}]}>My Community</Text>
                 <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
                   <NotificationBell fill={theme.text} />
        </TouchableOpacity>
      </View>

      {/* 🔹 Benchmarks Text */}
      <Text style={[styles.benchmarks,{color:theme.text}]}>Benchmarks</Text>

      {/* 🔹 2x2 Box Grid */}
      <View style={styles.grid}>
        {/* Box 1 */}
        
        <ImageBackground
          source={require("../../assets/images/DashBoard/TheFirstNumberTrap.png")}
          style={styles.box1}
          imageStyle={styles.imageStyle}
        >
          <Text style={[styles.boxText, styles.whiteText]}>The First</Text>
          <Text style={[styles.boxText, styles.whiteText]}>Number Trap</Text>
        </ImageBackground>

        {/* Box 2 */}
        <ImageBackground
          source={require("../../assets/images/DashBoard/TheConfidenceIllusion.png")}
          style={styles.box2}
          imageStyle={styles.imageStyle}
        >
          <Text style={[styles.boxText, styles.blueText]}>
            The Confidence Illusion
          </Text>
        </ImageBackground>

        {/* Box 3 */}
        <ImageBackground
          source={require("../../assets/images/DashBoard/TheSurplusMirage.png")}
          style={styles.box3}
          imageStyle={styles.imageStyle}
        >
          <Text style={[styles.boxText, styles.blueText]}>The Surplus</Text>
          <Text style={[styles.boxText, styles.blueText]}>Mirage</Text>
        </ImageBackground>

        {/* Box 4 */}
        <ImageBackground
          source={require("../../assets/images/DashBoard/TheLossAversionBias.png")}
          style={styles.box4}
          imageStyle={styles.imageStyle}
        >
          <Text style={[styles.boxText, styles.whiteText]}>The Loss</Text>
          <Text style={[styles.boxText, styles.whiteText]}>
            Aversion Bias
          </Text>
        </ImageBackground>
      </View>

      {/* 🔹 See More + Collective Nudges Row */}
      <View>
        <Text style={[styles.seeMoreText,{color:theme.Button}]}>See More</Text>
      </View>

      <Text style={[styles.collectiveText,{color:theme.text}]}>Collective Nudges</Text>

      <View style={{ marginTop: 10 }}>
        <View style={styles.debtContainer}>
          <HandPointer />
          <View style={styles.debtTextContainer}>
            <Text style={styles.debtTitle}>Debt Management</Text>
            <Text style={styles.debtSubtitle}>You’ve achieved 82% of your goal</Text>
          </View>
        </View>

        <View style={styles.debtContainer}>
          <HandPointer />
          <View style={styles.debtTextContainer}>
            <Text style={styles.debtTitle}>Debt Management</Text>
            <Text style={styles.debtSubtitle}>You’ve achieved 82% of your goal</Text>
          </View>
        </View>
      </View>

        <Text style={[styles.seeMoreText,{color:theme.Button}]}>See More</Text>
    </View>
    </ScrollView>
  );
};

export default MyCommunity;

const styles = StyleSheet.create({
    scrollContent: {
    paddingBottom: scale(70),
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: verticalScale(35),
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: moderateScale(16),
    color: "rgba(18, 18, 18, 1)",
  },
  benchmarks: {
    marginTop: verticalScale(30),
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(12),
    color: "rgba(18, 18, 18, 1)",
    textAlign: "left",
  },
 grid: {
  width: scale(330), // overall layout width (tweak if needed)
  height: verticalScale(235), // overall layout height
  alignSelf: "center",
  position: "relative",
  marginTop: verticalScale(20),
},

imageStyle: {
  borderRadius: moderateScale(20),
},

// top-left small box
box1: {
  position: "absolute",
  top: 0,
  left: 0,
  width: scale(155),
  height: verticalScale(80),
  borderRadius: moderateScale(20),
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: scale(15),
  backgroundColor: "rgba(61, 89, 121, 1)",
  shadowColor: "rgba(34, 63, 97, 0.25)",
  shadowOffset: { width: 0, height: verticalScale(4) },
  shadowOpacity: 1,
  shadowRadius: scale(4),
},

// top-right tall box
box2: {
  position: "absolute",
  top: 0,
  right: 0,
  width: scale(155),
  height: verticalScale(150),
  borderRadius: moderateScale(20),
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: scale(15),
  backgroundColor: "rgba(227, 233, 241, 1)",
  shadowColor: "rgba(34, 63, 97, 0.25)",
  shadowOffset: { width: 0, height: verticalScale(4) },
  shadowOpacity: 1,
  shadowRadius: scale(4),
},

// bottom-left tall box
box3: {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: scale(155),
  height: verticalScale(150),
  borderRadius: moderateScale(20),
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: scale(15),
  backgroundColor: "rgba(227, 233, 241, 0.8)",
  shadowColor: "rgba(34, 63, 97, 0.25)",
  shadowOffset: { width: 0, height: verticalScale(4) },
  shadowOpacity: 1,
  shadowRadius: scale(4),
},

// bottom-right small box
box4: {
  position: "absolute",
  bottom: 0,
  right: 0,
  width: scale(155),
  height: verticalScale(80),
  borderRadius: moderateScale(20),
  overflow: "hidden",
  justifyContent: "flex-end",
  padding: scale(15),
  backgroundColor: "rgba(61, 89, 121, 1)",
  shadowColor: "rgba(34, 63, 97, 0.25)",
  shadowOffset: { width: 0, height: verticalScale(4) },
  shadowOpacity: 1,
  shadowRadius: scale(4),
},

  // 🔹 Text styles inside boxes
  boxText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(26),
  },
  whiteText: {
    color: "rgba(255, 255, 255, 1)",
  },
  blueText: {
    color: "rgba(34, 63, 97, 1)",
  },
  seeMoreText: {
    alignSelf: "flex-end",
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: moderateScale(14),
    lineHeight: verticalScale(14),
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.92,
    marginTop: verticalScale(10),
  },
  collectiveText: {
    marginTop: verticalScale(10),
    alignSelf: "flex-start",
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: moderateScale(12),
    lineHeight: verticalScale(12),
    color: "rgba(18, 18, 18, 1)",
  },
  debtContainer: {
    marginTop: verticalScale(8),
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(34, 63, 97, 1)",
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    gap: scale(20),
  },
  handIcon: {
    width: scale(18),
    height: scale(18),
    resizeMode: "contain",
    marginRight: scale(10),
    marginTop: verticalScale(2),
  },
  debtTextContainer: {
    flex: 1,
  },
  debtTitle: {
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontStyle: "italic", // simulating 85 Heavy Oblique
    fontSize: moderateScale(12),
    lineHeight: verticalScale(20),
    color: "rgba(251, 253, 255, 1)",
  },
  debtSubtitle: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontStyle: "italic", // simulating 55 Oblique
    fontSize: moderateScale(10),
    lineHeight: verticalScale(17),
    color: "rgba(251, 253, 255, 1)",
  },
  seeMoreTextBottom: {
    alignSelf: "flex-end",
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(16),
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.92,
    marginTop: verticalScale(20),
  },
  bottomBar: {
    position: "absolute",
    bottom: verticalScale(20),
    left: scale(20),
    right: scale(20),
    flexDirection: "row",
    backgroundColor: "rgba(18, 18, 18, 1)",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: moderateScale(25),
    height: verticalScale(55),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: scale(6),
    elevation: 5,
  },
  centerButton: {
    backgroundColor: "rgba(18, 18, 18, 1)",
    width: scale(60),
    height: scale(60),
    borderRadius: moderateScale(55),
    alignItems: "center",
    justifyContent: "center",
    bottom: verticalScale(40),
    borderColor: "rgba(244, 242, 239, 1)",
    borderWidth: scale(5),
  },
  plus: {
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    backgroundColor: "#FBFDFF",
    borderRadius: moderateScale(25),
    width: scale(44),
    height: scale(44),
    alignItems: "center",
    justifyContent: "center",
  },
});