import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


import GalleryIcon from '../../../assets/icons/GalleryIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import AccountIcon from '../../../assets/icons/AccountIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import SettingsIcon from '../../../assets/icons/SettingsIcon';
import InfoIcon from '../../../assets/icons/InfoIcon';
import LectureHallIcon from '../../../assets/icons/LectureHallIcon';
import LogoutIcon from '../../../assets/icons/LogOutIcon';
import LogoutScreen from '../ProfilePopup/LogoutScreen';
import UserName from '../ProfilePopup/UserName';
import UserProfile from '../ProfilePopup/UserProfile';


//  Define navigation type for safety
type RootStackParamList = {
  Home: undefined;
  AccountScreen: undefined;
  MySubscriptions: undefined;
  DownloadStatements: undefined;
  SecurityScreen: undefined;
  AppSettingsScreen: undefined;
  HelpCentre: undefined;
  LegalPolicies: undefined;
};
const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [logoutVisible, setLogoutVisible] = useState(false);
  const [changeNameVisible, setChangeNameVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../../assets/images/ProfileSection/Profile.jpg')}
            style={styles.profileImage}
          />
          {/* Gallery Icon (opens photo popup) */}
          <TouchableOpacity
            style={styles.galleryIconWrapper}
            onPress={() => setGalleryVisible(true)}
          >
            <View style={styles.iconBackground}>
              <GalleryIcon width={24} height={24} />
            </View>
          </TouchableOpacity>
        </View>
        {/* Username with edit */}
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>John12</Text>
          <TouchableOpacity onPress={() => setChangeNameVisible(true)}>
            <EditIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Menu Section */}
      <View style={styles.menuContainer}>
        {/*  Navigate to Account Screen */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('AccountScreen')}
        >
          <AccountIcon width={24} height={24} />
          <Text style={styles.menuText}>ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}
          onPress={() => navigation.navigate('SecurityScreen')}>
          <LockIcon width={24} height={24} />
          <Text style={styles.menuText}>SECURITY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}
          onPress={() => navigation.navigate('AppSettingsScreen')}>
          <SettingsIcon width={24} height={24} />
          <Text style={styles.menuText}>APP SETTINGS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('HelpCentre')}>
          <InfoIcon width={24} height={24} />
          <Text style={styles.menuText}>HELP CENTRE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}
          onPress={() => navigation.navigate('LegalPolicies')}>
          <LectureHallIcon width={24} height={24} />
          <Text style={styles.menuText}>LEGAL & POLICIES</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Section */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={() => setLogoutVisible(true)}>
          <LogoutIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      {/* Popup Modals */}
      <LogoutScreen
        visible={logoutVisible}
        onCancel={() => setLogoutVisible(false)}
        onLogout={() => setLogoutVisible(false)}
      />

      <UserName
        visible={changeNameVisible}
        onCancel={() => setChangeNameVisible(false)}
        onConfirm={(newName) => {
          console.log('Name changed to:', newName);
          setChangeNameVisible(false);
        }}
      />

      <UserProfile
        visible={galleryVisible}
        onClose={() => setGalleryVisible(false)}
      />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#183153',
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(40),
    justifyContent: 'space-between',
    width: '85%',
    borderTopRightRadius: verticalScale(30),
    borderBottomRightRadius: verticalScale(30),
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: verticalScale(40),
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: scale(110),
    height: verticalScale(95),
    borderRadius: moderateScale(80),
    borderWidth: scale(1),
    borderColor: '#fff',
  },
  galleryIconWrapper: {
    position: 'absolute',
    bottom: verticalScale(0),
    left: scale(35),
    width: scale(36),
    height: verticalScale(36),
    borderRadius: moderateScale(18),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    position: 'absolute',
    bottom: scale(0),
    alignSelf: 'center',
    width: scale(105),
    height: scale(38),
    borderBottomLeftRadius: moderateScale(420),
     borderTopLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(290),

    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(6),
    left: scale(6),
    marginBottom: verticalScale(24),
  },
  username: {
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(20),
    fontWeight: 'bold',
    color: '#183153',
    marginRight: scale(8),
    fontFamily: 'Kollektif',
    letterSpacing: scale(2),
  },
  menuContainer: {
    marginBottom: verticalScale(160),
    marginLeft: scale(40),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(14),
  },
  menuText: {
    color: '#fff',
    marginLeft: scale(20),
    letterSpacing: scale(3),
    fontFamily: 'Kollektif',
    fontWeight: '400',
  },
  logoutContainer: {
    alignItems: 'flex-start',
  },
});
