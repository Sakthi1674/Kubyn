import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  useColorScheme,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import ReportIcon from "../../assets/icons/ReportIcon";
import ButtonComp from "../../components/common/ButtonComp";
import RupeeIcon from "../../assets/icons/RupeeIcon";
import BackWard from "../../assets/icons/BackWard";
import colors from "../../theme/color";

const MySpend = ({ navigation }: any) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;

  const handleNext = () => {
    // Alert.alert("Button Pressed", "Save button clicked!");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* 🔹 Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.Button }]}>
          My Spends
        </Text>

        <View style={{ width: scale(14) }} />
      </View>

      {/* 🔹 Buttons Row */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.incomeButton, { backgroundColor: theme.Button }]}
        >
          <RefreshIcon width={24} height={24} color={theme.bttext} />
          <Text style={[styles.incomeText, { color: theme.bttext }]}>
            Income
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.expenseButton,
            { backgroundColor: theme.option },
          ]}
        >
          <ReportIcon width={24} height={24} color={theme.textSecondary} />
          <Text style={[styles.expenseText, { color: theme.textSecondary }]}>
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      {/* 🔹 Info Box */}
      <View
        style={[
          styles.infoBox,
          {
            backgroundColor: theme.option,
            shadowColor: theme.text,
          },
        ]}
      >
        <View style={styles.amountRow}>
          <RupeeIcon width={15} height={21} color={theme.bar} />
          <Text style={styles.amountText}>0.00</Text>
        </View>

        <View
          style={[
            styles.titleBox,
            { backgroundColor: theme.bttext },
          ]}
        >
          <Text style={[styles.titleText, { color: theme.textSecondary }]}>
            Title
          </Text>
        </View>

        <View style={styles.categoryRow}>
          <Text style={[styles.categoryLabel, { color: theme.bar }]}>
            Category
          </Text>
          <View
            style={[
              styles.rentBox,
              { backgroundColor: theme.background, shadowColor: theme.text },
            ]}
          >
            <Text style={[styles.rentText, { color: theme.text }]}>Rent</Text>
          </View>
        </View>
      </View>

      {/* 🔹 Bottom Button */}
      <View style={styles.bottomButtonContainer}>
        <ButtonComp
          title="Save"
          style={{ backgroundColor: theme.Button }}
          textStyle={{ color: theme.bttext }}
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
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(20),
  },
  backButton: {
    position: "absolute",
    top: verticalScale(2),
  },
  headerTitle: {
    fontFamily: "Kollektif-Bold",
    fontWeight: "700",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(16),
    left: scale(30),
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(10),
    gap: scale(20),
  },
  incomeButton: {
    paddingHorizontal: 23,
    paddingVertical: 18,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  incomeText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(18),
    lineHeight: verticalScale(18),
  },
  expenseButton: {
    paddingHorizontal: 23,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  expenseText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(18),
    lineHeight: verticalScale(18),
  },
  infoBox: {
    height: verticalScale(139),
    borderRadius: 15,
    alignSelf: "center",
    marginTop: verticalScale(30),
    padding: scale(16),
    justifyContent: "space-around",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 0.9,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(6),
  },
  amountText: {
    fontFamily: "Avenir LT Std 95 Black",
    fontWeight: "700",
    fontSize: moderateScale(24),
    opacity: 0.11,
  },
  titleBox: {
    width: scale(255),
    height: verticalScale(34),
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.85,
  },
  titleText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(12),
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryLabel: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(12),
  },
  rentBox: {
    width: scale(85),
    height: verticalScale(24),
    opacity: 0.85,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8.6,
    elevation: 4,
  },
  rentText: {
    fontFamily: "Avenir LT Std 65 Medium",
    fontWeight: "600",
    fontSize: moderateScale(10),
  },
  bottomButtonContainer: {
    position: "absolute",
    bottom: verticalScale(50),
    left: 0,
    right: 0,
    alignItems: "center",
  },
});
