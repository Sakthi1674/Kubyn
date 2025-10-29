import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import ReportIcon from "../../assets/icons/ReportIcon";
import ButtonComp from "../../components/common/ButtonComp";
import RupeeIcon from "../../assets/icons/RupeeIcon";
import BackWard from "../../assets/icons/BackWard";

const MySpend = ({ navigation }: any) => {
  const handleNext = () => {
    Alert.alert("Button Pressed", "Save button clicked!");
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <BackWard width={14} height={14} color={"rgba(34, 63, 97, 1)"} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Spends</Text>
        <View style={{ width: scale(14) }} />
      </View>

      {/* 🔹 Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.incomeButton}>
          <RefreshIcon width={24} height={24} color={"rgba(251,253,255,1)"} />
          <Text style={styles.incomeText}>Income</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.expenseButton}>
          <ReportIcon width={24} height={24} color={"rgba(34,63,97,0.4)"} />
          <Text style={styles.expenseText}>Expense</Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Info Box */}
      <View style={styles.infoBox}>
        {/* Line 1 — Amount */}
        <View style={styles.amountRow}>
          <RupeeIcon width={15} height={21} />
          <Text style={styles.amountText}>0.00</Text>
        </View>

        {/* Line 2 — Title Box */}
        <View style={styles.titleBox}>
          <Text style={styles.titleText}>Title</Text>
        </View>

        {/* Line 3 — Category Row */}
        <View style={styles.categoryRow}>
          <Text style={styles.categoryLabel}>Category</Text>
          <View style={styles.rentBox}>
            <Text style={styles.rentText}>Rent</Text>
          </View>
        </View>
      </View>

      {/* 🔹 Bottom Button */}
      <View style={styles.bottomButtonContainer}>
        <ButtonComp
          title="Save"
          style={{ backgroundColor: "rgba(34, 63, 97, 1)" }}
          textStyle={{ color: "#FFFFFF" }}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default MySpend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(50),
    marginBottom: verticalScale(20),
  },
  backButton: {
    padding: scale(8),
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "Kollektif",
    fontWeight: "700",
    fontSize: moderateScale(16),
    lineHeight: verticalScale(16),
    color: "rgba(34, 63, 97, 1)",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: verticalScale(10),
  },
  incomeButton: {
    width: scale(164),
    height: verticalScale(47),
    borderRadius: 10,
    backgroundColor: "rgba(34, 63, 97, 1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(12),
  },
  incomeText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(18),
    color: "rgba(251, 253, 255, 1)",
    lineHeight: verticalScale(18),
  },
  expenseButton: {
    width: scale(164),
    height: verticalScale(47),
    borderRadius: 10,
    backgroundColor: "rgba(227, 233, 241, 1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(12),
  },
  expenseText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(18),
    color: "rgba(34, 63, 97, 0.4)",
    lineHeight: verticalScale(18),
  },

  /* ✅ Info Box */
  infoBox: {
    width: scale(334),
    height: verticalScale(139),
    backgroundColor: "rgba(227, 233, 241, 0.8)",
    opacity: 0.74,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: verticalScale(30),
    padding: scale(16),
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.9,
    elevation: 5,
  },

  /* Line 1 */
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  amountText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontSize: moderateScale(24),
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.11,
  },

  /* Line 2 */
  titleBox: {
    width: scale(293),
    height: verticalScale(34),
    backgroundColor: "rgba(251,253,255,1)",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.85,
  },
  titleText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(12),
    color: "rgba(34, 63, 97, 1)",
    opacity: 0.21,
  },

  /* Line 3 */
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryLabel: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(12),
    color: "rgba(34, 63, 97, 1)",
  },
  rentBox: {
    width: scale(85),
    height: verticalScale(24),
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(34,63,97,1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8.6,
    elevation: 4,
  },
  rentText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(10),
    color: "rgba(34,63,97,1)",
  },

  /* ✅ Bottom Button */
  bottomButtonContainer: {
    position: "absolute",
    bottom: verticalScale(30),
    left: 0,
    right: 0,
    alignItems: "center",
  },
});