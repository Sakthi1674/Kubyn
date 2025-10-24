import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Wrong from '../../../assets/icons/Wrong';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface ChangeNamePopupProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: (newName: string) => void;
}

const UserName: React.FC<ChangeNamePopupProps> = ({
  visible,
  onCancel,
  onConfirm,
}) => {
  const [newName, setNewName] = useState('');

  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.popupContainer}>
              <TouchableOpacity style={styles.wrong} onPress={onCancel}>
              <Wrong />
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Type your Name"
                placeholderTextColor="#999"
                value={newName}
                onChangeText={setNewName}
                
              />

              <Text style={styles.popupText}>Are you Sure You want {'\n'}to change name ?</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.yesButton}
                  onPress={() => onConfirm(newName)}>
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.noButton} onPress={onCancel}>
                  <Text style={styles.noText}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UserName;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    width: scale(340), // instead of '85%'
    height: '100%',
    backgroundColor: '#E3E9F1CC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContainer: {
    backgroundColor: '#102B4C',
    borderRadius: moderateScale(20),
    padding: moderateScale(25),
    width: scale(300),
    height: verticalScale(190),
    alignItems: 'center',
    // left: scale(10),
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    marginTop: verticalScale(10),
    color: '#223F61',
    textAlign: 'center',
    fontFamily: 'Kollektif',
  },
  popupText: {
    color: '#fff',
    fontSize: moderateScale(14),
    marginTop: verticalScale(20),
    textAlign: 'center',
    letterSpacing: moderateScale(2),
    fontFamily: 'Avenir LT Std',
    fontWeight:600,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },
  yesButton: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    width: scale(90),
    marginTop: verticalScale(25),
  },
  yesText: {
    color: '#183153',
    fontWeight: '700',
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontFamily: 'Kollektif',
    letterSpacing: moderateScale(2),
  },
  noButton: {
    backgroundColor: '#F2F4F7',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    width: scale(90),
    marginTop: verticalScale(25),
  },
  noText: {
    color: '#183153',
    letterSpacing: moderateScale(2),
    textAlign: 'center',
    fontFamily: 'Kollektif',
    fontWeight: '700',
    fontSize: moderateScale(12),
  },
  wrong: {
    left: scale(120),
  },
});