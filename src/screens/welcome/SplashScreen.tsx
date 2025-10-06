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
import { SafeAreaView } from "react-native";

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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#223F61" }}>
      <ImageBackground
        source={current.bgImage}
        style={[styles.background, { backgroundColor: "#223F61" }]} // fallback bg color
        resizeMode="cover"
      >
        {/* Skip button */}
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate("Details")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

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
          <ButtonComp
            title={currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            onPress={handleNext}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
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
    paddingHorizontal: 20,
    width: "100%",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 25,
  },
  point1: {
    fontFamily: "Avenir LT Std",
    fontWeight: "700", // closest to 750
    fontSize: 16,
    lineHeight: 16 * 1.57,
    textAlign: "center",
    color: "#E3E9F1",
    marginBottom: 6,
  },
  point2: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 14 * 1.57,
    textAlign: "center",
    color: "#E3E9F1CC",
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    backgroundColor: '#D9D9D9',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginHorizontal: 7,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 24,   // make it a bar
    height: 10,
    borderRadius: 3,
    marginHorizontal: 8,
  },
  skipButton: {
    position: "absolute",
    top: 80,
    right: 60,
    zIndex: 10,
  },
  skipText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16, // 100% of font size
    letterSpacing: 0,
    color: "#FAF8F5", // PRIMARY-WHITE
  },
});

export default SplashScreen;
