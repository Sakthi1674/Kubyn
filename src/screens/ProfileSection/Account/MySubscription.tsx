import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import BackWard from "../../../assets/icons/BackWard";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import colors from "../../../theme/color";


const MySubscriptions = () => {
  const [selectedMethod, setSelectedMethod] = useState("free");
  const navigation = useNavigation<NavigationProp<any>>();
   const colorScheme = useColorScheme();
   const theme = colors[colorScheme ?? "light"];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.Backbutton}
          onPress={() => navigation.navigate("AccountScreen")}
        >
          <BackWard width={10} height={16} color={theme.text} /> {/* ✅ Themed icon */}
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>My Subscriptions</Text>
      </View>

      {/* Card 1 - Free */}
      <TouchableOpacity
        style={[styles.card1, { backgroundColor: theme.buttondark }]}
        onPress={() => setSelectedMethod("free")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              {
                opacity: selectedMethod === "free" ? 1 : 0.2,
                borderColor: theme.Button,
              },
            ]}
          >
            <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
          </View>
        </View>
        <View style={[styles.badge1, { backgroundColor: theme.Button }]}>
          <Text style={[styles.badgeText, { color: theme.bttext }]}>Free</Text>
        </View>
      </TouchableOpacity>

      {/* Card 2 - Basic */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: theme.buttondark }]}
        onPress={() => setSelectedMethod("basic")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              {
                opacity: selectedMethod === "basic" ? 1 : 0.2,
                borderColor: theme.Button,
              },
            ]}
          >
            <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.Button }]}>
          <Text style={[styles.badgeText, { color: theme.bttext }]}>Paid</Text>
        </View>
      </TouchableOpacity>

      {/* Card 3 - Standard */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: theme.buttondark }]}
        onPress={() => setSelectedMethod("standard")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              {
                opacity: selectedMethod === "standard" ? 1 : 0.2,
                borderColor: theme.Button,
              },
            ]}
          >
            <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.Button }]}>
          <Text style={[styles.badgeText, { color: theme.bttext }]}>Paid</Text>
        </View>
      </TouchableOpacity>

      {/* Card 4 - Premium */}
      <TouchableOpacity
        style={[styles.card, { backgroundColor: theme.buttondark }]}
        onPress={() => setSelectedMethod("premium")}
        activeOpacity={0.8}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[
              styles.bigCircle,
              {
                opacity: selectedMethod === "premium" ? 1 : 0.2,
                borderColor: theme.Button,
              },
            ]}
          >
            <View style={[styles.smallCircle, { backgroundColor: theme.Button }]} />
          </View>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.Button }]}>
          <Text style={[styles.badgeText, { color: theme.bttext }]}>Paid</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MySubscriptions;

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
  title: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    marginLeft: scale(10),
    letterSpacing: scale(3),
    fontFamily: "Kollektif-Bold",
  },
  Backbutton: {
    padding: scale(10),
  },
  card1: {
    borderRadius: moderateScale(15),
    height: verticalScale(90),
    marginBottom: verticalScale(10),
    padding: scale(15),
    justifyContent: "center",
    marginTop: verticalScale(40),
  },
  card: {
    borderRadius: moderateScale(15),
    height: verticalScale(120),
    marginBottom: verticalScale(10),
    padding: scale(15),
    justifyContent: "center",
    marginTop: verticalScale(10),
  },
  badge1: {
    position: "absolute",
    bottom: verticalScale(77),
    right: scale(15),
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(23),
    paddingVertical: verticalScale(6),
  },
  badge: {
    position: "absolute",
    bottom: verticalScale(105),
    right: scale(15),
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(23),
    paddingVertical: verticalScale(6),
  },
  badgeText: {
    fontSize: moderateScale(12),
  },
  circleWrapper: {
    position: "absolute",
    top: verticalScale(15),
    left: scale(15),
  },
  bigCircle: {
    width: scale(18),
    height: scale(18),
    borderWidth: scale(2),
    borderRadius: scale(9),
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    width: scale(9),
    height: scale(9),
    borderRadius: scale(5),
  },
});
