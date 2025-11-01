import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BackWard from '../../assets/icons/BackWard';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import DropdownArrow from '../../assets/icons/DropdownArrow';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import ButtonComp from '../../components/common/ButtonComp';
import RupeeIcon from '../../assets/icons/RupeeIcon';
import UpdatedIcon from '../../assets/icons/UpdateIcon';
// import ThermometerIcon from '../../assets/icons/ThermometerIcon';

const CreateGoal = () => {
  const [selectedOption, setSelectedOption] = useState('recur');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <BackWard />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create a goal</Text>
        </View>

        {/* Amount */}
        <View style={styles.amountRow}>
          <Text style={styles.rupee}><RupeeIcon/></Text>
          <Text style={styles.amount}>0.00</Text>
        </View>

        {/* Goal Input */}
      
        <View >
            <UpdatedIcon />
          </View>
        <View style={styles.inputRow}>
             
          {/* <TargetIcon /> */}
          
        
          <TextInput
            placeholder="What's your goal?"
            placeholderTextColor="#9AA3B2"
            style={styles.textInput}
          />
        </View>
      
        

        {/* Why Input */}
        <View  style={styles.inputhead}>
        {/* <TouchableOpacity>
  <ThermometerIcon width={28} height={28} />
</TouchableOpacity> */}
        <View style={[styles.inputRow, { marginTop: verticalScale(14) }]}>
            
          {/* <ImportantIcon /> */}
          <TextInput
            placeholder="Why is it important?"
            placeholderTextColor="#9AA3B2"
            style={styles.textInput}
          />
        </View>
        </View>

        {/* Date Labels */}
        <View style={styles.dateLabels}>
          <Text style={styles.dateLabel}>Sets from</Text>
          <Text style={styles.dateLabel}>Target on</Text>
        </View>

        {/* Dates Row */}
        <View style={styles.dateRow}>
          <View style={styles.dateBox}>
            <CalendarIcon />
            <TextInput
              placeholder="dd/mm/yyyy"
              placeholderTextColor="rgba(251, 253, 255, 1)"
              style={styles.dateInput}
            />
          </View>

          <View style={styles.dateBox}>
            <CalendarIcon />
            <TextInput
              placeholder="dd/mm/yyyy"
              placeholderTextColor="rgba(251, 253, 255, 1)"
              
              style={styles.dateInput}
            />
          </View>
        </View>

        {/* Recurrence Section */}
        <View style={styles.recurRow}>
          <View style={styles.radioRow}>
            <TouchableOpacity onPress={() => setSelectedOption('recur')}>
              <View
                style={[
                  styles.radioOuter,
                  selectedOption === 'recur' && styles.radioActive,
                ]}
              >
                {selectedOption === 'recur' && <View style={styles.radioInner} />}
              </View>
            </TouchableOpacity>
            <Text style={styles.radioLabel}>Will it recur?</Text>
          </View>

          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select Period</Text>
            <DropdownArrow />
          </TouchableOpacity>
        </View>

        {/* Single time */}
        <View style={[styles.radioRow, { marginTop: verticalScale(10) }]}>
          <TouchableOpacity onPress={() => setSelectedOption('single')}>
            <View
              style={[
                styles.radioOuter,
                selectedOption === 'single' && styles.radioActive,
              ]}
            >
              {selectedOption === 'single' && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
          <Text style={styles.radioLabel}>single time</Text>
        </View>

        {/* Button */}
         <View style={styles.buttonWrapper}>
            <ButtonComp
              title="Set the Goal"
              onPress={() => console.log('Submit pressed')}
              style={{
                backgroundColor: '#223F61',
                marginHorizontal: scale(30),
              }}
              textStyle={{
                textColor: '#FAF8F5',
              }}
            />
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFDFF',
    paddingHorizontal: scale(24),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(50),
    marginBottom: verticalScale(30),
  },
  headerText: {
    fontSize: moderateScale(16),
    fontFamily:'Kollektif',
    fontWeight: '700',
    color: 'rgba(34, 63, 97, 1)',
    marginLeft: scale(10),
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(25),
  },
  rupee: {
    top:verticalScale(8),
  },
  amount: {
    fontSize: moderateScale(48),
    color: 'rgba(34, 63, 97, 1)',
    fontWeight: '600',
    marginLeft: scale(10),
    fontFamily:'Avenir LT Std',
    opacity:0.25,
  },
  
inputhead:{
flexDirection:'row',
},
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(227, 233, 241, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: verticalScale(40),
    width:scale(279),
  
  },
  textInput: {
    flex: 1,
    color: 'rgba(34, 63, 97, 1)',
    marginLeft: 10,
    fontSize: moderateScale(16),
    fontFamily:'Avenir LT Std',
    fontWeight:600,
  },
  dateLabels: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap:138,
    marginTop: verticalScale(22),
    marginBottom: verticalScale(6),
  },
  dateLabel: {
    color: 'rgba(34, 63, 97, 1)',
    fontFamily:'Avenir LT Std',
    fontWeight:600,
    fontSize: moderateScale(10),
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#243D63',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: scale(140),
    height: verticalScale(35),
    color:'rgba(251, 253, 255, 1)',
  },
  dateInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: moderateScale(12),
    color: 'rgba(251, 253, 255, 1)',
    opacity:0.4,
  },
  recurRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(24),
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  radioActive: {
    borderColor: '#243D63',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#243D63',
  },
  radioLabel: {
    color: 'rgba(34, 63, 97, 1)',
    fontSize: moderateScale(16),
    fontFamily:'Avenir LT Std',
    fontWeight:600,
    opacity:0.7
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(227, 233, 241, 0.8)',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: verticalScale(20),
  },
  dropdownText: {
    color: 'rgba(34, 63, 97, 1)',
    fontSize: moderateScale(10),
    marginRight: scale(6),
    fontFamily:'Open Sans',
    opacity:0.4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
   buttonWrapper: {
     width: '90%',
      position: 'absolute',
      top: verticalScale(590),
      
    },
});