import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  useColorScheme,
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
import HomeIcon from "../../assets/icons/HomeIcon";
import CrownIcon from "../../assets/icons/CrownIcon ";
import CoinIcon from "../../assets/icons/CoinIcon";
import MenuDotsIcon from "../../assets/icons/MenuDotsIcon";
import DobIcon from "../../assets/icons/Dobcon";
import DatabaseIcon from "../../assets/icons/DatabaseIcon";
import colors from "../../theme/color";


type RootStackParamList = {
  NumOtp: undefined;
};

export default function DemoGraphicQues() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || "light"];

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
            style={[
              styles.input,
              {
                color: theme.text
              },
            ]}
            placeholder="Type here ..."
            placeholderTextColor={theme.textSecondary || theme.text}
            value={answers[step] || ""}
            onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
          />
        );

      case 2:
        const options = [
          { label: "Male", icon: <MaleIcon width={40} height={40} color={theme.text} /> },
          { label: "Female", icon: <FemaleIcon width={40} height={40} color={theme.text} /> },
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
            {options.map((option) => {
              const isSelected = answers[step] === option.label;

              return (
                <TouchableOpacity
                  key={option.label}
                  style={[
                    styles.optionButton,
                    {
                      flex: 1,
                      height: verticalScale(100),
                      marginHorizontal: scale(5),
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                      borderColor: isSelected ? theme.Button : theme.text,
                      borderWidth: 1,
                      borderRadius: scale(12),
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option.label })}
                >
                  {/* Icon */}
                  {option.icon && (
                    <View style={{ marginBottom: verticalScale(12) }}>
                      {React.cloneElement(option.icon as React.ReactElement, {
                        ...(option.icon.props && { color: isSelected ? theme.bttext : theme.text })
                      })}
                    </View>
                  )}

                  {/* Label */}
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(16),
                      lineHeight: moderateScale(16),
                      color: isSelected ? theme.bttext : theme.text,
                      textAlign: "center",
                    }}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );

      // 👇 Case 3 — Date of Birth
      case 3:
        return (
          <View style={{ marginTop: verticalScale(20), width: "100%" }}>
            <Text
              style={{
                fontFamily: "Avenir LT Std",
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: moderateScale(20),
                lineHeight: moderateScale(24),
                color: theme.text,
                opacity: 0.5,
                marginBottom: verticalScale(12),
              }}
            >
              DD | MM | YYYY
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: scale(10),
              }}
            >
              {/* Day */}
              <View
                style={[
                  styles.birthBox,
                  { backgroundColor: theme.buttondark, borderColor: theme.Button },
                ]}
              >
                <Text style={[styles.birthBoxText, { color: theme.text }]}>01</Text>
              </View>

              {/* Month */}
              <View
                style={[
                  styles.birthBox,
                  { backgroundColor: theme.buttondark, borderColor: theme.Button },
                ]}
              >
                <Text style={[styles.birthBoxText, { color: theme.text }]}>01</Text>
              </View>

              {/* Year */}
              <View
                style={[
                  styles.birthBox,
                  { width: scale(90), backgroundColor: theme.buttondark, borderColor: theme.Button },
                ]}
              >
                <Text style={[styles.birthBoxText, { color: theme.text }]}>2000</Text>
              </View>

              {/* Calendar icon */}
              <TouchableOpacity>
                <View style={{ marginTop: 10 }}>
                  <DobIcon width={24} height={24} color={theme.text} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );


      // 👇 Case 4 — Location type
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
            {locationOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      marginBottom: verticalScale(12),
                      alignItems: "center",
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                      borderColor: isSelected ? theme.Button : theme.Button,
                      borderWidth: 1,
                      borderRadius: scale(10),
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={{
                      color: isSelected ? theme.bttext : theme.text,
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(16),
                    }}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );


      // 👇 Case 5 — Marital status
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
              const isSelected = answers[step] === option;

              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                      borderColor: isSelected ? theme.Button : theme.Button,
                      borderWidth: 1,
                      borderRadius: scale(10),
                      width: "48%",
                      marginBottom: verticalScale(12),
                      alignItems: "center",
                      ...(isLastOdd && {
                        alignSelf: "center",
                        marginTop: verticalScale(10),
                      }),
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={{
                      color: isSelected ? theme.bttext : theme.text,
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(16),
                    }}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      // ✅ CASE 6 — Work Options
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
            {workOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                      borderColor: isSelected ? theme.Button : theme.Button,
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );


      // ✅ CASE 7 — Wallet Range
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
            {walletOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                      borderColor: isSelected ? theme.text : theme.text,
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );


      // ✅ CASE 8 — Short Answer Input
      case 8:
        return (
          <View style={{ marginTop: verticalScale(10), width: "100%" }}>
            <TextInput
              style={[
                styles.input,
                {
                  color: theme.text,

                },
              ]}
              placeholder="Type here ..."
              placeholderTextColor={theme.text}
              value={answers[step] || ""}
              onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
            />
          </View>
        );


      // ✅ CASE 9 — Another Short Answer
      case 9:
        return (
          <View style={{ marginTop: verticalScale(10), width: "100%" }}>
            <TextInput
              style={[
                styles.input,
                {
                  color: theme.text,

                },
              ]}
              placeholder="Type here ..."
              placeholderTextColor={theme.text}
              value={answers[step] || ""}
              onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
            />
          </View>
        );


      // ✅ CASE 10 — Custom Slider (1–5 Scale)
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
            {/* --- Slider Track --- */}
            <View
              style={{
                position: "relative",
                width: scale(288),
                height: verticalScale(28),
                justifyContent: "center",
              }}
            >
              {/* Inactive Bar */}
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: theme.buttonDisabled,
                  borderRadius: 40,
                }}
              />

              {/* Active Bar */}
              <View
                style={{
                  position: "absolute",
                  width: `${((activeValue - 1) / 4) * 100}%`,
                  height: verticalScale(10),
                  backgroundColor: theme.bar,
                  borderRadius: 40,
                }}
              />

              {/* Thumb */}
              <View
                style={{
                  position: "absolute",
                  left: `${((activeValue - 1) / 4) * 90}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(28),
                  height: verticalScale(28),
                  borderRadius: 50,
                  backgroundColor: theme.bar,
                }}
              />

              {/* Hidden Slider Functional Control */}
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

            {/* --- Labels --- */}
            <View
              style={{
                marginTop: verticalScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <View key={num} style={{ alignItems: "center", flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(14),
                      color:
                        num === activeValue ? theme.bar : theme.text,
                    }}
                  >
                    {num}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "400",
                      fontSize: moderateScale(10),
                      marginTop: verticalScale(3),
                      color:
                        num === activeValue ? theme.bar : theme.text,
                    }}
                  >
                    {["Never", "Rarely", "Sometimes", "Often", "Always"][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      case 11: {
        const spendingOptions = [
          { label: "Food", Icon: CandleIcon },
          { label: "Travel", Icon: AirplaneIcon },
          { label: "Entertainment", Icon: ChatBubbleIcon },
          { label: "Shopping", Icon: BagIcon },
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
            {spendingOptions.map(({ label, Icon }) => {
              const isSelected = answers[step] === label;
              const iconColor = isSelected ? theme.bttext : theme.text; // same color for both, you can adjust below if needed
              const iconStroke = isSelected ? theme.text : theme.Button;

              return (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.locationOption,
                    {
                      borderColor: theme.Button,
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: scale(8),
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: label })}
                >
                  <Icon
                    width={scale(18)}
                    height={verticalScale(18)}
                    stroke={iconStroke}
                  />
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}

            {/* Text input below icons */}
            <TextInput
              style={[
                styles.input,
                {
                  marginTop: verticalScale(15),
                  color: theme.text,
                  borderColor: theme.Button,
                  backgroundColor: theme.background,
                },
              ]}
              placeholder="Type here for Others..."
              placeholderTextColor={theme.text}
              value={answers["custom_" + step as any] || ""}
              onChangeText={(text) =>
                setAnswers({ ...answers, ["custom_" + step]: text })
              }
            />
          </View>
        );
      }


      case 12: {
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
                  {
                    borderColor: theme.Button,
                    backgroundColor:
                      answers[step] === option ? theme.Button : theme.buttondark,
                  },
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={{
                    color:
                      answers[step] === option ? theme.background : theme.text,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }

      case 13: {
        const disciplineValue = Number(answers[step]) || 1;
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
                height: verticalScale(28),
                justifyContent: "center",
              }}
            >
              {/* Background Bar */}
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: theme.buttonDisabled,
                  borderRadius: 40,
                }}
              />

              {/* Active Bar */}
              <View
                style={{
                  position: "absolute",
                  width: `${((disciplineValue - 1) / 4) * 100}%`,
                  height: verticalScale(10),
                  backgroundColor: theme.bar,
                  borderRadius: 40,
                }}
              />

              {/* Thumb (Dot) */}
              <View
                style={{
                  position: "absolute",
                  left: `${((disciplineValue - 1) / 4) * 90}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(28),
                  height: verticalScale(28),
                  borderRadius: 50,
                  backgroundColor: theme.bar,
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
                value={disciplineValue}
                onValueChange={(val) =>
                  setAnswers({ ...answers, [step]: val.toString() })
                }
              />
            </View>

            {/* --- Numbers + Labels --- */}
            <View
              style={{
                marginTop: verticalScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <View key={num} style={{ alignItems: "center", flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(14),
                      color:
                        num === disciplineValue
                          ? theme.bar
                          : theme.text || "rgba(0,0,0,0.5)",
                    }}
                  >
                    {num}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "400",
                      fontSize: moderateScale(10),
                      marginTop: verticalScale(3),
                      color:
                        num === disciplineValue
                          ? theme.bar
                          : theme.text || "rgba(0,0,0,0.6)",
                    }}
                  >
                    {["Very Poor", "Poor", "Average", "Good", "Excellent"][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      }

      case 14: {
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
                  {
                    borderColor: theme.Button,
                    backgroundColor:
                      answers[step] === option ? theme.Button : theme.buttondark,
                  },
                  trackExpenseOptions.length % 2 !== 0 && option === "Sometimes"
                    ? { alignSelf: "center" }
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={{
                    color:
                      answers[step] === option ? theme.background : theme.text,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }

      case 15: {
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
                  {
                    borderColor: theme.Button,
                    backgroundColor:
                      answers[step] === option ? theme.Button : theme.buttondark,
                  },
                  spendingDecisionOptions.length % 2 !== 0 &&
                    option === "Mix of both"
                    ? { alignSelf: "center" }
                    : null,
                ]}
                onPress={() => setAnswers({ ...answers, [step]: option })}
              >
                <Text
                  style={{
                    color:
                      answers[step] === option ? theme.background : theme.text,
                  }}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      }
      case 16:
        return (
          <View
            style={{
              marginTop: verticalScale(20),
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              style={[
                styles.input,
                {
                  flex: 1,
                  textAlign: "left",
                  color: theme.text,
                  backgroundColor: theme.background,
                  borderColor: theme.Button,
                },
              ]}
              placeholder=".............%"
              keyboardType="numeric"
              placeholderTextColor={theme.text}
              value={answers[step] || ""}
              onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
            />
          </View>
        );

      case 17: {
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
            {stressSpendingOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      borderColor: theme.Button,
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                    },
                    stressSpendingOptions.length % 2 !== 0 &&
                    option === "Sometimes" && { alignSelf: "center" },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

      case 18: {
        const confidenceValue = Number(answers[step]) || 1;
        return (
          <View
            style={{
              marginTop: verticalScale(40),
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* --- Slider Track --- */}
            <View
              style={{
                position: "relative",
                width: scale(288),
                height: verticalScale(28),
                justifyContent: "center",
              }}
            >
              {/* Background Bar */}
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: theme.buttonDisabled,
                  borderRadius: 40,
                }}
              />

              {/* Active Bar */}
              <View
                style={{
                  position: "absolute",
                  width: `${((confidenceValue - 1) / 4) * 100}%`,
                  height: verticalScale(10),
                  backgroundColor: theme.bar,
                  borderRadius: 40,
                }}
              />

              {/* Thumb */}
              <View
                style={{
                  position: "absolute",
                  left: `${((confidenceValue - 1) / 4) * 90}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(28),
                  height: verticalScale(28),
                  borderRadius: 50,
                  backgroundColor: theme.bar,
                }}
              />

              {/* Functional Slider */}
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
                value={confidenceValue}
                onValueChange={(val) =>
                  setAnswers({ ...answers, [step]: val.toString() })
                }
              />
            </View>

            {/* Labels */}
            <View
              style={{
                marginTop: verticalScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <View key={num} style={{ alignItems: "center", flex: 1 }}>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "600",
                      fontSize: moderateScale(14),
                      color:
                        num === confidenceValue
                          ? theme.bar
                          : theme.text,
                    }}
                  >
                    {num}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Avenir LT Std",
                      fontWeight: "400",
                      fontSize: moderateScale(10),
                      marginTop: verticalScale(3),
                      color:
                        num === confidenceValue
                          ? theme.bar
                          : theme.text || "rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {["Very Low", "Low", "Neutral", "High", "Very High"][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      }

      case 19: {
        const investmentOptions = [
          { Icon: NetworkIcon, label: "Stocks" },
          { Icon: DatabaseIcon, label: "Mutual Funds" },
          { Icon: HomeIcon, label: "Real Estate" },
          { Icon: CrownIcon, label: "Gold" },
          { Icon: CoinIcon, label: "Crypto" },
          { Icon: MenuDotsIcon, label: "Others" },
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
            {investmentOptions.map(({ Icon, label }) => {
              const isSelected = answers[step] === label;
              return (
                <TouchableOpacity
                  key={label}
                  style={[
                    styles.locationOption,
                    {
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: scale(10),
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: label })}
                >
                  <Icon
                    width={scale(18)}
                    height={verticalScale(18)}
                    stroke={isSelected ? theme.bttext : theme.text}
                  />
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

      case 20: {
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
            {shortTermGoalOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected
                        ? theme.Button
                        : theme.buttondark,
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }
      // 🟩 CASE 21 – Long-Term Goal
      case 21: {
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
            {longTermGoalOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                    },
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

      // 🟩 CASE 22 – Compare Options
      case 22: {
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
            {compareOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                    },
                    compareOptions.length % 2 !== 0 && option === "Sometimes"
                      ? { alignSelf: "center" }
                      : null,
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

      // 🟩 CASE 23 – Adjust Slider (theme integrated)
      case 23: {
        const adjustValue = Number(answers[step]) || 1;
        return (
          <View
            style={{
              marginTop: verticalScale(40),
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "relative",
                width: scale(288),
                height: verticalScale(28),
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: theme.buttonDisabled,
                  borderRadius: 40,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  width: `${((adjustValue - 1) / 4) * 100}%`,
                  height: verticalScale(10),
                  backgroundColor: theme.bar,
                  borderRadius: 40,
                }}
              />
              <View
                style={{
                  position: "absolute",
                  left: `${((adjustValue - 1) / 4) * 90}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(28),
                  height: verticalScale(28),
                  borderRadius: 50,
                  backgroundColor: theme.bar,
                }}
              />
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
                value={adjustValue}
                onValueChange={(val) =>
                  setAnswers({ ...answers, [step]: val.toString() })
                }
              />
            </View>

            <View
              style={{
                marginTop: verticalScale(10),
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {[1, 2, 3, 4, 5].map((num, index) => (
                <View key={num} style={{ alignItems: "center", flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: moderateScale(14),
                      color:
                        num === adjustValue ? theme.bar : theme.text + "99",
                    }}
                  >
                    {num}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: moderateScale(10),
                      marginTop: verticalScale(3),
                      color:
                        num === adjustValue ? theme.bar : theme.text + "80",
                    }}
                  >
                    {["Never", "Rarely", "Sometimes", "Often", "Regularly"][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        );
      }

      // 🟩 CASE 24 – Extra Income
      case 24: {
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
            {extraIncomeOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                    },
                    extraIncomeOptions.length % 2 !== 0 && option === "Mix of Both"
                      ? { alignSelf: "center" }
                      : null,
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }

      // 🟩 CASE 25 – Advice Options
      case 25: {
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
            {adviceOptions.map((option) => {
              const isSelected = answers[step] === option;
              return (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.locationOption,
                    {
                      width: "48%",
                      borderColor: theme.Button,
                      backgroundColor: isSelected ? theme.Button : theme.buttondark,
                    },
                    adviceOptions.length % 2 !== 0 && option === "Self-Research"
                      ? { alignSelf: "center" }
                      : null,
                  ]}
                  onPress={() => setAnswers({ ...answers, [step]: option })}
                >
                  <Text
                    style={[
                      styles.locationOptionText,
                      { color: isSelected ? theme.bttext : theme.text },
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }
      // 🟩 CASE 26 – Reaction Slider (theme integrated)
      case 26: {
        const reactValue = Number(answers[step]) || 1;
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
                height: verticalScale(28),
                justifyContent: "center",
              }}
            >
              {/* Background Bar */}
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: verticalScale(10),
                  backgroundColor: theme.buttonDisabled,
                  borderRadius: 40,
                }}
              />

              {/* Active Bar */}
              <View
                style={{
                  position: "absolute",
                  width: `${((reactValue - 1) / 2) * 100}%`, // 3 steps
                  height: verticalScale(10),
                  backgroundColor: theme.bar,
                  borderRadius: 40,
                }}
              />

              {/* Thumb (Dot) */}
              <View
                style={{
                  position: "absolute",
                  left: `${((reactValue - 1) / 2) * 90}%`,
                  transform: [{ translateX: -verticalScale(2) }],
                  width: verticalScale(28),
                  height: verticalScale(28),
                  borderRadius: 50,
                  backgroundColor: theme.bar,
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
                maximumValue={3}
                step={1}
                value={reactValue}
                onValueChange={(val) =>
                  setAnswers({ ...answers, [step]: val.toString() })
                }
              />
            </View>

            {/* --- Labels --- */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: scale(288),
                marginTop: verticalScale(10),
              }}
            >
              {["Manageable", "Neutral", "Stressful"].map((label, i) => (
                <Text
                  key={label}
                  style={{
                    fontFamily: "Avenir LT Std",
                    fontWeight: "400",
                    fontSize: moderateScale(10),
                    color:
                      i + 1 === reactValue ? theme.bar : theme.text + "99",
                  }}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        );
      }

      // 🟩 CASE 27 – Text Input (theme integrated)
      case 27: {
        return (
          <TextInput
            style={[
              styles.input,
              {
                color: theme.text,
                backgroundColor: theme.background,
                borderColor: theme.Button,
              },
            ]}
            placeholder="Type here ..."
            placeholderTextColor={theme.text}
            value={answers[step] || ""}
            onChangeText={(text) => setAnswers({ ...answers, [step]: text })}
          />
        );
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={[styles.container, { backgroundColor: theme.background }]}
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
        {step > 7 && <Text style={[styles.progressText, { textAlign: "center", alignSelf: "center" }]}>{step - 7} / 20</Text>}

        {/* Question text */}
        <Text style={[styles.questionText, { color: theme.text }]}>{renderQuestion()}</Text>

        {/* Question content */}
        {renderQuestionContent()}
      </View>

      {/* Navigation Buttons */}
      {step <= 6 ? (
        <View style={styles.verticalButtons}>
          {step > 1 && (
            <TouchableOpacity
              style={[styles.secondaryButton, { backgroundColor: theme.Button }]}
              onPress={handleBack}
            >
              <UpWard width={20} height={20} color={theme.bttext} />
            </TouchableOpacity>
          )}
          {step < 27 && (
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.Button }]}
              onPress={handleNext}
            >
              <DownWard width={20} height={20} color={theme.bttext} />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View style={styles.horizontalButtons}>
          {step > 1 && (
            <TouchableOpacity
              style={[styles.secondaryButton, { backgroundColor: theme.Button }]}
              onPress={handleBack}
            >
              <LeftWard width={20} height={20} color={theme.bttext} />
            </TouchableOpacity>
          )}
          {step < 27 && (
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.Button }]}
              onPress={handleNext}
            >
              <RightWard width={20} height={20} color={theme.background} />
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
    alignItems: "flex-start",
    paddingTop: scale(130),
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
    // opacity: 0.25,
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
    right: scale(40),
    flexDirection: "column",
    gap: scale(40),
  },
  horizontalButtons: {
    position: "absolute",
    bottom: verticalScale(40),
    right: scale(60),
    flexDirection: "row",
    gap: scale(120),
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