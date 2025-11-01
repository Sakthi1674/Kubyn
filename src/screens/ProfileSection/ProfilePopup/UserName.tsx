import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';
import Wrong from '../../../assets/icons/Wrong';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/color';

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
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  return (
    <Modal animationType="fade" transparent visible={visible} onRequestClose={onCancel}>
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.popupContainer, { backgroundColor: theme.Profilebg }]}>
              <TouchableOpacity style={styles.wrong} onPress={onCancel}>
             <Wrong width={20} height={20}  />
              </TouchableOpacity>
          <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.bttext,
                    color: theme.text,
                    borderColor: theme.Button,
                  },
                ]}
                placeholder="Type your Name"
                placeholderTextColor={theme.text}
                value={newName}
                onChangeText={setNewName}
              />

       <Text style={styles.popupText}>
                Are you sure you want{'\n'}to change your name?
              </Text>
                           <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.yesButton, { backgroundColor: theme.pop }]}
                  onPress={() => onConfirm(newName)}
                >
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.noButton, { backgroundColor: theme.bttext }]}
                  onPress={onCancel}
                >
                  <Text style={[styles.noText, { color: theme.text }]}>No</Text>
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
    backgroundColor: '#E3E9F1CC',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    fontFamily: 'Kollektif-Regular',
    fontSize: moderateScale(12),
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
    width: '80%',
    marginTop: verticalScale(15),
  },
  yesButton: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    width: scale(90),
    
  },
  yesText: {
    color: '#183153',
    fontWeight: '700',
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontFamily: 'Kollektif-Bold',
    letterSpacing: moderateScale(2),
  },
  noButton: {
    backgroundColor: '#F2F4F7',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    width: scale(90),
  },
  noText: {
    color: '#183153',
    letterSpacing: moderateScale(2),
    textAlign: 'center',
    fontFamily: 'Kollektif-Bold',
    fontWeight: '700',
    fontSize: moderateScale(12),
  },
  wrong: {
    left: scale(120),
  },
});