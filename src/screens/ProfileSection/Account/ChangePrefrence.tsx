import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  useColorScheme,
} from "react-native";
import BackWard from "../../../assets/icons/BackWard";
import MicIcon from "../../../assets/icons/MicIcon";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "../../../theme/color";

const preferenceData = [
  { question: "What’s your name?", answer: "John" },
  { question: "What gender do you identify as?", answer: "Male" },
  { question: "Your Birth date, Please", answer: "12.10.2000" },
  { question: "Where do you call home?", answer: "Urban" },
  { question: "I Was wondering, are you married?", answer: "Single" },
  { question: "Where do you belong in the work world?", answer: "Self-employed" },
  { question: "How heavy is your wallet each year?", answer: "5L - 15L" },
  {
    question: "What motivates you most to save money?",
    answer: "For a secure future and peace of mind",
  },
  { question: "On average, how much do you spend weekly?", answer: "7500" },
  { question: "How often do you set financial goals?", answer: "3 - Sometimes" },
  { question: "Which spending category do you overspend in?", answer: "Food" },
  { question: "Do you prefer short-term gains or long-term security?", answer: "Long - Term security" },
  { question: "How disciplined are you in sticking to a monthly budget?", answer: "4 - Often" },
  { question: "How do you usually make spending decisions?", answer: "Mix of both" },
  { question: "What percentage of income do you save monthly?", answer: "25%" },
  { question: "When stressed, do you tend to spend more?", answer: "Sometimes" },
  { question: "How confident are you in making investment decisions?", answer: "4 - High" },
  { question: "Which type of investment attracts you most?", answer: "Real - Estate" },
  { question: "Do you set short-term (1 year) financial goals?", answer: "Yes" },
  { question: "Do you set long-term (5+ years) financial goals?", answer: "Yes" },
  { question: "Do you often compare your financial progress with peers?", answer: "No" },
  { question: "How often do you adjust your budget or financial plan?", answer: "2 - Rarely" },
  { question: "If you get extra income (bonus/gift), do you save or spend it?", answer: "Mix of both" },
  { question: "Do you prefer advice from experts, friends, or self-research?", answer: "Experts" },
  { question: "How do you react to sudden expenses?", answer: "Manageable" },
  {
    question: "What is your ultimate financial goal?",
    answer:
      "Build a ₹2–3 crore portfolio by early 40s that generates ₹50k–1L monthly passive income – giving the freedom to slow down, travel, or pursue passion projects.",
  },
];

const ChangePreferenceScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme ?? "light"];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: theme.text }]}>Change Preference</Text>
      </View>

      {/* Scrollable Q&A Section */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {preferenceData.map((item, index) => (
          <View key={index} style={styles.questionBlock}>
            <Text style={[styles.question, { color: theme.text }]}>{item.question}</Text>
            <Text style={[styles.answer, { color: theme.textSecondary }]}>{item.answer}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Input Bar */}
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.buttondark,
            borderColor: theme.Button,
          },
        ]}
      >
        <TextInput
          style={[styles.inputField, { color: theme.text }]}
          placeholder="You can also type..."
          placeholderTextColor={theme.Button}
        />
        <TouchableOpacity style={styles.micWrapper}>
          <MicIcon width={45} height={45} color={theme.Button} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangePreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  scrollContainer: {
    paddingBottom: verticalScale(20),
    paddingTop:verticalScale(5),
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(44),
  },
  header: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    marginLeft: scale(22),
    letterSpacing: scale(2),
    fontFamily: "Kollektif-Bold",
  },
  questionBlock: {
    marginBottom: verticalScale(15),
  },
  question: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    fontFamily: "Kollektif-Bold",
  },
  answer: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    marginTop: verticalScale(5),
    fontFamily: "Avenir LT Std 85Medium",
    lineHeight: verticalScale(20),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: scale(1),
    borderRadius: moderateScale(16),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(78),
    bottom: verticalScale(39),
  },
  inputField: {
    flex: 1,
    fontSize: moderateScale(13),
    fontFamily: "Avenir LT Std",
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(10),
  },
  micWrapper: {
    right: scale(10),
  },
});
