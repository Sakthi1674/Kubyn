import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import HandPointer from "../../assets/icons/HandPointer";
import SearchIcon from "../../assets/icons/SearchIcon";
import Brain from "../../assets/icons/Brain";
import PlusIcon from "../../assets/icons/PlusIcon";
import UpdatedIcon from "../../assets/icons/UpdateIcon";
import Protect from "../../assets/icons/Protect";
import { verticalScale } from "react-native-size-matters";

const MyCommunity = () => {
  return (
    <View style={styles.container}>
      {/* 🔹 Header Row */}
      <View style={styles.header}>
        <Text style={styles.title}>My Community</Text>
        <NotificationBell />
      </View>

      {/* 🔹 Benchmarks Text */}
      <Text style={styles.benchmarks}>Benchmarks</Text>

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
      <View style={styles.bottomTextContainer}>
        <Text style={styles.seeMoreText}>See More</Text>
      </View>

      <Text style={styles.collectiveText}>Collective Nudges</Text>

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
          <Text style={styles.debtTitle}>Savings</Text>
          <Text style={styles.debtSubtitle}>You’ve achieved 64% of your goal</Text>
        </View>
      </View>

      <Text style={styles.seeMoreTextBottom}>See More</Text>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.star}>
          <SearchIcon width={30} height={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Brain />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton}>
          <TouchableOpacity style={styles.plus}>
            <PlusIcon width={30} height={30}/>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity>
          <UpdatedIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <Protect width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCommunity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: 16,
    color: "rgba(18, 18, 18, 1)",
  },
  benchmarks: {
    marginTop: 30,
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    color: "rgba(18, 18, 18, 1)",
    textAlign: "left",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  imageStyle: {
    borderRadius: 20,
  },

  // Box styles
  box1: {
    width: 161,
    height: 139,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(61, 89, 121, 1)",
    shadowColor: "rgba(34, 63, 97, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  box2: {
    width: 161,
    height: 198,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(227, 233, 241, 1)",
    shadowColor: "rgba(34, 63, 97, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    marginBottom: 8,
  },
  box3: {
    width: 161,
    height: 173,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(227, 233, 241, 0.8)",
    shadowColor: "rgba(34, 63, 97, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  box4: {
    width: 161,
    height: 113,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
    backgroundColor: "rgba(61, 89, 121, 1)",
    shadowColor: "rgba(34, 63, 97, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  // 🔹 Text styles inside boxes
  boxText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  whiteText: {
    color: "rgba(255, 255, 255, 1)",
  },
  blueText: {
    color: "rgba(34, 63, 97, 1)",
  },

  // 🔹 See More + Collective Nudges styles
  bottomTextContainer: {
    marginTop: 12,
  },
  seeMoreText: {
    alignSelf: "flex-end",
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontStyle: "italic",
    fontSize: 14,
    lineHeight: 14,
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.92,
  },
  collectiveText: {
    marginTop: 20,
    alignSelf: "flex-start",
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    color: "rgba(18, 18, 18, 1)",
  },
  debtContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(34, 63, 97, 1)",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 20
  },
  handIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 10,
    marginTop: 2,
  },
  debtTextContainer: {
    flex: 1,
  },
  debtTitle: {
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontStyle: "italic", // simulating 85 Heavy Oblique
    fontSize: 12,
    lineHeight: 20,
    color: "rgba(251, 253, 255, 1)",
  },
  debtSubtitle: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontStyle: "italic", // simulating 55 Oblique
    fontSize: 10,
    lineHeight: 17,
    color: "rgba(251, 253, 255, 1)",
  },
  seeMoreTextBottom: {
    alignSelf: "flex-end",
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontStyle: "italic",
    fontSize: 16,
    lineHeight: 16,
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.92,
    marginTop: 20
  },
  bottomBar: {
    position: "absolute",         // ✅ Fixes it to bottom
    bottom: 20,                   // Distance from bottom edge
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "rgba(18, 18, 18, 1)",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
    height: verticalScale(55),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,                 // ✅ Shadow for Android
  },
  centerButton: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
    width: 60,
    height: 60,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
    borderColor: 'rgba(244, 242, 239, 1)',
    borderWidth: 5,

  },
  plus: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    backgroundColor: '#FBFDFF',
    borderRadius: 25,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});