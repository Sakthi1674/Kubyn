import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Bell from '../../assets/icons/Bell';
import Star from '../../assets/icons/Star'
import Brain from '../../assets/icons/Brain';
import UpdatedIcon from '../../assets/icons/UpdateIcon';
import Protect from '../../assets/icons/Protect';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DatabaseIcon from '../../assets/icons/DatabaseIcon';
import Hand from '../../assets/icons/Hand';


const Introduction = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Section */}
        <View style={styles.headerContainer}>
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <Image
            // source={require('../../../assets/images/ProfileSection/Profile.jpg')}
                
                style={styles.profileImage}
              />
              <View style={styles.header}>
                <Text style={styles.greetingText}>Good Morning,</Text>
                <Text style={styles.nameText}>John!</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Bell />
            </TouchableOpacity>
          </View>

          <Text style={styles.subText}>
           A high score means you can trust{'\n'} it, while a low score means it's {'\n'}less certain.

          </Text>
        </View>

        {/* Balance and Spends */}
        <View style={styles.cardRow}>
          <View style={[styles.balanceCard, styles.shadow]}>
            <View style={styles.database}>    
                      <Text style={styles.cardTitle}>Balance</Text>
            <TouchableOpacity>
              <DatabaseIcon />
            </TouchableOpacity>
            </View>

            <Text style={styles.balanceText}>₹12,450</Text>
          </View>

          <View style={[styles.spendsCard, styles.shadow]}>
            <View style={styles.database}>
            <Text style={styles.cardTitle}>Spends</Text>
            <TouchableOpacity>
              <Hand />
            </TouchableOpacity>
            </View>
            <Text style={styles.spendsText}>₹5000</Text>
          </View>
        </View>

        {/* Income vs Expenses Box */}
            <Text style={styles.sectionTitle}>Income vs Expenses</Text>

        <View style={[styles.sectionBox, styles.shadow]}>
          
          <View style={styles.rowBetween}>
            <TouchableOpacity style={styles.dropdown}>
              <Text style={styles.dropdownText}>weekly </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.placeholderPie} />

          <View style={styles.rowBetween}>
            <View>
              <View style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: '#243D63' }]} />
                <Text style={styles.legendText}>Income</Text>
              </View>
              <View style={styles.legendRow}>
                <View style={[styles.legendDot, { backgroundColor: '#D9D9D9' }]} />
                <Text style={styles.legendText}>Expenses</Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text style={styles.viewReport}>View Report</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore Section */}
        <View style={[styles.exploreBox, styles.shadow]}>
          <Text style={styles.exploreText}>
            You spent 20% less than last month. AI suggests investing the extra ₹2,400 in your Growth Fund.
          </Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>EXPLORE</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        
        <View style={styles.bottomBar}>
          <TouchableOpacity>

           <Star  />
           </TouchableOpacity>
        
          <TouchableOpacity>
            <Brain />
          </TouchableOpacity>
          <TouchableOpacity style={styles.centerButton}>
            <Text style={styles.plus}></Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <UpdatedIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Protect />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFD',
  },
  headerContainer: {
    marginTop: 60,
    paddingHorizontal: 20,
  },
  header:{
    flexDirection:'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
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
    fontSize: 14,
    color: '#243D63',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#243D63',
  },
 
  subText: {
    color: 'rgba(34, 63, 97, 1)',
    fontSize: moderateScale(10),
    fontWeight:400,
    lineHeight:verticalScale(15),
    marginTop:verticalScale(40),
    marginBottom:verticalScale(30),
    left:scale(30),
  },

  // Cards
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    // paddingHorizontal: 20,
    height:verticalScale(77),
    width:scale(300),
    left:scale(30),

  },
  database:{
flexDirection:'row',
justifyContent:'space-between',

  },
  balanceCard: {
    backgroundColor: '#243D63',
    flex: 0.48,
    borderRadius: 12,
    padding: 15,
  },
  spendsCard: {
    backgroundColor: '#EDEFF3',
    flex: 0.48,
    borderRadius: 12,
    padding: 15,
  },
  cardTitle: {
    fontSize: 12,
    color: '#6B7C93',
  },
  balanceText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  spendsText: {
    fontSize: 18,
    color: '#243D63',
    fontWeight: 'bold',
  },

  // Income Section
  sectionBox: {
    backgroundColor: '#FFFFFF',
    width:scale(330),
    height:verticalScale(161),
    marginTop: 25,
    borderRadius: 16,
   
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#243D63',
    left:20,
    marginTop:10,
  },
  dropdown: {
    backgroundColor: '#F0F2F5',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  dropdownText: {
    color: '#243D63',
    fontSize: 12,
  },
  placeholderPie: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E0E3E7',
    alignSelf: 'center',
    marginVertical: 20,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 3,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    color: '#243D63',
    fontSize: 12,
  },
  viewReport: {
    color: '#243D63',
    fontWeight: '500',
    fontSize: 13,
  },

  // Explore Section
  exploreBox: {
    backgroundColor: '#243D63',
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 14,
    padding: 15,
  },
  exploreText: {
    color: '#FFFFFF',
    fontSize: 13,
    marginBottom: 10,
  },
  exploreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  exploreButtonText: {
    color: '#243D63',
    fontWeight: 'bold',
  },

  // Bottom Bar
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#1E2D46',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 25,
    margin: 20,
    paddingVertical: 10,
  },
  navIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  centerButton: {
    backgroundColor: '#2E3D57',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#223F61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});
