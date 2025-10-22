import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

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
    borderRadius: 20,
    padding: 25,
      width: 340,
      height:180,
    alignItems: 'center',
    left:20,
  },
  popupText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
    fontFamily:'Avenir LT Std',
    letterSpacing:2,
    fontWeight:600,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  cancelButton: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
   

  },
  cancelText: {
    color: '#223F61',
     fontFamily:"Kollektif",
    fontWeight:700,
    letterSpacing:2,

  },
  logoutButton: {
    backgroundColor: '#F2F4F7',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  logoutText: {
    color: '#223F61',
     fontFamily:"Kollektif",
    fontWeight:700,
    letterSpacing:2,
  },
});