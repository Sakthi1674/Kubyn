import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, useColorScheme } from "react-native";
import SearchIcon from "../../assets/icons/SearchIcon";
import Brain from "../../assets/icons/Brain";
import UpdatedIcon from "../../assets/icons/UpdateIcon";
import Protect from "../../assets/icons/Protect";
import PlusIcon from "../../assets/icons/PlusIcon";
import MyGoal from "./MyGoal";
import MyCommunity from "./MyCommunity";
import MainScreen from "./MainScreen";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../theme/color";
import MyBehavior from "./MyBehavior";
import { NavigationProp, useNavigation } from "@react-navigation/native";
type RootStackParamList = {
  MySpendTrans: undefined;
KubynAI:undefined;
};
// 👇 define a reusable type for the screen names
type ScreenType = "Search" | "Brain" | "Updated" | "Protect";

const MainScreenFooter = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>("Search");

  // 🔹 Footer Icon Renderer
  const renderIconButton = (name: ScreenType, IconComponent: any) => {
    const isActive = activeScreen === name;

    return (
      <TouchableOpacity
        key={name}
        onPress={() => setActiveScreen(name)} // ✅ Type-safe now
        style={[
          styles.iconButton,
          isActive && {
            backgroundColor: theme.background, // ✅ theme-based bg for active button
          },
        ]}
      >
        <IconComponent
          width={26}
          height={26}
          fill={isActive ? theme.text : theme.bttext}
          stroke={isActive ? theme.text : theme.bttext}
          color={isActive ? theme.text : theme.bttext}
        />

      </TouchableOpacity>
    );
  };
      const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];
  // 🔹 Screen switch logic
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "Search":
        return <MainScreen />;
      case "Brain":
        return <MyBehavior />;
      case "Updated":
        return <MyGoal />;
      case "Protect":
        return <MyCommunity />;
      default:
        return <MainScreen />;
    }
  };

  return (
    <View style={[{ flex: 1, backgroundColor: theme.background }]}>
      {/* 🔹 Active Screen */}
      <View style={{ flex: 1 }}>{renderActiveScreen()}</View>

      {/* 🔹 Footer - always visible */}
      <View
        style={[
          styles.bottomBar,
          { backgroundColor: theme.text, shadowColor: theme.bttext },
        ]}
      >
        {renderIconButton("Search", SearchIcon)}
        {renderIconButton("Brain", Brain)}

    <TouchableOpacity
      style={styles.centerButton}
      onPress={() => navigation.navigate("MySpendTrans")} // 👈 change to your screen name
    >
      <PlusIcon width={30} height={30} />
    </TouchableOpacity>
        {renderIconButton("Updated", UpdatedIcon)}
        {renderIconButton("Protect", Protect)}
      </View>

      <View>
      <TouchableOpacity onPress={() => navigation.navigate("KubynAI")}>
        <Image
          source={require("../../assets/images/DashBoard/Kuboo.png")}
          style={styles.kubooImage}
        />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreenFooter;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "rgba(18, 18, 18, 1)",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: moderateScale(25),
    height: verticalScale(60),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.3,
    shadowRadius: moderateScale(6),
    elevation: 5,
    marginHorizontal: scale(15),
    marginBottom: verticalScale(20),
  },
  iconButton: {
    width: scale(44),
    height: scale(44),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(22),
  },
  activeButton: {
    backgroundColor: "#FFFFFF",
  },
  centerButton: {
    backgroundColor: "rgba(18, 18, 18, 1)",
    width: scale(60),
    height: scale(60),
    borderRadius: moderateScale(55),
    alignItems: "center",
    justifyContent: "center",
    bottom: verticalScale(30),
    borderColor: "rgba(244, 242, 239, 1)",
    borderWidth: scale(5),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(4) },
    shadowOpacity: 0.4,
    shadowRadius: moderateScale(4),
    elevation: 8,
  },
  kubooImage: {
    position: "absolute",
    bottom: verticalScale(80),
    right: scale(25),
    height: verticalScale(50),
    width: scale(50),
    resizeMode: "contain",
  },
});

