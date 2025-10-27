import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import Front from '../../../assets/icons/Front';
// import Toggle from '../../../assets/icons/Toggle';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import ChangePasswordIcon from '../../../assets/icons/ChangePasswordIcon';
import Linked from '../../../assets/icons/Linked';
import Authentication from '../../../assets/icons/Authentication';
import Lock from '../../../assets/icons/Lock';
import Activity from '../../../assets/icons/Activity';
import Toggle from '../../../components/Toggle';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const SecurityScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate('ProfileScreen')}>
          <BackWard width={15} height={15} />
        </TouchableOpacity>
        <Text style={styles.header}>Security</Text>
      </View>

      {/* List Items */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CurrentPassword')}>
          <View style={styles.leftSection}>
            <ChangePasswordIcon width={22} height={22} />
            <Text style={styles.text}>Change Password</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('LinkedScreen')}>
          <View style={styles.leftSection}>
            <Linked width={22} height={22} />
            <Text style={styles.text}>Linked Email and Mobile Number</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('')}>
          <View style={styles.leftSection}>
            <Authentication width={22} height={22} />
            <Text style={styles.text}>Two-Factor Authentication</Text>
          </View>
                 <Toggle/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('CurrentPin')}>
          <View style={styles.leftSection}>
            <Lock width={22} height={22} />
            <Text style={styles.text}>PIN Lock</Text>
          </View>
         <Toggle />
        </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('LoginActivity')}>
          <View style={styles.leftSection}>
            <Activity width={22} height={22} />
            <Text style={styles.text}>Activity</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SecurityScreen;

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
    marginBottom: verticalScale(10),
  },
  header: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: scale(30),
    fontFamily:"Kollektif",
    letterSpacing:scale(4),
  },
  list: {
    marginTop: verticalScale(15),
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: moderateScale(13),
    marginLeft: scale(24),
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(2),
    fontWeight:600,
    },
  arrow: {
    fontSize: moderateScale(22),
    color: '#999',
    marginRight: scale(5),
  },
});