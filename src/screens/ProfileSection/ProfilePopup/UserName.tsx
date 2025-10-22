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
  width: '85%',       
  height: '100%',      
  backgroundColor: '#E3E9F1CC',
  justifyContent: 'center',
  alignItems: 'center',
     
     
     
  },
  popupContainer: {
    backgroundColor: '#102B4C',
    borderRadius: 20,
    padding: 25,
    width: 340,
    height:220,
    alignItems: 'center',
    left:30,
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 15,
    color: '#223F61',
    textAlign: 'center',
    fontFamily:'Kollektif',
  },
  popupText: {
    color: '#fff',
    fontSize: 13,
    marginTop: 25,
    textAlign: 'center',
    letterSpacing:2,
    fontFamily:'Avenir LT Std',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
  },
  yesButton: {
    backgroundColor: '#E3E9F1CC',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
    width:90,
      marginTop: 25,
  },
  yesText: {
    color: '#183153',
    fontWeight: 700,
    fontSize:12,
    textAlign:'center',
    fontFamily:'Kollektif',
    letterSpacing:2,
    
  },
  noButton: {
    backgroundColor: '#F2F4F7',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
     width:90,
       marginTop: 25,
  },
  noText: {
    color: '#183153',
    letterSpacing:2,
    textAlign:'center',
    fontFamily:'Kollektif',
     fontWeight: 700,
    fontSize:12,

  },
  wrong:{
    left:140,
  }
});