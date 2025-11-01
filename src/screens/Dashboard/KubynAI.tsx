import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  useColorScheme,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BackWard from "../../assets/icons/BackWard";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../theme/color";
import PlusIcon from "../../assets/icons/PlusIcon";
import MicIcon from "../../assets/icons/MicIcon";
import SendIcon from "../../assets/icons/SendIcon";

const KubynAI = ({ navigation }: any) => {
  const handleBack = () => {
    navigation.goBack();
  };

  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.background || "#FFFFFF" },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backWrapper}
      >
        <BackWard width={10} height={16} color={theme.text} />
      </TouchableOpacity>
        <Text style={[styles.title,{color:theme.Button}]}>Kubyn AI</Text>
      </View>

      {/* Chat Messages */}
      <ScrollView
        contentContainerStyle={styles.chatContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* AI Message */}
        <View style={styles.groupLeft}>
          <Image
            source={require("../../assets/images/DashBoard/KubynAI.png")}
            style={styles.characterLeft}
          />
          <Image
            source={require("../../assets/images/DashBoard/KubynAiSms1.png")}
            style={styles.bubbleLeft}
          />
        </View>

        {/* User Message */}
        <View style={styles.groupRight}>
          <Image
            source={require("../../assets/images/DashBoard/KubynAiSms2.png")}
            style={styles.bubbleRight}
          />
          <Image
            source={require("../../assets/images/DashBoard/KubynAiUserImg.png")}
            style={styles.characterRight}
          />
        </View>

        {/* Another AI Message */}
        <View style={styles.groupLeft}>
          <Image
            source={require("../../assets/images/DashBoard/KubynAI.png")}
            style={styles.characterLeft}
          />
          <Image
            source={require("../../assets/images/DashBoard/KubynAiSms1.png")}
            style={styles.bubbleLeft}
          />
        </View>
      </ScrollView>

      {/* Fixed Input Box at Bottom */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
        <View
          style={[
            styles.inputbox,
            {
              backgroundColor:theme.buttondark,
            },
          ]}
        >
          {/* Plus Icon */}
          <TouchableOpacity style={styles.iconButton}>
            <PlusIcon width={20} height={20} color={theme.Button} />
          </TouchableOpacity>

          {/* Text Input */}
          <TextInput
            placeholder="You can also Type..."
            placeholderTextColor="#587191"
            style={[styles.input, { color: theme.text }]}
          />

          {/* Mic Icon */}
          <TouchableOpacity style={styles.micbutton}>
            <MicIcon width={28} height={28} />
          </TouchableOpacity>

          {/* Send Icon */}
          <TouchableOpacity style={styles.sendButton}>
            <SendIcon width={28} height={28} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default KubynAI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  backWrapper: {
    position: "absolute",
    left: scale(0),
    top: verticalScale(4),
  },
  title: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "600",
    fontSize: moderateScale(20),
    color: "rgba(34, 63, 97, 1)",
    left:scale(30),
  },
  chatContainer: {
    paddingVertical: 20,
    paddingBottom: 120, // so last message isn't hidden behind input
  },
  groupLeft: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 15,
   
  },
  characterLeft: {
  width: scale(42),
  height: scale(42),
  borderRadius: scale(21),
    resizeMode: "contain",
    marginRight: -60,
    marginBottom: 110,
    backgroundColor:"#ffff",
  },
  bubbleLeft: {
    width: 300,
    height: 130,
    resizeMode: "contain",
  },
  groupRight: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 1,
  },
  bubbleRight: {
    width: 300,
    height: 130,
    resizeMode: "contain",
    marginRight: -50,
  },
  characterRight: {
    width: 58,
    height: 55,
    resizeMode: "contain",
  },
  inputbox: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingVertical: verticalScale(8),
  borderRadius: moderateScale(35),
  shadowColor: "#223F61",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 4,
  width: "100%",
  alignSelf: "center", // ✅ this works fine now
  position: "absolute",
  bottom: 20,

},

  iconButton: {
  width: scale(42),
  height: scale(42),
  borderRadius: scale(21),
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E3E9F1CC",
  marginHorizontal: scale(4),
  shadowColor: "#223F61",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
  },
  micbutton:{
   width: scale(40),
    height: scale(40),
    borderRadius: scale(21),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#FBFDFF",
    shadowColor: "#223F61",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: scale(4),
    marginLeft: scale(6),
  },
input: {
  flex: 1,
  fontFamily: "Avenir LT Std",
  fontSize: moderateScale(15),
  paddingHorizontal: scale(10),
  opacity: 0.8,
  textAlignVertical: "center", // ✅ Centers text vertically
},

  sendButton: {
    width: scale(42),
    height: scale(42),
    borderRadius: scale(21),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFDFF",
    shadowColor: "#223F61",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginHorizontal: scale(4),
    marginLeft: scale(6),
  },
});
