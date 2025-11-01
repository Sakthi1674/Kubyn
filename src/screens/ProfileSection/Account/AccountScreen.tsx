import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  useColorScheme 
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import BackWard from '../../../assets/icons/BackWard';
import ChangePreference from '../../../assets/icons/ChangePreference';
import Front from '../../../assets/icons/Front';
import AddMailIcon from '../../../assets/icons/AddMailIcon';
import Download from '../../../assets/icons/Download';
import TrashIcon from '../../../assets/icons/TrashIcon';
import colors from '../../../theme/color';

const AccountScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.header, { color: theme.text }]}>Account</Text>
      </View>

      {/* List Items */}
      <View style={styles.list}>
        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('ChangePrefrence')}
        >
          <View style={styles.leftSection}>
            <ChangePreference width={scale(24)} height={scale(24)} color={theme.Button} />
            <Text style={[styles.text, { color: theme.text }]}>Change Preference</Text>
          </View>
          <Front width={scale(28)} height={scale(28)} color={theme.Button} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('MySubscriptions')}
        >
          <View style={styles.leftSection}>
            <AddMailIcon width={scale(24)} height={scale(24)} stroke={theme.Button} />
            <Text style={[styles.text, { color: theme.text }]}>My Subscriptions</Text>
          </View>
          <Front width={scale(24)} height={scale(24)} color={theme.Button} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('DownloadStatements')}
        >
          <View style={styles.leftSection}>
            <Download width={scale(24)} height={scale(24)} stroke={theme.Button} />
            <Text style={[styles.text, { color: theme.text }]}>Download Statements</Text>
          </View>
          <Front width={scale(24)} height={scale(24)} color={theme.Button} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.item} 
          onPress={() => navigation.navigate('DeleteAccount')}
        >
          <View style={styles.leftSection}>
            <TrashIcon width={scale(24)} height={scale(24)} stroke={theme.Button} />
            <Text style={[styles.text, { color: theme.text }]}>Delete Account</Text>
          </View>
          <Front width={scale(24)} height={scale(24)} color={theme.text} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  header: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    marginLeft: scale(30),
    fontFamily: 'Kollektif-Bold',
    letterSpacing: scale(5),
  },
  list: {
    marginTop: verticalScale(5),
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
    fontFamily: 'Avenir LT Std 65 Medium',
    letterSpacing: scale(1.5),
    fontWeight: '600',
  },
});
