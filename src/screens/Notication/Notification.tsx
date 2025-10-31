import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import BackWard from '../../assets/icons/BackWard'; // use your back icon
import DoubleTick from '../../assets/icons/DoubleTick'; // your tick icon
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../../theme/color';

const Notification = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || "light"];
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackWard color={theme.text} /> {/* ✅ theme-based icon color */}
        </TouchableOpacity>

        <Text style={[styles.headerTitle, { color: theme.text }]}>
          Notification
        </Text>

        <TouchableOpacity style={styles.makeReadContainer}>
          <DoubleTick width={14} height={9} color={theme.text} />
          <Text style={[styles.makeReadText, { color: theme.text }]}>
            Make read all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        {/* Top Card */}
        <View
          style={[
            styles.mainCard,
            { backgroundColor: theme.buttondark,shadowColor: theme.text, }, // ✅ custom theme color
          ]}
        >
          <View
            style={[
              styles.dotGreen,
              { backgroundColor: theme.green }, // ✅ theme success color
            ]}
          />
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: theme.text }]}>
              Savings & Progress
            </Text>
            <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
              “You saved ₹2,000 this week — {'\n'}amazing progress toward your
              goal!”
            </Text>
          </View>
        </View>

        {/* Today */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Today</Text>

        <View
          style={[
            styles.card1,
        { backgroundColor: theme.background,shadowColor: theme.text, },
          ]}
        >
          <View
            style={[styles.dotBlue, { backgroundColor: theme.Button }]}
          />
          <Text style={[styles.cardText, { color: theme.text }]}>
            You saved ₹5,000 this month! Keep it up
          </Text>
        </View>

        <View
          style={[
            styles.card,
           { backgroundColor: theme.background,shadowColor: theme.text, },
          ]}
        >
          <Text style={[styles.cardText, { color: theme.text }]}>
            Congrats! You saved ₹5,000 this month
          </Text>
        </View>

        {/* Earlier This Week */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>
          Earlier This Week
        </Text>

        <View
          style={[
            styles.card,
             { backgroundColor: theme.background,shadowColor: theme.text, },
          ]}
        >
          <Text style={[styles.cardText, { color: theme.text }]}>
            You saved ₹5,000 this month! Keep it up
          </Text>
        </View>

        <View
          style={[
            styles.card,
            { backgroundColor: theme.background,shadowColor: theme.text, },
            
          ]}
        >
          <Text style={[styles.cardText, { color: theme.text }]}>
            You saved ₹5,000 this month! Keep it up
          </Text>
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
    fontFamily: 'Open Sans',
    right: scale(40),
  },
  makeReadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  makeReadText: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: scale(10),
    marginLeft: scale(5),
    fontFamily: 'Open Sans',
    fontWeight: 400,

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

    // ✅ Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // ✅ Shadow for Android
    elevation: 3,
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
    fontFamily: 'Open Sans',

  },
  subtitle: {
    color: 'rgba(18, 18, 18, 1)',
    fontSize: scale(10),
    fontWeight: 400,
    marginTop: scale(4),
    fontFamily: 'Open Sans',
    lineHeight: verticalScale(14),

  },
  sectionTitle: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    marginLeft: scale(20),
    fontWeight: '600',
    color: 'rgba(18, 18, 18, 1)',
    fontFamily: 'Open Sans',
    fontSize: moderateScale(10),

  },
  card: {
    backgroundColor: 'rgba(251, 253, 255, 1)',
    marginHorizontal: scale(16),
    borderRadius: scale(20),
    height: verticalScale(61),
    width: scale(320),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    // ✅ Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // ✅ Shadow for Android
    elevation: 3,
  },
  card1: {
    backgroundColor: 'rgba(227, 233, 241, 0.8)',
    marginHorizontal: scale(16),
    borderRadius: scale(20),
    height: verticalScale(61),
    width: scale(320),
    marginBottom: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    // ✅ Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // ✅ Shadow for Android
    elevation: 3,
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
  },
  cardText: {
    left: verticalScale(25),
    color: 'rgba(34, 63, 97, 1)',
    fontSize: scale(10),
    flex: 1,
    fontWeight: (700),
    fontFamily: 'Open Sans',
    letterSpacing: verticalScale(1),

  },
  dotBlue: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(10),
    backgroundColor: 'rgba(34, 63, 97, 1)',
    left: scale(15),
  },
});
