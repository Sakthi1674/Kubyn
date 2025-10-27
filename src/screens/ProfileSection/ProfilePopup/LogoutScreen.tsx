import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


interface LogoutPopupProps {
  visible: boolean;
  onCancel: () => void;
  onLogout: () => void;
}

const LogoutScreen: React.FC<LogoutPopupProps> = ({ visible, onCancel, onLogout }) => {
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
            <View style={styles.popupContainer}>
              <Text style={styles.popupText}>Are you sure you{'\n'} want to logout?</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
                  <Text style={styles.logoutText}>Logout</Text>
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

const styles = StyleSheet.create({

  overlay: {
    flex: 1,
    backgroundColor: '#E3E9F1CC',
    justifyContent: 'center',
    alignItems: 'center',
    width:'85%',
  },
  popupContainer: {
    backgroundColor: '#223F61',
    borderRadius: verticalScale(20),
    padding: scale(25),
      width: scale(300),
      height:verticalScale(150),
    alignItems: 'center',
    left:scale(20),
  },
  popupText: {
    color: '#FBFDFF',
    fontSize: moderateScale(16),
    marginBottom: verticalScale(25),
    textAlign: 'center',
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(2),
    fontWeight:600,
    lineHeight:verticalScale(20),

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
     fontFamily:"Kollektif",
    fontWeight:700,
    letterSpacing:scale(2),
    fontSize:moderateScale(12),
    

  },
  logoutButton: {
    backgroundColor: '#FBFDFF',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
  },
  logoutText: {
    color: '#223F61',
     fontFamily:"Kollektif",
    fontWeight:700,
    letterSpacing:scale(2),
    fontSize:moderateScale(12),
  },
});