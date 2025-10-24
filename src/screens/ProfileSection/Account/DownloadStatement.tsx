import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import UploadIcon from '../../../assets/icons/UploadIcon';
import ButtonComp from '../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const DownloadStatements = () => {
      const navigation = useNavigation<NavigationProp<any>>();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <BackWard width={15} height={15}  onPress={() => navigation.navigate('AccountScreen')}/>
        </TouchableOpacity>
        <Text style={styles.title}>Download Statements</Text>
      </View>

      {/* Dropdown */}
      <View style={styles.dropdownWrapper}>
        <Text style={styles.dropdownText}>Select Period</Text>
        <TouchableOpacity>
          <ArrowDown width={15} height={10} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Cards */}
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <View style={styles.card} key={index}>
                <View style={styles.icon}>
                    <UploadIcon width={20} height={20} />
                </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <ButtonComp
          title="Download All"
          onPress={() => console.log('Download pressed')}
          style={styles.button}
          textStyle={{ color: '#FAF8F5' }}
        />
      </View>
    </View>
  );
};

export default DownloadStatements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:verticalScale(30),
  },
  backButton: {
    padding: scale(10),
    marginRight: scale(10),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    fontFamily: 'Kollektif',
    letterSpacing: scale(3),
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    borderRadius:moderateScale(20) ,
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(6),
    backgroundColor: '#E3E9F1',
    marginVertical: verticalScale(15),
    width: scale(110),
    //  color: '#223F61',
     opacity:0.5,
    
  },
  dropdownText: {
    fontSize: moderateScale(11),
    color: '#223F61',
    fontFamily:"Avenir LT Std",
  },
  cardsContainer: {
    flexGrow: 1,
  },
  card: {
    height: verticalScale(48),
    backgroundColor: '#E3E9F1',
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(15),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  icon: {
    position: 'absolute',
    right: scale(20),
  },
  buttonContainer: {
    marginVertical: verticalScale(30),
    
  },
  button: {
    backgroundColor: '#223F61',
    marginHorizontal:scale(30) ,
  },
});