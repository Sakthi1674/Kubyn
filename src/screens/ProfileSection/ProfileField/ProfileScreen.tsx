import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

// ✅ Define navigation type for safety
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

// ✅ Main component
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
        {/* ✅ Navigate to Account Screen */}
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
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: 'space-between',
    width: '85%',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  galleryIconWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 20,
    fontWeight: 'bold',
    color: '#183153',
    marginRight: 8,
    fontFamily: 'Kollektif',
    letterSpacing: 2,
  },
  menuContainer: {
    marginBottom: 160,
    marginLeft: 40,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  menuText: {
    color: '#fff',
    marginLeft: 20,
    letterSpacing: 3,
    fontFamily: 'Kollektif',
    fontWeight: '400',
  },
  logoutContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});
