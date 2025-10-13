import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import GalleryIcon from '../../../assets/icons/GalleryIcon';
import EditIcon from '../../../assets/icons/EditIcon';
import AccountIcon from '../../../assets/icons/AccountIcon';
import LockIcon from '../../../assets/icons/LockIcon';
import SettingsIcon from '../../../assets/icons/SettingsIcon';
import InfoIcon from '../../../assets/icons/InfoIcon';
import LectureHallIcon from '../../../assets/icons/LectureHallIcon';
import LogoutIcon from '../../../assets/icons/LogOutIcon';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/images/ProfileSection/Profile.jpg')}
            style={styles.profileImage}
          />
          {/* Gallery Icon */}
          <TouchableOpacity style={styles.galleryIconWrapper}>
            <View style={styles.iconBackground}>
              <GalleryIcon width={24} height={24} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.usernameContainer}>
          <Text style={styles.username}>John12</Text>
          <TouchableOpacity>
            <EditIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <AccountIcon width={24} height={24} />
          <Text style={styles.menuText}>ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <LockIcon width={24} height={24} />
          <Text style={styles.menuText}>SECURITY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <SettingsIcon width={24} height={24} />
          <Text style={styles.menuText}>APP SETTINGS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <InfoIcon width={24} height={24} />
          <Text style={styles.menuText}>HELP CENTRE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <LectureHallIcon width={24} height={24} />
          <Text style={styles.menuText}>LEGAL & POLICIES</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity>
          <LogoutIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    fontWeight: '400', // fixed to string
  },
  logoutContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
});
