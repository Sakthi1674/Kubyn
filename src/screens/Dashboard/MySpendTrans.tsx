import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  useColorScheme,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import BackWard from "../../assets/icons/BackWard";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import ExpenseIcon from "../../assets/icons/ExpenseIcon";
import NoTransactionsIcon from "../../assets/icons/NoTransactionsIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import UpIcon from "../../assets/icons/UpIcon";
import DownIcon from "../../assets/icons/DownIcon";
import colors from "../../theme/color";

const MySpendTrans = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];
  const transactions = [
    { id: "1", name: "Kowsalya", amount: "+2500", time: "Today, 2:30" },
    { id: "2", name: "Kowsalya", amount: "-500", time: "Today, 4:30" },
  ];

  return (

    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>

      {/* Header Section */}
      <View style={[styles.headerContainer, { backgroundColor: theme.Button }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackWard width={20} height={20} color={theme.bttext} />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.bttext }]}>My Spends</Text>
        </View>

        {/* Income and Expense Section */}
        <View style={styles.incomeExpenseRow}>
          {/* Income */}
          <View style={styles.infoBox}>
            <View style={styles.iconCircle}>
              <IncomeIcon width={32} height={32} color={theme.icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.labelText, { color: theme.background }]}>Income</Text>
              <Text style={[styles.amountText, { color: theme.textSecondary }]}>$13,500</Text>
            </View>
          </View>

          {/* Expense */}
          <View style={styles.infoBox}>
            <View style={styles.iconCircle}>
              <ExpenseIcon width={32} height={32} color={theme.icon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={[styles.labelText, { color: theme.background }]}>Expense</Text>
              <Text style={[styles.amountText, { color: theme.textSecondary }]}>$4,500</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Transactions Section */}
      {transactions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <NoTransactionsIcon />
          <Text style={[styles.noText, { color: theme.textSecondary }]}>
            No transactions available
          </Text>
        </View>
      ) : (
        <>
          <Text style={[styles.subhead, { color: theme.text }]}>Last 7 days</Text>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.transactionCard, { backgroundColor: theme.pop }]}>
                <View style={[styles.arrowCircle, { backgroundColor: theme.iconbg }]}>
                  {item.amount.startsWith('-') ? (
                    <DownIcon width={25} height={25} />
                  ) : (
                    <UpIcon width={25} height={25} />
                  )}
                </View>
                <View style={styles.transactionDetails}>
                  <Text style={[styles.transactionTime, { color: theme.textSecondary }]}>
                    {item.time}
                  </Text>
                  <Text style={styles.transactionName}>
                    {item.name}
                  </Text>

                </View>
                <Text
                  style={[
                    styles.amount,
                    {
                      color: item.amount.startsWith('-') ? theme.notification : theme.green,
                    },
                  ]}
                >
                  {item.amount}
                </Text>
              </View>
            )}
          />
        </>
      )}

      {/* Floating Add Button */}
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: theme.text }]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CreateGoal")}
      >
        <PlusIcon color={theme.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MySpendTrans;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8FAFF",
  },

  /** Header **/
  headerContainer: {
    backgroundColor: "#243D63",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(60),
    paddingBottom: verticalScale(30),
    elevation: 4,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(25),
  },
  headerTitle: {
    color: "#FBFDFF",
    fontSize: moderateScale(18),
    fontWeight: "700",
    fontFamily: "Kollektif",
    marginLeft: scale(20),
  },

  /** Income & Expense **/
  incomeExpenseRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: verticalScale(20),
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconCircle: {
    width: scale(32),
    height: scale(32),
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(5),
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  labelText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    fontSize: moderateScale(15),
    color: "#FBFDFF",
    opacity: 0.9,
  },

  amountText: {
    fontFamily: "Avenir LT Std",
    fontWeight: "500",
    fontSize: moderateScale(13),
    color: "#FFFFFF",
    opacity: 0.7,
  },

  /** Empty State **/
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(120),
  },
  noText: {

    fontSize: moderateScale(20),
    fontFamily: "Avenir LT Std",
    fontWeight: "600",
    marginTop: verticalScale(20),
  },

  /** Transactions **/
  subhead: {
    fontFamily: "Open Sans",
    fontWeight: "600",
    fontSize: moderateScale(16),
    color: "rgba(34, 63, 97, 1)",
    marginLeft: scale(16),
    marginTop: verticalScale(20),
  },
  transactionCard: {
    backgroundColor: "rgba(227, 233, 241, 1)",
    marginHorizontal: scale(16),
    marginTop: verticalScale(10),
    borderRadius: 12,
    padding: scale(15),
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  arrowCircle: {
    width: scale(40),
    height: verticalScale(40),
    borderRadius: 21,
    backgroundColor: "#FBFDFF",
    justifyContent: "center",
    alignItems: "center",
  },
  transactionDetails: {
    flex: 1,
    marginLeft: scale(12),
  },
  transactionName: {
    color: "rgba(18, 18, 18, 1)",
    fontFamily: "Avenir LT Std",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
  transactionTime: {
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    color: "rgba(34, 63, 97, 1)",
    fontSize: moderateScale(14),
  },
  amount: {
    fontSize: moderateScale(14),
    fontWeight: "600",
    fontFamily: "Avenir LT Std",
  },

  /** Floating Add Button **/
  addButton: {
    position: "absolute",
    bottom: verticalScale(80),
    right: scale(25),
    backgroundColor: "#121212",
    width: scale(55),
    height: verticalScale(55),
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
