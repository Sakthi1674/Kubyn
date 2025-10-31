import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,Image
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

import Bell from "../../assets/icons/Bell";
import Question from "../../assets/icons/Question";
import PlusIcon from "../../assets/icons/PlusIcon";
import ReturnIcon from "../../assets/icons/ReturnIcon";
import TwoArrowsIcon from "../../assets/icons/TwoArrowsIcon";
import SearchIcon from "../../assets/icons/SearchIcon";
import Brain from "../../assets/icons/Brain";
import UpdatedIcon from "../../assets/icons/UpdateIcon";
import Protect from "../../assets/icons/Protect";
import SomeIcon from "../../assets/icons/SomeIcon";
import { LineChart } from 'react-native-gifted-charts';


const BehaviorScreen = () => {
  const lineData = [
    { value: 90 },
    { value: 0 },
    { value: 60 },
    { value: -10 },
    { value: 70 },
    { value: 20 },
    { value: 15 },
    { value: 90 },
    { value: 10 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My Behavior</Text>
          <TouchableOpacity>
            <Bell />
          </TouchableOpacity>
        </View>

        {/* Share Section */}
        <View style={styles.shareBox}>
            <TouchableOpacity style={styles.question}>
          <Question />
          </TouchableOpacity>
          <Text style={styles.shareText}>
            Share, tweak, and track your finances.
          </Text>
        </View>

        {/* AI Spend Tracking */}
        <Text style={styles.sectionTitle}>AI Spend Tracking</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <LineChart
              data={lineData}
              curved
              height={90}
              width={120}
              thickness={3}
              color="#243D63"
              hideDataPoints
              hideRules
              spacing={12}
              hideYAxisText
              yAxisThickness={0}
              xAxisThickness={0}
              startFillColor="#243D63"
              endFillColor="#6C9BCF"
              startOpacity={0.4}
              endOpacity={0.1}
              backgroundColor="transparent"
            />
           </View>
 
          <TouchableOpacity style={styles.addExpenseButton}>
  <PlusIcon width={10} height={10} />
  <Text style={styles.addExpenseText}>Add Expense</Text>
</TouchableOpacity>


          <View style={styles.tip}>
            <ReturnIcon />
            <Text style={styles.tipText}>
              You don't need to stop spending, just start {"\n"} noticing.
            </Text>
          </View>

          <View style={styles.infoBox}>
            <TwoArrowsIcon />
            <Text style={styles.infoText}>
              You spent 20% less than last month. AI suggests {"\n"} investing
              the extra ₹2,400 in your Growth Fund.
            </Text>
          </View>
        </View>

        {/* Income & Lifestyle Section */}
        <Text style={styles.sectionTitle1}>Income & Lifestyle</Text>

        <View style={styles.lifestyleRow}>
          <View style={styles.lifestyleCard}>
            <Text style={styles.lifestyleLabel}>Archetype</Text>
            <Image
                        source={require('../../assets/images/DashBoard/RagstoRiches.png')}
                        style={styles.manimg}
                      />
            <Text style={styles.lifestyleText}>Rags - to - Riches</Text>
          </View>

          <View style={styles.matchCard}>
            <Text style={styles.matchLabel}>Your Lifestyle match is</Text>
            <Text style={styles.matchTitle}>The Adventurer</Text>
            <Image
                        source={require('../../assets/images/DashBoard/Adventurer.png')}
              
              style={styles.avatar}
            />
          </View>
        </View>

        <View style={styles.surplusCard}>
  <View style={styles.surplusIconBox}>
    <SomeIcon />
  </View>

  <View style={styles.surplusTextBox}>
    <Text style={styles.surplusTitle}>Surplus simulation</Text>
    <Text style={styles.surplusText}>
      Add the surplus to your travel fund.
    </Text>
  
  </View>
</View>
                


        {/* Bottom Navigation */}
        <View style={styles.bottomBar}>
          <TouchableOpacity >
            <SearchIcon  width={40} height={30} color="rgba(251, 253, 255, 1)"/>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.brainButton}>
  <Brain width={22} height={22} color="rgba(18, 18, 18, 1)"  />
</TouchableOpacity>

          <TouchableOpacity style={styles.centerButton}>
            <PlusIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <UpdatedIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Protect width={30} height={30} />
          </TouchableOpacity>
        </View>
          <Image
            source={require('../../assets/images/DashBoard/Kuboo.png')}
            style={styles.kubooImage}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BehaviorScreen;

const styles = StyleSheet.create({
    brain:{
        color:'rgba(18, 18, 18, 1)',
    },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
    alignItems: "center",
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "rgba(18, 18, 18, 1)",
    fontFamily:'Kollektif',
  },
  shareBox: {
    backgroundColor: "rgba(251, 253, 255, 1)",
    borderColor:'rgba(217, 217, 217, 0.5)',
    borderWidth:3,
    marginTop: verticalScale(26),
    width: scale(300),
    height: verticalScale(66),
    borderRadius: 20,
    padding: scale(14),
    alignItems: "center",
    flexDirection: "row",
    left: scale(20),
  },
  shareText: {
    color: "rgba(34, 63, 97, 1)",
    fontFamily: "Avenir LT Std",
    fontSize: moderateScale(12),
    fontWeight: "600",
    left: scale(30),
  },
  sectionTitle: {
    color: "rgba(18, 18, 18, 1)",
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: moderateScale(12),
    marginTop: verticalScale(20),
    marginHorizontal: scale(10),
  },
  sectionTitle1: {
    color: "#121212",
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontSize: moderateScale(12),
    marginTop: verticalScale(20),
    marginHorizontal: scale(20),
  },
  chartContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: scale(320),
    height: scale(240),
    shadowColor: "#878889",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    left: scale(15),
    marginTop: verticalScale(10),
  },
  chart: {
    height: verticalScale(100),
    left: scale(45),
    marginTop: verticalScale(21),
  },
addExpenseButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#243D63', // Navy blue background
  borderRadius: 30,           // Fully rounded ends
  height: verticalScale(28),
  width: scale(120),
  alignSelf: 'flex-end',
  marginRight: scale(15),
  bottom:scale(120)
},

addExpenseText: {
  color: 'rgba(251, 253, 255, 1)',
  fontSize: moderateScale(10),
  fontWeight: '700',
  marginLeft: scale(6),
  fontFamily: 'Avenir LT Std',
},

  tip: {
    flexDirection: "row",
    alignItems: "center",
    left: scale(30),
    bottom: verticalScale(50),
  },
  tipText: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: moderateScale(10),
    left: scale(20),
    fontWeight: "400",
    fontFamily: "Avenir LT Std",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "rgba(227, 233, 241, 1)",
    borderRadius: 20,
    width: scale(280),
    height: verticalScale(70),
    alignItems: "center",
    justifyContent: "center",
    left: scale(20),
    bottom: verticalScale(40),
  },
  infoText: {
    color: "rgba(34, 63, 97, 1)",
    fontSize: moderateScale(10),
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    lineHeight: 16,
    left: scale(10),
  },
  lifestyleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(20),
  },
  lifestyleCard: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 12,
    width: scale(109),
    height: verticalScale(75),
  },
  lifestyleLabel: {
    color: "rgba(34, 63, 97, 1)",
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    fontSize: moderateScale(11),
    opacity: 0.7,
    transform: [{ rotate: "270deg" }],
    right: 60,
  },
  lifestyleText: {
    color: "rgba(18, 18, 18, 1)",
    fontFamily: "Avenir LT Std",
    fontWeight: "700",
    fontSize: moderateScale(10),
    backgroundColor: "rgba(227, 233, 241, 1)",
    width: scale(80),
    height: verticalScale(16),
    borderRadius: moderateScale(12),
    left: scale(10),
    textAlign: "center",
  },
  avatar: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 78,
    height: 78,
    borderRadius:30,
  },
  manimg:{
    width:scale(50),
    height:verticalScale(50),
    left:scale(40),
    bottom:verticalScale(10),
  },
  matchCard: {
    backgroundColor: "rgba(227, 233, 241, 1)",
    borderRadius: 12,
    height: verticalScale(72),
    width: scale(190),
    padding: scale(10),
  },
  matchLabel: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: moderateScale(10),
    opacity: 0.7,
    fontFamily: "Avenir LT Std",
    fontWeight: "400",
    top:verticalScale(10),

  },
  matchTitle: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "rgba(18, 18, 18, 1)",
    fontFamily: "Avenir LT Std",
    top:verticalScale(20),
  },

surplusCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(227, 233, 241, 1)',
  borderRadius: 12,
  width: scale(310),
  height: verticalScale(62),
  marginTop: verticalScale(10),
  paddingHorizontal: scale(12),
  left: scale(20),
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  elevation: 1,
},

surplusIconBox: {
  backgroundColor: '#F1F4F8',
  borderRadius: 40,
  width: scale(36),
  height: scale(36),
  justifyContent: 'center',
  alignItems: 'center',
},

surplusTextBox: {
  marginLeft: scale(10),
},

surplusTitle: {
  color: 'rgba(18, 18, 18, 1)',
  fontWeight: '400',
  fontSize: moderateScale(10),
  fontFamily: 'Avenir LT Std',
  opacity:0.54,
//   top:verticalScale(20),
},

surplusText: {
  color: 'rgba(18, 18, 18, 1)',
  fontSize: moderateScale(10),
  fontFamily: 'Avenir LT Std',
  fontWeight: '400',
  top:verticalScale(10),

},
 kubooImage: {
    height: 70,
    width: 70,
    bottom: 90,
    left:scale(270),
     zIndex: 40,  
  },


  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#121212",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 25,
    top: verticalScale(30),
    height: verticalScale(55),
    width:scale(330),
    left:scale(10),
  },
 brainButton: {
  backgroundColor: 'rgba(251, 253, 255, 1)', 
  alignItems: 'center',
  justifyContent: 'center',
  shadowOpacity: 0.1,
   borderRadius: 25,          
    width: 44,
    height: 44,
  },

  centerButton: {
    backgroundColor: "#121212",
    width: 80,
    height: 80,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    bottom: 40,
    borderColor: "#F4F2EF",
    borderWidth: 5,
  },
  question:{
     backgroundColor: "rgba(214, 214, 214, 1)",
    borderRadius: 25,
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  
});
