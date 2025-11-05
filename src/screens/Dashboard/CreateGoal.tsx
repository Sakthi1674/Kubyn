import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  ScrollView,
  Modal,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../theme/color';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import ButtonComp from '../../components/common/ButtonComp';
import BackWard from '../../assets/icons/BackWard';
import RupeeIcon from '../../assets/icons/RupeeIcon';
import Target from '../../assets/icons/Target';
import Exclamatory from '../../assets/icons/Exclamatory';
import DropdownArrow from '../../assets/icons/DropdownArrow';
import { screensEnabled } from 'react-native-screens';

const CreateGoal = () => {
  const [selectedOption, setSelectedOption] = useState('recur');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const colorScheme = useColorScheme();
  const theme = colors[colorScheme || 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <BackWard width={10} height={16} color={theme.Button} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.Button }]}>Create a goal</Text>
      </View>

      {/* Amount */}
      <View style={styles.amountRow}>
        <RupeeIcon width={13} height={19} color={theme.Button} />
        <Text style={[styles.amount, { color: theme.textSecondary }]}>0.00</Text>
      </View>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <View style={styles.iconContainer}>
            <Target width={24} height={24} stroke={theme.text} />
          </View>
          <View style={styles.inputFieldContainer}>
            <Text style={[styles.textInput, { color: theme.Button + 43 }]}>What's your goal?</Text>
          </View>
        </View>

        <View style={[styles.inputRow, { marginTop: verticalScale(14) }]}>
          <View style={styles.iconContainer}>
            <Exclamatory width={24} height={24} fill={theme.text} />
          </View>
          <View style={styles.inputFieldContainer}>
            <Text style={[styles.textInput, { color: theme.Button + 43 }]}>Why is it important?</Text>
          </View>
        </View>
      </View>

      {/* Dates */}
      <View style={styles.dateLabels}>
        <Text style={[styles.dateLabel, { color: theme.text }]}>Sets from</Text>
        <Text style={[styles.dateLabel, { color: theme.text }]}>Target on</Text>
      </View>

      <View style={styles.dateRow}>
        {/* Start Date */}
        <TouchableOpacity
          onPress={() => {
            setShowStartCalendar(true);
            setShowEndCalendar(false);
          }}
          activeOpacity={0.8}
          style={[styles.dateInputRow, { backgroundColor: theme.Profilebg }]}
        >
          <View style={styles.dateIconContainer}>
            <CalendarIcon color={theme.iconbg} />
          </View>
          <View style={styles.dateInputContainer}>
            <Text style={[styles.dateInput, { color: theme.bttext }]}>
              {startDate || 'dd/mm/yyyy'}
            </Text>
          </View>
        </TouchableOpacity>

        {/* End Date */}
        <TouchableOpacity
          onPress={() => {
            setShowEndCalendar(true);
            setShowStartCalendar(false);
          }}
          activeOpacity={0.8}
          style={[styles.dateInputRow, { backgroundColor: theme.Profilebg }]}
        >
          <View style={styles.dateIconContainer}>
            <CalendarIcon color={theme.iconbg} />
          </View>
          <View style={styles.dateInputContainer}>
            <Text style={[styles.dateInput, { color: theme.bttext }]}>
              {endDate || 'dd/mm/yyyy'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* START DATE CALENDAR */}
      {showStartCalendar && (
        <Modal transparent visible={showStartCalendar} animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setShowStartCalendar(false)}
          >
            <View style={[styles.calendarPopup, { top: '40%', alignSelf: 'center' }]}>
              <ScrollView style={{ width: 240, height: 240 }} showsVerticalScrollIndicator={false}>
                <Calendar
                  onDayPress={(day) => {
                    setStartDate(day.dateString);
                    setShowStartCalendar(false);
                  }}
                  style={{ borderRadius: 10 }}
                  markedDates={{
                    ...(startDate && {
                      [startDate]: {
                        selected: true,
                        color: '#223F61',
                        textColor: 'white',
                      },
                    }),
                  }}
                  theme={{
                    textDayFontSize: 12,
                    textMonthFontSize: 14,
                    textDayHeaderFontSize: 10,
                    calendarBackground: '#FBFDFF',
                    selectedDayBackgroundColor: '#223F61',
                    todayTextColor: '#223F61',
                    arrowColor: '#223F61',
                  }}
                />
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {/* END DATE CALENDAR */}
      {showEndCalendar && (
        <Modal transparent visible={showEndCalendar} animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setShowEndCalendar(false)}
          >
            <View style={[styles.calendarPopup, { top: '50%', alignSelf: 'center' }]}>
              <ScrollView style={{ width: 240, height: 240 }} showsVerticalScrollIndicator={false}>
                <Calendar
                  onDayPress={(day) => {
                    setEndDate(day.dateString);
                    setShowEndCalendar(false);
                  }}
                  style={{ borderRadius: 10 }}
                  markedDates={{
                    ...(endDate && {
                      [endDate]: {
                        selected: true,
                        color: '#223F61',
                        textColor: 'white',
                      },
                    }),
                  }}
                  theme={{
                    textDayFontSize: 12,
                    textMonthFontSize: 14,
                    textDayHeaderFontSize: 10,
                    calendarBackground: '#FBFDFF',
                    selectedDayBackgroundColor: '#223F61',
                    todayTextColor: '#223F61',
                    arrowColor: '#223F61',
                  }}
                />
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {/* Recurrence Section */}
      <View style={styles.recurRow}>
        <View style={styles.radioRow}>
          <TouchableOpacity onPress={() => setSelectedOption('recur')}>
            <View
              style={[
                styles.radioOuter,
                selectedOption === 'recur' && { borderColor: theme.Button },
              ]}
            >
              {/* Always show inner circle, but change opacity */}
              <View
                style={[
                  styles.radioInner,
                  {
                    backgroundColor: theme.Button,
                    opacity: selectedOption === 'recur' ? 1 : 0.4, 
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
          <Text style={[styles.radioLabel, { color: theme.text }]}>Will it reccur?</Text>
        </View>

        <TouchableOpacity style={[styles.dropdown, { backgroundColor: theme.option }]}>
          <Text style={styles.dropdownText}>Select Period</Text>
          <DropdownArrow stroke={theme.buttondark} />
        </TouchableOpacity>
      </View>

      {/* Single Time */}
      <View style={[styles.radioRow, { marginTop: verticalScale(10) }]}>
        <TouchableOpacity onPress={() => setSelectedOption('single')}>
          <View
            style={[
              styles.radioOuter,
              selectedOption === 'single' && { borderColor: theme.Button },
            ]}
          >
            {/* Same logic for single option */}
            <View
              style={[
                styles.radioInner,
                {
                  backgroundColor: theme.Button,
                  opacity: selectedOption === 'single' ? 1 : 0.4,
                },
              ]}
            />
          </View>
        </TouchableOpacity>
        <Text style={[styles.radioLabel, { color: theme.text }]}>Single time</Text>
      </View>

      {/* Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Set the Goal"
          onPress={() => console.log('Submit pressed')}
          style={{ backgroundColor: theme.Button }}
          textStyle={{ color: theme.bttext }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(50),
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    marginLeft: scale(30),
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(5),
  },
  amount: {
    fontSize: moderateScale(48),
    fontWeight: '600',
    marginLeft: scale(10),
    opacity: 0.25,
  },
  inputContainer: { marginTop: verticalScale(20) },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: scale(10), justifyContent: "center" },
  iconContainer: { alignItems: 'center', justifyContent: 'center' },
  inputFieldContainer: {
    flex: 1,
    backgroundColor: 'rgba(227,233,241,0.8)',
    borderRadius: 15,
    height: verticalScale(40),
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  textInput: {
    fontSize: moderateScale(16),
  },
  dateLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(6),
  },
  dateLabel: { fontSize: moderateScale(10), width: scale(140) },
  dateRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dateInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: scale(140),
    height: verticalScale(45),
  },
  dateIconContainer: { width: scale(40), alignItems: 'center', justifyContent: 'center' },
  dateInputContainer: { flex: 1 },
  dateInput: { fontSize: moderateScale(12), opacity: 0.8 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
  },
  calendarPopup: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    padding: 10,
  },
  recurRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(60),
  },
  radioRow: { flexDirection: 'row', alignItems: 'center' },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9AA3B2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioInner: { width: 8, height: 8, borderRadius: 4 },
  radioLabel: {
    fontSize: moderateScale(16),
    fontWeight: '600',
    opacity: 0.7,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: verticalScale(20),
  },
  dropdownText: { fontSize: moderateScale(10), marginRight: scale(6), opacity: 0.4 },
  buttonWrapper: {
    marginTop: verticalScale(93),
    alignItems: 'center',
    marginBottom: verticalScale(40),
  },
});
