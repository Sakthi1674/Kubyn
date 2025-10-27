import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BackWard from '../../assets/icons/BackWard'; // use your back icon
import DoubleTick from '../../assets/icons/DoubleTick'; // your tick icon
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Notification = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackWard />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <TouchableOpacity style={styles.makeReadContainer}>
          <DoubleTick width={14} height={9} />
          <Text style={styles.makeReadText}>Make read all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

        {/* Top Card */}
        <View style={styles.mainCard}>
          <View style={styles.dotGreen} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Savings & Progress</Text>
            <Text style={styles.subtitle}>
             “You saved ₹2,000 this week — {'\n'}amazing progress toward your goal!”
            </Text>
          </View>
        </View>

        {/* Today */}
        <Text style={styles.sectionTitle}>Today</Text>
        <View style={styles.card1}>
          <View style={styles.dotBlue} />
          <Text style={styles.cardText}>You saved ₹5,000 this month! Keep it up</Text>
        </View>

        <View style={[styles.card, styles.whiteCard]}>
          <Text style={styles.cardText}>
            Congrats! You saved ₹5,000 this month
          </Text>
        </View>

        {/* Earlier This Week */}
        <Text style={styles.sectionTitle}>Earlier This Week</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>You saved ₹5,000 this month! Keep it up</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>You saved ₹5,000 this month! Keep it up</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(15),
    paddingTop: verticalScale(50),
  },
  headerTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: 'rgba(34, 63, 97, 1)',
    fontFamily:'Open Sans',
    right:scale(40),
  },
  makeReadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  makeReadText: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: scale(10),
    marginLeft: scale(5),
    fontFamily:'Open Sans',
    fontWeight:400,

  },
  scroll: {
    marginTop: verticalScale(40),
  },
  mainCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#E9EFF9',
    marginHorizontal: scale(16),
    padding: scale(12),
    borderRadius: scale(10),
    elevation: 1,
  },
  dotGreen: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(10),
    backgroundColor: 'rgba(94, 170, 34, 1)',
    marginTop: scale(4),
    marginRight: scale(10),
  },
  textContainer: { flex: 1 },
  title: {
    fontWeight: '700',
    color: '#121212',
    fontSize: moderateScale(12),
    fontFamily:'Open Sans',

  },
  subtitle: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: scale(10),
    fontWeight:400,
    marginTop: scale(4),
    fontFamily:'Open Sans',
    lineHeight:verticalScale(14),

  },
  sectionTitle: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginLeft: scale(20),
    fontWeight: '600',
    color: 'rgba(18, 18, 18, 1)',
    fontFamily:'Open Sans',
    fontSize:moderateScale(10),

  },
  card: {
    backgroundColor: 'rgba(251, 253, 255, 1)',
    marginHorizontal: scale(16),
    borderRadius: scale(20),
    height:verticalScale(61),
    width:scale(320),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  card1: {
    backgroundColor: 'rgba(227, 233, 241, 0.8)',
    marginHorizontal: scale(16),
    borderRadius: scale(20),
    height:verticalScale(61),
    width:scale(320),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
  },
  cardText: {
    left:verticalScale(25),
    color: 'rgba(34, 63, 97, 1)',
    fontSize: scale(10),
    flex: 1,
    fontWeight:(700),
    fontFamily:'Open Sans',
    letterSpacing:verticalScale(1),

  },
  dotBlue: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(10),
    backgroundColor: 'rgba(34, 63, 97, 1)',
    left:scale(15),
  },
});
