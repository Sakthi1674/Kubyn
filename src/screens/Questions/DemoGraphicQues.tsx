import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import UpWard from "../../assets/icons/Upward";
import DownWard from "../../assets/icons/DownWard";
import LeftWard from "../../assets/icons/LeftWard";
import RightWard from "../../assets/icons/RightWard";
import MaleIcon from "../../assets/icons/MaleIcon";
import FemaleIcon from "../../assets/icons/FemaleIcon";
import Slider from "@react-native-community/slider";
import CandleIcon from "../../assets/icons/CandleIcon";
import AirplaneIcon from "../../assets/icons/AirplaneIcon";
import ChatBubbleIcon from "../../assets/icons/ChatBubbleIcon";
import BagIcon from "../../assets/icons/BagIcon";
import NetworkIcon from "../../assets/icons/NetworkIcon";
import DatabaseIcon from "../../assets/icons/DatabaseIcon";
import HomeIcon from "../../assets/icons/HomeIcon";
import CrownIcon from "../../assets/icons/CrownIcon ";
import CoinIcon from "../../assets/icons/CoinIcon";
import MenuDotsIcon from "../../assets/icons/MenuDotsIcon";
import DobIcon from "../../assets/icons/Dobcon";


type RootStackParamList = {
  NumOtp: undefined;
};

export default function DemoGraphicQues() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleNext = () => {
    if (step < 27) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderQuestion = () => {
    switch (step) {
      case 1:
        return "What’s your name?";
      case 2:
        return "Which one are you?";
      case 3:
        return "Your Birth date, Please";
      case 4:
        return "Where do you call home?";
      case 5:
        return "I Was wondering, are you married?";
      case 6:
        return "Where do you belong in the work world?";
      case 7:
        return "How heavy is your wallet each year?";
      case 8:
        return "What motivates you most to save money?";
      case 9:
        return "On average, how much do you spend weekly?";
      case 10:
        return "How often do you set financial goals?";
      case 11:
        return "Which spending category do you overspend in?";
      case 12:
        return "Do you prefer short-term gains or long-term security?";
      case 13:
        return "How disciplined are you in sticking to a monthly budget?";
      case 14:
        return "Do you track your daily expenses?";
      case 15:
        return "How do you usually make spending decisions?";
      case 16:
        return "What percentage of income do you save monthly?";
      case 17:
        return "When stressed, do you tend to spend more?";
      case 18:
        return "How confident are you in making investment decisions?";
      case 19:
        return "Which type of investment attracts you most?";
      case 20:
        return "Do you set short-term (1 year) financial goals?";
      case 21:
        return "Do you set long-term (5+ years) financial goals?";
      case 22:
        return "Do you often compare your financial progress with peers?";
      case 23:
        return "How often do you adjust your budget or financial plan?";
      case 24:
        return "If you get extra income (bonus/gift), do you save or spend it?";
      case 25:
        return "Do you prefer advice from experts, friends, or self-research?";
      case 26:
        return "How do you react to sudden expenses?";
      case 27:
        return "What is your ultimate financial goal?";
      default:
        return "";
    }
  };

  const renderQuestionContent = () => {
    switch (step) {
      case 1:
        return (
          <TextInput
            style={styles.input}
            placeholder="Type here ..."
            placeholderTextColor="rgba(34,63,97,0.5)"
            value={answers[step] || ""}
            onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
          />
        );

      case 2:
        const options = [
          { label: "Male", icon: <MaleIcon width={40} height={40} /> },
          { label: "Female", icon: <FemaleIcon width={40} height={40} /> },
          { label: "Other" },
        ];

        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {options.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.optionButton,
                  answers[step] === option.label && styles.optionButtonSelected,
                  {
                    flex: 1,                 // equal width
                    height: verticalScale(100), // fixed height for all buttons
                    marginHorizontal: scale(5),
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option.label })}
              >
                {option.icon && (
                  <View style={{ marginBottom: verticalScale(5) }}>{option.icon}</View>
                )}
                <Text
                  style={[
                    styles.optionText,
                    answers[step] === option.label && styles.optionTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 3:
        return (
          <View style={{ marginTop: verticalScale(20), width: "100%" }}>
            {/* Label */}
            <Text
              style={{
                fontFamily: "Avenir LT Std",
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: moderateScale(20),
                lineHeight: moderateScale(24),
                color: "rgba(34, 63, 97, 1)",
                opacity: 0.25,
                marginBottom: verticalScale(12),
              }}
            >
              DD | MM | YYYY
            </Text>

            {/* Input Boxes */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: scale(10),
              }}
            >
              {/* Day */}
              <View style={styles.birthBox}>
                <Text style={styles.birthBoxText}>01</Text>
              </View>

              {/* Month */}
              <View style={styles.birthBox}>
                <Text style={styles.birthBoxText}>01</Text>
              </View>

              {/* Year */}
              <View style={[styles.birthBox, { width: scale(90) }]}>
                <Text style={styles.birthBoxText}>2000</Text>
              </View>

              {/* Calendar icon placeholder */}
              <TouchableOpacity>
                {/* Replace with your calendar SVG */}
                <View style={{ marginTop: 10 }}>
                  <DobIcon width={24} height={24} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      case 4:
        const locationOptions = ["Urban", "Semi-Urban", "Semi-Rural", "Rural"];

        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {locationOptions.map((option, index) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                  {
                    width: "48%", // ✅ two per row
                    marginBottom: verticalScale(12),
                    alignItems: "center",
                  },
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 5:
        const marriageOptions = ["Single", "Married", "Choose not to disclose"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {marriageOptions.map((option, index) => {
              const isLastOdd =
                marriageOptions.length % 2 !== 0 &&
                index === marriageOptions.length - 1;

              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    answers[step] === option && styles.locationOptionSelected,
                    // 👇 Center the last button if odd number
                    isLastOdd && { alignSelf: "center", marginTop: verticalScale(10) },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      answers[step] === option && { color: "#fff" },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      case 6:
        const workOptions = ["Private", "Government", "Self-employed", "Student"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {workOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 7:
        const walletOptions = ["Under 5L", "5L - 15L", "15L - 30L", "30L Above"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {walletOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 8:
      case 9:
        return (
          <View style={{ marginTop: verticalScale(10), width: "100%" }}>
            <TextInput
              style={styles.input}
              placeholder="Type here ..."
              placeholderTextColor="rgba(34,63,97,0.5)"
              value={answers[step] || ""}
              onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
            />
          </View>
        );

      case 10:
        const activeValue = Number(answers[step]) || 1;

        return (
          <View
            style={{
              marginTop: verticalScale(40),
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* --- Custom Rounded Thick Slider --- */}
            <View
              style={{
                position: "relative",
                width: scale(288),
                height: verticalScale(28), // thicker bar
                justifyContent: "center",
              }}
            >
              {/* Background Bar */}
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: "#D9D9D9",
                  borderRadius: 40,
                }}
              />

              {/* Active Bar */}
              <View
                style={{
                  position: "absolute",
                  width: `${((activeValue - 1) / 4) * 100}%`,
                  height: verticalScale(10),
                  backgroundColor: "#223F61",
                  borderRadius: 40,
                }}
              />

              {/* Thumb (Dot) */}
              <View
                style={{
                  position: "absolute",
                  left: `${((activeValue - 1) / 4) * 100}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(40),
                  height: verticalScale(24),
                  borderRadius: 50,
                  backgroundColor: "#223F61",
                }}
              />

              {/* Functional Hidden Slider */}
              <Slider
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  transform: [{ scaleY: 20 }],
                }}
                minimumValue={1}
                maximumValue={5}
                step={1}
                value={activeValue}
                onValueChange={(val) =>
                  setAnswers({ ...answers, [step]: val.toString() })
                }
              />
            </View>

            {/* --- Numbers --- */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: scale(288),
                marginTop: verticalScale(10),
              }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <Text
                  key={num}
                  style={{
                    fontFamily: "Avenir LT Std",
                    fontWeight: "600",
                    fontSize: moderateScale(14),
                    color:
                      num === activeValue ? "#223F61" : "rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {num}
                </Text>
              ))}
            </View>

            {/* --- Labels --- */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: scale(288),
                marginTop: verticalScale(3),
              }}
            >
              {["Never", "Rarely", "Sometimes", "Often", "Always"].map(
                (label, i) => (
                  <Text
                    key={label}
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "400",
                      fontSize: moderateScale(10),
                      color:
                        i + 1 === activeValue
                          ? "#223F61"
                          : "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {label}
                  </Text>
                )
              )}
            </View>
          </View>
        );
      case 11:
        const spendingOptions = [
          { label: "Food", icon: <CandleIcon /> },
          { label: "Travel", icon: <AirplaneIcon /> },
          { label: "Entertainment", icon: <ChatBubbleIcon /> },
          { label: "Shopping", icon: <BagIcon /> },
        ];

        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {spendingOptions.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.locationOption,
                  answers[step] === option.label && styles.locationOptionSelected,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: scale(8),
                  },
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option.label })}
              >
                {option.icon}
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option.label && { color: "#fff" },
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Text input below icons */}
            <TextInput
              style={[styles.input, { marginTop: verticalScale(15) }]}
              placeholder="Type here for Others..."
              placeholderTextColor="rgba(34,63,97,0.5)"
              value={answers["custom_" + step as any] || ""}
              onChangeText={(text) =>
                setAnswers({ ...answers, ["custom_" + step]: text })
              }
            />
          </View>
        );
      case 12:
        const termOptions = ["Short-Term", "Long-Term"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {termOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 14:
        const trackExpenseOptions = ["Yes", "No", "Sometimes"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {trackExpenseOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                  trackExpenseOptions.length % 2 !== 0 && option === "Sometimes"
                    ? { alignSelf: "center" } // centers last button if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 15:
        const spendingDecisionOptions = ["Planned", "Impulsive", "Mix of both"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {spendingDecisionOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                  spendingDecisionOptions.length % 2 !== 0 &&
                    option === "Mix of both"
                    ? { alignSelf: "center" } // center last option if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 16:
        return (
          <View style={{ marginTop: verticalScale(20), width: "100%", flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={[
                styles.input,
                { flex: 1, textAlign: "left" },
              ]}
              placeholder=".............%"
              keyboardType="numeric"
              placeholderTextColor="rgba(34,63,97,0.5)"
              value={answers[step] || ""}
              onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
            />
          </View>
        );
      case 17:
        const stressSpendingOptions = ["Yes", "No", "Sometimes"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {stressSpendingOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  answers[step] === option && styles.locationOptionSelected,
                  stressSpendingOptions.length % 2 !== 0 && option === "Sometimes"
                    ? { alignSelf: "center" } // center the last button if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 19:
        const investmentOptions = [
          { icon: <NetworkIcon />, label: "Stocks" },
          { icon: <DatabaseIcon />, label: "Mutual Funds" },
          { icon: <HomeIcon />, label: "Real Estate" },
          { icon: <CrownIcon />, label: "Gold" },
          { icon: <CoinIcon />, label: "Crypto" },
          { icon: <MenuDotsIcon />, label: "Others" },
        ];

        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {investmentOptions.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.locationOption,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: scale(10),
                    width: "48%", // ensures two per row
                  },
                  answers[step] === option.label && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option.label })}
              >
                {option.icon}
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option.label && { color: "#fff" },
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 20:
        const shortTermGoalOptions = ["Yes", "No"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {shortTermGoalOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  { width: "48%" }, // ensures 2 per row
                  answers[step] === option && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 21:
        const longTermGoalOptions = ["Yes", "No"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {longTermGoalOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  { width: "48%" }, // ensures 2 buttons per row
                  answers[step] === option && styles.locationOptionSelected,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 22:
        const compareOptions = ["Yes", "No", "Sometimes"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {compareOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  { width: "48%" }, // ensures 2 per row
                  answers[step] === option && styles.locationOptionSelected,
                  compareOptions.length % 2 !== 0 && option === "Sometimes"
                    ? { alignSelf: "center" } // center last option if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 24:
        const extraIncomeOptions = ["Mostly Save", "Mostly Spend", "Mix of Both"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {extraIncomeOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  { width: "48%" }, // ensures 2 buttons per row
                  answers[step] === option && styles.locationOptionSelected,
                  extraIncomeOptions.length % 2 !== 0 && option === "Mix of Both"
                    ? { alignSelf: "center" } // center last one if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 25:
        const adviceOptions = ["Experts", "Friends", "Self-Research"];
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {adviceOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.locationOption,
                  { width: "48%" }, // ensures 2 per row
                  answers[step] === option && styles.locationOptionSelected,
                  adviceOptions.length % 2 !== 0 && option === "Self-Research"
                    ? { alignSelf: "center" } // centers last one if odd count
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={[
                    styles.locationOptionText,
                    answers[step] === option && { color: "#fff" },
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 27:
        return (
          <TextInput
            style={styles.input}
            placeholder="Type here ..."
            placeholderTextColor="rgba(34,63,97,1)"
            value={answers[step] || ""}
            onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
          />
        );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      {/* Top Left Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <BackWard width={10} height={16} color="#223F61" />
      </TouchableOpacity>

      <View style={styles.questionContainer}>
        {/* Subtitle */}
        {step === 1 && <Text style={styles.subtitle}>First things, first</Text>}
        {step === 4 && <Text style={styles.subtitle}>Hey! I am Curious</Text>}

        {/* Progress text */}
        {step > 7 && <Text style={styles.progressText}>{step - 7} / 20</Text>}

        {/* Question text */}
        <Text style={styles.questionText}>{renderQuestion()}</Text>

        {/* Question content */}
        {renderQuestionContent()}
      </View>

      {/* Navigation Buttons */}
      {step <= 6 ? (
        <View style={styles.verticalButtons}>
          {step > 1 && (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleBack}
            >
              <UpWard width={20} height={20} color="#fff" />
            </TouchableOpacity>
          )}
          {step < 27 && (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <DownWard width={20} height={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.horizontalButtons}>
          {step > 1 && (
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={handleBack}
            >
              <LeftWard width={20} height={20} color="#fff" />
            </TouchableOpacity>
          )}
          {step < 27 && (
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <RightWard width={20} height={20} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    position: "absolute",
    left: scale(20),
    top: verticalScale(40),
    padding: scale(5),
    zIndex: 10,
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: scale(20),
  },
  subtitle: {
    fontSize: moderateScale(12),
    color: "#888",
    marginBottom: verticalScale(8),
  },
  questionText: {
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: moderateScale(24),
    color: "#000000",
    lineHeight: moderateScale(28),
    marginTop: verticalScale(8),
  },
  progressText: {
    fontSize: moderateScale(14),
    color: "#888",
    marginBottom: verticalScale(4),
  },
  input: {
    width: "100%",
    height: verticalScale(45),
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: moderateScale(24),
    color: "#223F61",
    opacity: 0.25,
    borderWidth: 0,
    borderColor: "#223F61",
    marginTop: verticalScale(12),
    paddingHorizontal: scale(10),
  },
  optionButton: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderWidth: 1,
    borderColor: "#223F61",
    borderRadius: scale(10),
    marginBottom: verticalScale(12),
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: "#223F61",
  },
  optionText: {
    color: "#223F61",
    fontSize: moderateScale(16),
    textAlign: "center",
  },
  optionTextSelected: {
    color: "#fff",
  },
  verticalButtons: {
    position: "absolute",
    bottom: verticalScale(60),
    right: scale(25),
    flexDirection: "column",
    gap: scale(10),
  },
  horizontalButtons: {
    position: "absolute",
    bottom: verticalScale(40),
    right: scale(60),
    flexDirection: "row",
    gap: scale(20),
  },
  button: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(30),
    backgroundColor: "#223F61",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  secondaryButton: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(30),
    backgroundColor: "#223F61",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  locationOption: {
    width: "48%",
    backgroundColor: "rgba(240, 244, 249, 1)",
    borderRadius: scale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(20),
    marginBottom: verticalScale(12),
    shadowColor: "rgba(34, 63, 97, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
  },

  locationOptionSelected: {
    backgroundColor: "#223F61", // selected bg
  },

  locationOptionText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: moderateScale(16),
    lineHeight: 33,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
  },
  birthBox: {
    width: scale(45),
    height: verticalScale(46),
    borderRadius: scale(10),
    backgroundColor: "rgba(240, 244, 249, 1)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(34, 63, 97, 0.1)",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 1,
    shadowRadius: 5.3,
    elevation: 3,
  },
  birthBoxText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: moderateScale(24),
    color: "rgba(69, 85, 105,0.08)",
  },

}); 