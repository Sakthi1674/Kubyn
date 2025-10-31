import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,

} from 'react-native';
import Bell from '../../assets/icons/Bell';
import Star from '../../assets/icons/Star';
import Brain from '../../assets/icons/Brain';
import UpdatedIcon from '../../assets/icons/UpdateIcon';
import Protect from '../../assets/icons/Protect';
import Hand from '../../assets/icons/Hand';
import { PieChart } from 'react-native-chart-kit';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import SearchIcon from '../../assets/icons/SearchIcon';
import PlusIcon from '../../assets/icons/PlusIcon ';
import DatabaseIcon from '../../assets/icons/DatabaseIcon';
import RupeeIcon from '../../assets/icons/RupeeIcon';
import ArrowDown from '../../assets/icons/ArrowDown';
import Download from '../../assets/icons/Download';


const Introduction = () => {
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
    },
  ];
  return (
    <View style={styles.container}>
        {/* Top Section */}
        <View style={styles.headerContainer}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
                source={require('../../assets/images/ProfileSection/Profile.jpg')}
                style={styles.profileImage}
              />
              <View style={styles.header}>
                <Text style={styles.greetingText}>Good Morning,</Text>
                <Text style={styles.nameText}>John!</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bell}>
              <Bell />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container1}>
          {/* Left Side Text */}
          <View >
            <Text style={styles.infoText}>
              A high score means you can trust{'\n'} it, while a low score means it's {'\n'}less certain.
            </Text>
          </View>

          {/* Right Side Donut Chart */}
          <View style={styles.chartContainer}>
            <View style={{ transform: [{ rotate: '180deg' }] }}>
              <PieChart
                data={data}
                width={260}
                height={200}
                chartConfig={{
                  color: () => '#243D63',
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                hasLegend={false}
                center={[0, 0]}
              />
            </View>

            {/* Percentage in center */}
            <View style={styles.centerCircle}>
              <Text style={styles.percentText}>75%</Text>
            </View>
          </View>
        </View>



        {/* Balance and Spends */}
        <View style={styles.cardRow}>
          <View style={[styles.balanceCard, styles.shadow]}>
            <View style={styles.database}>
              <Text style={styles.cardTitle}>Balance</Text>
              <TouchableOpacity><DatabaseIcon width={44} height={44} color='rgba(251, 253, 255, 1)' /></TouchableOpacity>
            </View>
            <RupeeIcon width={16} height={16} color='rgba(255, 255, 255, 1)' />
            <Text style={styles.balanceText}>12,450</Text>
          </View>

          <View style={[styles.spendsCard, styles.shadow]}>
            <View style={styles.database}>
              <Text style={styles.cardTitle1}>Spends</Text>
              <TouchableOpacity>
                <Hand />
              </TouchableOpacity>
            </View>
            <RupeeIcon width={16} height={16} color='rgba(18, 18, 18, 1)' />

            <Text style={styles.spendsText}>5000</Text>
          </View>
        </View>

        {/* Income vs Expenses Box */}
        <Text style={styles.sectionTitle}>Income vs Expenses</Text>
        <View style={[styles.sectionBox, styles.shadow]}>
          <View style={styles.dropdownWrapper}>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>weekly</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.down}>
              <ArrowDown width={10} height={14} />
            </TouchableOpacity>
          </View>



          <View style={styles.pie}>
            <PieChart
              data={[
                {
                  name: 'Expenses',
                  population: 25,
                  color: 'rgba(227, 233, 241, 1)',
                  legendFontColor: 'rgba(227, 233, 241, 1)',
                  legendFontSize: 12,
                },
                {
                  name: 'Income',
                  population: 75,
                  color: '#243D63',
                  legendFontColor: '#243D63',
                  legendFontSize: 12,
                },

              ]}
              width={230}
              height={160}
              chartConfig={{
                color: () => '#243D63',
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="10"
              hasLegend={false}
              center={[1, 0]}
            />

          </View>
        </View>

        <View style={styles.legendWrapper}>
          <View style={styles.legendGroup}>
            <View style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: 'rgba(34, 63, 97, 1)' }]} />
              <Text style={styles.legendText}>Income</Text>
            </View>
            <View style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: 'rgba(227, 233, 241, 1)' }]} />
              <Text style={styles.legendText}>Expenses</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.reportButton}>
            <Download width={34} height={20} />

            <Text style={styles.viewReport}>View Report</Text>
          </TouchableOpacity>
        </View>
        {/* Explore Section */}
{/* Explore Section */}
<View style={[styles.exploreBox, styles.shadow]}>
  <TouchableOpacity style={styles.star1}>
    <Star />
  </TouchableOpacity>

  <View style={{ flex: 1, marginLeft: scale(12) }}>
    <Text style={styles.exploreText}>
      You spent 20% less than last{'\n'}month. AI suggests investing the{'\n'}extra ₹2,400 in your Growth Fund.
    </Text>

    <TouchableOpacity style={styles.exploreButton}>
      <Text style={styles.exploreButtonText}>EXPLORE</Text>
    </TouchableOpacity>
  </View>
  {/* ✅ Fixed Kuboo image placement */}
  <Image
    source={require('../../assets/images/DashBoard/Kuboo.png')}
    style={styles.kubooImage}
    resizeMode="contain"
  />
</View>
        {/* Bottom Navigation */}
        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.star}>
            <SearchIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Brain />
          </TouchableOpacity>
          <TouchableOpacity style={styles.centerButton}>
            <TouchableOpacity style={styles.plus}>
              <PlusIcon />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity>
            <UpdatedIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Protect width={30} height={30} />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFD',
  },
  headerContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  greetingText: {
    fontFamily: 'Kollektif',
    fontSize: moderateScale(16),
    fontWeight: 400,
    color: 'rgba(18, 18, 18, 1)',
    left: scale(15),

  },
  nameText: {
    fontFamily: 'Kollektif',
    fontSize: moderateScale(16),
    fontWeight: 700,
    color: 'rgba(18, 18, 18, 1)',
    left: scale(15),

  },
  bell:{
    right:scale(10),
    marginTop:verticalScale(10),
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    height: verticalScale(77),
    width: scale(300),
    left: scale(30),

  },
  database: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceCard: {
    backgroundColor: 'rgba(34, 63, 97, 1)',
    flex: 0.48,
    borderRadius: 12,
    padding: 15,
  },
  spendsCard: {
    backgroundColor: 'rgba(227, 233, 241, 1)',
    flex: 0.48,
    borderRadius: 12,
    padding: 15,
  },
  cardTitle: {
    fontFamily: 'Avenir LT Std',
    fontWeight: 600,
    fontSize: moderateScale(10),
    color: 'rgba(251, 253, 255, 1)',
  },
  cardTitle1: {
    fontFamily: 'Avenir LT Std',
    fontWeight: 600,
    fontSize: moderateScale(10),
    color: 'rgba(18, 18, 18, 1)',
  },
  balanceText: {
    fontSize: moderateScale(20),
    color: 'rgba(251, 253, 255, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
    bottom: verticalScale(18),
    left: scale(15),
  },
  spendsText: {
    fontSize: moderateScale(20),
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
    bottom: verticalScale(18),
    left: scale(15),
  },
  sectionBox: {
    backgroundColor: '#FFFFFF',
    width: scale(330),
    height: verticalScale(130),
    marginTop: 25,
    borderRadius: 16,
    alignContent: 'flex-end',
    left:scale(10),
  },
  sectionTitle: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    fontFamily: 'Avenir LT Std',

    color: 'rgba(18, 18, 18, 1)',
    left: scale(30),
    marginTop: verticalScale(10),
  },
  dropdownWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15, // spacing from right edge
    marginTop: 10,
  },
  down: {
    top: verticalScale(5)
  },
  dropdown: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignSelf: 'flex-end', // optional extra alignment
  },

  dropdownText: {
    color: 'rgba(34, 63, 97, 1)',
    fontSize: moderateScale(8),
    fontWeight: '700',
  },
  kubooImage: {
    height: 70,
    width: 70,
    top: 55,
    right:scale(15),
  },
  exploreBox: {
    flexDirection: 'row',
    backgroundColor: '#243D63',
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 14,
    padding: 15,
    height: verticalScale(80),
    bottom: 80,
  },
  exploreText: {
    color: 'rgba(251, 253, 255, 1)',
    fontSize: moderateScale(10),
    lineHeight: verticalScale(13),
    left: scale(15),
    fontFamily: 'Avenir LT Std',
    fontWeight: 400

  },
  exploreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    left: scale(29),
    top: verticalScale(10),
  },
  exploreButtonText: {
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: '700',
    fontFamily: 'Kollektif',
    fontSize: moderateScale(10),
    letterSpacing: scale(2),
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(18, 18, 18, 1)',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    margin: 20,
    bottom: 60,
    height: verticalScale(55),
  },
  shadow: {
    shadowColor: '#223F61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  star: {
    backgroundColor: '#FBFDFF', // white button
    borderRadius: 25,           // make it perfectly round
    width: 44,
    height: 44,
    alignItems: 'center',       // center horizontally
    justifyContent: 'center',   // center vertically
  },
  star1: {
    backgroundColor: '#FBFDFF', // white button
    borderRadius: 25,           // make it perfectly round
    width: 44,
    height: 44,
    alignItems: 'center',       // center horizontally
    justifyContent: 'center',
  },
  pie: {
    alignItems: 'center',
    right: 100,
    transform: [{ rotate: '90deg' }]

  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFD',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
  },

  infoText: {
    fontSize: moderateScale(10),
    fontWeight: 400,
    color: 'rgba(34, 63, 97, 1)',
    lineHeight: verticalScale(18),
    fontFamily: 'Avenir LT Std'
  },
  chartContainer: {
    width: 220,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    right: 50,

  },
  centerCircle: {
    position: 'absolute',
    width: 100,
    height: 95,
    borderRadius: 45,
    backgroundColor: '#F7FAFD',
    alignItems: 'center',
    justifyContent: 'center',
    left: 110,
  },
  percentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#243D63',
  },
  legendWrapper: {
    alignItems: 'flex-end',
    // marginHorizontal: 10,

  },

  legendGroup: {
    flexDirection: 'column',
    bottom: 120,
    right: 110,
    

  },

  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },

  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },

  legendText: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: moderateScale(10),
    fontFamily: 'Avenir LT Std',

    fontWeight: '300',
  },

  reportButton: {
    color: 'rgba(18, 18, 18, 1)',
    fontWeight: 300,
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    bottom: 100,
    right: 30,


  },

  viewReport: {

    color: 'rgba(18, 18, 18, 1)',
    fontFamily: 'Avenir LT Std',
    fontWeight: 300,
    fontSize: moderateScale(10),

  },
  centerButton: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
    width: 90,
    height: 90,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 60,
    borderColor: 'rgba(244, 242, 239, 1)',
    borderWidth: 5,

  },
  plus: {

    alignItems: 'center',
    justifyContent: 'center',
  }

});