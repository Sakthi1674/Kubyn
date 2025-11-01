import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/color';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // ✅ Add this

interface LogoutPopupProps {
  visible: boolean;
  onCancel: () => void;
  onLogout?: () => void;
}

const LogoutScreen: React.FC<LogoutPopupProps> = ({ visible, onCancel }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;
  const navigation = useNavigation<NavigationProp<any>>(); // ✅ Initialize navigation

  // ✅ Handle logout action
  const handleLogout = () => {
    // Add your logout logic here (like clearing AsyncStorage or tokens)
    navigation.navigate('Login'); // navigate to your Login screen
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.popupContainer, { backgroundColor: theme.Profilebg }]}>
              <Text style={styles.popupText}>
                Are you sure{'\n'}you want to logout?
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.cancelButton, { backgroundColor: theme.pop }]}
                  onPress={onCancel}
                >
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.logoutButton, { backgroundColor: theme.bttext }]}
                  onPress={handleLogout}
                >
                  <Text style={[styles.logoutText, { color: theme.text }]}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LogoutScreen;

// --- styles ---
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#E3E9F1CC',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  popupContainer: {
    backgroundColor: '#223F61',
    borderRadius: verticalScale(20),
    padding: scale(25),
    width: scale(300),
    height: verticalScale(150),
    alignItems: 'center',
    justifyContent:"center"
  },
  popupText: {
    color: '#FBFDFF',
    fontSize: moderateScale(14),
    marginBottom: verticalScale(25),
    textAlign: 'center',
    fontFamily: 'Avenir LT Std 65 Medium',
    letterSpacing: scale(2),
    fontWeight: '600',
    lineHeight: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  cancelButton: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
  },
  cancelText: {
    color: '#223F61',
    fontFamily: 'Kollektif-Bold',
    fontWeight: '700',
    letterSpacing: scale(2),
    fontSize: moderateScale(12),
  },
  logoutButton: {
    backgroundColor: '#FBFDFF',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
  },
  logoutText: {
    color: '#223F61',
    fontFamily: 'Kollektif-Bold',
    fontWeight: '700',
    letterSpacing: scale(2),
    fontSize: moderateScale(12),
  },
});
