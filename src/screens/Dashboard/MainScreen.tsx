import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, ScrollView } from "react-native";
import NotificationBell from "../../assets/icons/NotificationBell";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import RupeeIcon from "../../assets/icons/RupeeIcon";
import HandPointer from "../../assets/icons/HandPointer";
import DatabaseIcon from "../../assets/icons/DatabaseIcon";
import Hand from "../../assets/icons/Hand";
import Star from "../../assets/icons/Star";
import ArrowDown from "../../assets/icons/ArrowDown";
import Download from "../../assets/icons/Download";
import { PieChart } from "react-native-chart-kit";
import colors from "../../theme/color";
import CoinsIcon from "../../assets/icons/CoinIcon";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import DonutChart from "./DonutChart";

type RootStackParamList = {
  Notification: undefined;
  ProfileScreen: undefined;
};
const MainScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === "dark" ? "dark" : "light"];
  const data = [
    {
      name: 'High',
      population: 75,
      color: 'rgba(34, 63, 97, 1)',
      legendFontColor: 'rgba(34, 63, 97, 1)',
      legendFontSize: 12,
    },
    {
      name: 'Low',
      population: 25,
      color: 'rgba(214, 214, 214, 1)',
      legendFontColor: 'rgba(34, 63, 97, 1)',
      legendFontSize: 12,
    },]
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
      bounces={true}
    >

      <View style={styles.header}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
            <Image
              source={require("../../assets/images/ProfileSection/Profile.jpg")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <View style={styles.header}>
            <Text style={[styles.greetingText, { color: theme.text }]}>
              Good Morning,
            </Text>
            <Text style={[styles.nameText, { color: theme.text }]}>
              John!
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <NotificationBell fill={theme.text} />
        </TouchableOpacity>
      </View>


      <View style={styles.container1}>
        <Text style={[styles.infoText, { color: theme.Button }]}>
          A high score means you can trust{'\n'}
          it, while a low score means it's{'\n'}
          less certain.
        </Text>

        <DonutChart/>
      </View>

      <View style={styles.cardRow}>
        {/* 💰 Balance Card */}

        <View
          style={[
            styles.balanceCard,
            styles.shadow,
          ]}
        >
          <View>
            <Text style={styles.cardTitle}>
              Balance
            </Text>
          </View>

          <View style={styles.amount}>
            <RupeeIcon width={16} height={16} color="#ffff" />
            <Text style={styles.balanceText}>
              12,450
            </Text>
          </View>

          <TouchableOpacity style={styles.icon}>
            <CoinsIcon width={50} height={50} stroke={theme.icon + '40'} />
          </TouchableOpacity>
        </View>

        {/* 💳 Spends Card */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("MySpend")}
          style={[styles.spendsCard, styles.shadow]}
        >
          <View>
            <Text style={styles.cardTitle1}>Spends</Text>
          </View>

          <View style={styles.amount}>
            <RupeeIcon width={16} height={16} />
            <Text style={styles.spendsText}>5,000</Text>
          </View>

          <View style={styles.icon}>
            <Hand fill={theme.icon} />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>Income vs Expenses</Text>

      <View style={[styles.incomeBox, { backgroundColor: theme.introbg }]}>
        {/* Dropdown */}
        <View style={styles.dropdownWrapper}>
          <Text style={[styles.dropdownText, { color: theme.text }]}>Weekly</Text>
          <ArrowDown width={10} height={14} color={theme.text} />
        </View>

        {/* Pie Chart */}
        <View style={styles.pie}>
          <PieChart
            data={[
              {
                name: 'Expenses',
                population: 25,
                color: theme.chart, // light gray tone
                legendFontColor: theme.bar,
                legendFontSize: 12,
              },
              {
                name: 'Income',
                population: 75,
                color: theme.bar, // main blue tone
                legendFontColor: theme.bar,
                legendFontSize: 12,
              },
            ]}
            width={220}
            height={140}
            chartConfig={{
              color: () => theme.buttondark,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="10"
            hasLegend={false}
            center={[0, 0]}
          />
        </View>

        {/* Legend */}
        <View>
          <View style={styles.legendRow}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: theme.bar },
              ]}
            />
            <Text style={[styles.legendText, { color: theme.textSecondary }]}>Income</Text>
          </View>
          <View style={styles.legendRow}>
            <View
              style={[
                styles.legendDot,
                { backgroundColor: theme.chart },
              ]}
            />
            <Text style={[styles.legendText, { color: theme.textSecondary }]}>Expenses</Text>
          </View>
        </View>

        {/* View Report Button */}
        <TouchableOpacity
          style={[
            styles.reportButton,

          ]}
        >
          <Download width={24} height={20} stroke={theme.icon} />
          <Text style={[styles.viewReport, { color: theme.text }]}>
            View Report
          </Text>
        </TouchableOpacity>
      </View>


      <View style={[styles.exploreBox, styles.shadow, { backgroundColor: theme.Button }]}>
        <TouchableOpacity style={[styles.star1, { backgroundColor: theme.background }]}>
          <Star color={theme.text} />
        </TouchableOpacity>

        <Text style={[styles.exploreText, { color: theme.background }]}>
          You spent 20% less than last {'\n'} month. AI suggests investing the{'\n'} extra ₹2,400 in your Growth Fund.
        </Text>

        <TouchableOpacity style={[styles.exploreButton, { backgroundColor: theme.background }]}>
          <Text style={[styles.exploreButtonText, { color: theme.text }]}>
            EXPLORE
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>);
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(40),
    paddingHorizontal: scale(15),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  profileImage: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(25),
  },
  greetingText: {
    fontFamily: 'Kollektif',
    fontSize: moderateScale(16),
    fontWeight: '400',
    color: 'rgba(18, 18, 18, 1)',
  },
  nameText: {
    fontFamily: 'Kollektif',
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: 'rgba(18, 18, 18, 1)',
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scale(16),
    padding: scale(20),
    justifyContent: 'space-between',
  },
  infoText: {
    fontSize: moderateScale(10),
    fontWeight: '400',
    color: 'rgba(34, 63, 97, 1)',
    lineHeight: verticalScale(18),
    fontFamily: 'Avenir LT Std',
  },
  chartContainer: {
    width: scale(100),          // reduced from 220 → 160
    height: verticalScale(75),  // reduced from 80 → 60
    alignItems: 'center',
    justifyContent: 'center',
    right: scale(25),           // moved slightly closer (70 → 40)
  },
  centerCircle: {
    position: 'absolute',
    width: scale(70),           // reduced from 100 → 80
    height: verticalScale(60),  // reduced from 90 → 70
    borderRadius: scale(40),
    backgroundColor: '#F7FAFD',
    alignItems: 'center',
    justifyContent: 'center',
    left: scale(45),            // shifted closer (100 → 80)
  },
  percentText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#243D63',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  balanceCard: {
    backgroundColor: 'rgba(34, 63, 97, 1)',
    flex: 0.48,
    borderRadius: scale(12),
    padding: scale(15),
  },
  shadow: {
    shadowColor: '#223F61',
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.2,
    shadowRadius: scale(4),
    elevation: 3,
  },
  database: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Avenir LT Std',
    fontWeight: '600',
    fontSize: moderateScale(10),
    color: 'rgba(251, 253, 255, 1)',
    padding: scale(5),
  },
  balanceText: {
    fontSize: moderateScale(20),
    color: 'rgba(251, 253, 255, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
  },
  spendsCard: {
    backgroundColor: 'rgba(227, 233, 241, 1)',
    flex: 0.48,
    borderRadius: scale(12),
    padding: scale(15),
  },
  cardTitle1: {
    fontFamily: 'Avenir LT Std',
    fontWeight: '600',
    fontSize: moderateScale(10),
    color: 'rgba(18, 18, 18, 1)',
    padding: scale(5),
  },
  spendsText: {
    fontSize: moderateScale(20),
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
    marginTop: verticalScale(20),
  },
  icon: {
    position: 'absolute',
    top: verticalScale(15),
    right: scale(15),
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    fontFamily: 'Avenir LT Std',
    color: 'rgba(18, 18, 18, 1)',
    marginTop: verticalScale(20),
  },
  exploreBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#243D63',
    borderRadius: scale(14),
    padding: scale(30),
    marginTop: verticalScale(10),
    gap: scale(15),
    marginBottom: verticalScale(50)
  },
  star1: {
    backgroundColor: '#FBFDFF',
    borderRadius: scale(25),
    width: scale(44),
    height: scale(44),
    alignItems: 'center',
    justifyContent: 'center',
  },
  exploreText: {
    color: 'rgba(251, 253, 255, 1)',
    fontSize: moderateScale(10),
    lineHeight: verticalScale(13),
    fontFamily: 'Avenir LT Std',
    fontWeight: '400',
  },
  exploreButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(14),
    borderRadius: scale(10),
  },
  exploreButtonText: {
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
    fontSize: moderateScale(10),
    letterSpacing: scale(2),
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(4),
  },
  legendDot: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(5),
    marginRight: scale(6),
  },
  legendText: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',
    fontWeight: '300',
  },
  dropdownWrapper: {
    position: 'absolute',
    top: verticalScale(20),
    right: scale(20),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(12),
    borderRadius: scale(20),
    borderWidth: 0.25,
    borderColor: '#223F61',
    opacity: 0.83,
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(4),
  },
  dropdownText: {
    color: 'rgba(34, 63, 97, 1)',
    fontSize: moderateScale(11),
    fontWeight: '700',
  },
  incomeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBFDFF',
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: scale(20),
    opacity: 1,
    padding: scale(15),
    marginVertical: verticalScale(10),
    position: 'relative',
  },
  reportButton: {
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: '300',
    fontSize: moderateScale(10),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    position: 'absolute',
    right: scale(10),
    bottom: verticalScale(10),
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  viewReport: {
    color: 'rgba(18, 18, 18, 1)',
    fontFamily: 'Avenir LT Std',
    fontWeight: '300',
    fontSize: moderateScale(10),
  },
  pie: {
    width: scale(120),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});