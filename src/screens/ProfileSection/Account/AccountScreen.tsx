import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import ChangePreference from '../../../assets/icons/ChangePreference';
import Front from '../../../assets/icons/Front';
import AddMailIcon from '../../../assets/icons/AddMailIcon';
import Download from '../../../assets/icons/Download';
import TrashIcon from '../../../assets/icons/TrashIcon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


import { useNavigation, NavigationProp } from '@react-navigation/native';

const AccountScreen = () => {

    const navigation = useNavigation<NavigationProp<any>>();
  

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWard width={15} height={20} onPress={() => navigation.navigate('ProfileScreen')}/>
        </TouchableOpacity>
        <Text style={styles.header}>Account</Text>
      </View>

      {/* List Items */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChangePrefrence')}>
          <View style={styles.leftSection}>
            <ChangePreference width={25} height={25} />
            <Text style={styles.text}>Change Preference</Text>
          </View>
          <Front width={28} height={28} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MySubscriptions')}>
          <View style={styles.leftSection}>
            <AddMailIcon width={26} height={26} />
            <Text style={styles.text}>My Subscriptions</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DownloadStatements')}>
          <View style={styles.leftSection}>
            <Download width={26} height={26} />
            <Text style={styles.text}>Download Statements</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DeleteAccount')}>
          <View style={styles.leftSection}>
            <TrashIcon width={26} height={26} />
            <Text style={styles.text}>Delete Account</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: scale(24),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  header: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: scale(30),
    fontFamily:"Kollektif",
    letterSpacing:scale(5),
  },
  list: {
    // marginTop: verticalScale(5),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(16),
    marginLeft: scale(24),
    color: '#121212',
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(1.5),
    fontWeight:600,
    
  
  },
 
});