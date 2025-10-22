import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Camera from '../../../assets/icons/Camera';
import GalleryPopup from '../../../assets/icons/GalleryPopup';
import Wrong from '../../../assets/icons/Wrong';
import RemoveIcon from '../../../assets/icons/RemoveIcon';

interface GalleryPopupProps {
  visible: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<GalleryPopupProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.popupBox}
            >
                <TouchableOpacity style={styles.wrong}
                onPress={onClose}>
                <Wrong/>
                </TouchableOpacity>
              <Text style={styles.popupTitle}>Change Profile Photo </Text>

              <TouchableOpacity style={styles.popupButton}>
                 <View  style={styles.icon}>
                <Camera width={24} height={24}/>
                </View>
                <Text style={styles.popupText}>Take a picture</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.popupButton}>
                <View  style={styles.icon}>
                <GalleryPopup  width={24} height={24}/>
                </View>
                <Text style={styles.popupText}>Upload from Photos / Files</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.popupButton]}
                onPress={onClose}
              >
                <View  style={styles.icon}>

                <RemoveIcon width={24} height={24}/>
                </View>
                <Text style={styles.popupText}>Remove Image</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor:'#E3E9F1CC',
    justifyContent: 'center',
    alignItems: 'center',
    width:'85%',
  },
  popupBox: {
    width: 330,
    height:320,
    backgroundColor: '#223F61',
    borderRadius: 25,
    padding: 20,
    marginTop:70,
    marginLeft:50,
    
  
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FBFDFF',
    marginTop:20,
    right:15,
    fontFamily:'Avenir LT Std',
    letterSpacing:2,
  },
  popupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
 borderRadius: 8,
 height:50,
    width:250,
    marginTop:20,
    left:20,
  
   
  },
  popupText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#223F61',
    left:25,
    fontFamily:'Kollektif',
    letterSpacing:2,
    fontWeight:400,

  },
icon:{
    left:10,
},
wrong:{
left:270,
} 
});