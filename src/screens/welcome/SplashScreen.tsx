import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  useColorScheme,
  ImageBackground,
  Text,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import colors from "../../theme/color";
import ButtonComp from "../../components/common/ButtonComp";
import { TouchableOpacity } from "react-native";
import { scale, verticalScale, moderateScale, moderateVerticalScale } from "react-native-size-matters";

type RootStackParamList = {
  Welcome: undefined;
  Details: undefined;
};

type SplashScreenProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenProp>();
  const colorScheme = useColorScheme() ?? "dark";
  const themeColors = colors[colorScheme];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides array: each slide has a background, main image, and two text points
  const slides = [
    {
      bgImage: require("../../assets/images/onboardimg/onboardingdoodle.png"), // replace with real path
      mainImage: require("../../assets/images/onboardimg/splashscreen1.png"),
      point1: "Smarter Choices. Confident Decisions.",
      point2: "Your journey to better financial behavior starts here.",
    },
    {
      bgImage: require("../../assets/images/onboardimg/onboardingdoodle.png"),
      mainImage: require("../../assets/images/onboardimg/splashscreen2.png"),
      point1: "Discover Your Spending Personality",
      point2: "Our AI analyzes your habits to reveal the patterns shaping your money decisions.",
    },
    {
      bgImage: require("../../assets/images/onboardimg/onboardingdoodle.png"),
      mainImage: require("../../assets/images/onboardimg/splashscreen3.png"),
      point1: "AI That Works With You",
      point2: "From budgeting to investing, our behavioral AI adapts to your goals and helps you stay on track.",
    },
  ];

  // Move to next slide or navigate
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.navigate("Details"); // navigate to your next page
    }
  };

  const current = slides[currentSlide];

  return (
    <ImageBackground
      source={current.bgImage}
      style={[styles.background, { backgroundColor: "#223F61", zIndex: 1, height:scale(764), }]} // fallback bg color
      resizeMode="contain"
    >
      {currentSlide === 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <View style={styles.overlay}>
        <Image source={current.mainImage} style={styles.image} resizeMode="contain" />

        {/* Point1 text */}
        <Text style={styles.point1}>{current.point1}</Text>

        {/* Point2 text */}
        <Text style={styles.point2}>{current.point2}</Text>

        {/* Pagination bars */}
        <View style={styles.pagination}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === currentSlide && styles.activeDot, // apply bar style if active
              ]}
            />
          ))}
        </View>
        {/* Next/Get Started button */}
        <View style={{ backgroundColor: "#223F61" }}>
          <ButtonComp
            title={currentSlide === slides.length - 1 ? "Let’s Start!" : "Next"}
            onPress={handleNext}
            style={{
              backgroundColor: "#EDECE91A", // your desired button color
              zIndex: 10,
              textColor: "#FFFFFF",
              marginTop: verticalScale(25),
            }}
            textStyle={{
              color: "#FBFDFF",
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    marginTop: 116,
    width: scale(300),
    height: verticalScale(243),
    marginBottom: verticalScale(51),
  },
  point1: {
    fontFamily: "Avenir LT Std 95 Black",
    fontWeight: "700",
    fontSize: moderateScale(16),
    lineHeight: moderateVerticalScale(16 * 1.57),
    paddingHorizontal: 51,
    color: "#E3E9F1",
    marginBottom: verticalScale(12),
  },
  point2: {
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(14),
    lineHeight: moderateVerticalScale(14 * 1.57),
    paddingHorizontal: 35,
    textAlign: "center",
    color: "#E3E9F1CC",
    marginBottom: verticalScale(20),
  },
  pagination: {
    flexDirection: "row",
    marginBottom: verticalScale(12),
  },
  dot: {
    backgroundColor: "#D9D9D9",
    width: scale(10),
    height: scale(10),
    borderRadius: scale(10),
    marginHorizontal: scale(7),
  },
  activeDot: {
    backgroundColor: "#fff",
    width: scale(24),
    height: scale(10),
    borderRadius: scale(3),
    marginHorizontal: scale(8),
  },

  skipText: {
    position: "absolute",
    fontFamily: "Avenir LT Std 55 Roman",
    fontWeight: "400",
    fontSize: moderateScale(16),
    lineHeight: moderateVerticalScale(16),
    letterSpacing: 0,
    color: "#FAF8F5",
    top: 80,
    left: 120,
  }

});

export default SplashScreen;