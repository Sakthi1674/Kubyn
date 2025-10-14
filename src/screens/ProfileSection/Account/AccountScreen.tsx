import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import ChangePreference from '../../../assets/icons/ChangePreference';
import Front from '../../../assets/icons/Front';
import AddMailIcon from '../../../assets/icons/AddMailIcon';
import Download from '../../../assets/icons/Download';
import TrashIcon from '../../../assets/icons/TrashIcon';

import { useNavigation, NavigationProp } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWard width={15} height={15} />
        </TouchableOpacity>
        <Text style={styles.header}>Account</Text>
      </View>

      {/* List Items */}
      <View style={styles.list}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChangePreference')}>
          <View style={styles.leftSection}>
            <ChangePreference width={22} height={22} />
            <Text style={styles.text}>Change Preference</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('MySubscriptions')}>
          <View style={styles.leftSection}>
            <AddMailIcon width={22} height={22} />
            <Text style={styles.text}>My Subscriptions</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DownloadStatements')}>
          <View style={styles.leftSection}>
            <Download width={22} height={22} />
            <Text style={styles.text}>Download Statements</Text>
          </View>
          <Front width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('DeleteAccount')}>
          <View style={styles.leftSection}>
            <TrashIcon width={22} height={22} />
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
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 30,
    fontFamily:"Kollektif",
    letterSpacing:4,
  },
  list: {
    marginTop: 15,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 24,
    // color: '#000',
    fontFamily:'Avenir LT Std',
    letterSpacing:2,
    fontWeight:600,
    
  
  },
  arrow: {
    fontSize: 22,
    color: '#999',
    marginRight: 5,
  },
});