import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Camera from '../../../assets/icons/Camera';
import GalleryPopup from '../../../assets/icons/GalleryPopup';
import Wrong from '../../../assets/icons/Wrong';
import RemoveIcon from '../../../assets/icons/RemoveIcon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../theme/color';


interface GalleryPopupProps {
  visible: boolean;
  onClose: () => void;
}

const UserProfile: React.FC<GalleryPopupProps> = ({ visible, onClose }) => {

  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;
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
               <View style={[styles.popupBox, { backgroundColor: theme.container }]}>
                <TouchableOpacity style={styles.wrong}
                onPress={onClose}>
                <Wrong width={20} height={20}  />
                </TouchableOpacity>
            <Text style={styles.popupTitle}>
                Change Profile Photo
              </Text>

              <TouchableOpacity style={[styles.popupButton, { backgroundColor: theme.bttext }]}>
                <View style={styles.icon}>
                  <Camera width={24} height={24} color={theme.text} />
                </View>
                <Text style={[styles.popupText, { color: theme.text }]}>
                  Take a picture
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.popupButton, { backgroundColor: theme.bttext }]}>
                <View style={styles.icon}>
                  <GalleryPopup width={24} height={24} color={theme.text} />
                </View>
                <Text style={[styles.popupText, { color: theme.text }]}>
                  Upload from Photos / Files
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.popupButton, { backgroundColor: theme.bttext }]}
                onPress={onClose}
              >
                <View style={styles.icon}>
                  <RemoveIcon width={24} height={24} color={theme.text} />
                </View>
                <Text style={[styles.popupText, { color: theme.text }]}>
                  Remove Image
                </Text>
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
    height:'180%',
  },
  popupBox: {
    width: scale(300),
    height:verticalScale(230),
    backgroundColor: '#223F61',
    borderRadius: moderateScale(25),
    padding: scale(20),
    marginTop:verticalScale(70),
    marginLeft:scale(50),
    
  
  },
  popupTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    textAlign: 'center',
    color: '#FBFDFF',
    // marginTop:verticalScale(10),
    right:scale(15),
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(2),
  },
  popupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
 borderRadius: moderateScale(8),
 height:verticalScale(40),
    width:scale(235),
    marginTop:verticalScale(15),
    left:scale(10),
  
   
  },
  popupText: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    color: '#223F61',
    left:scale(25),
    fontFamily:'Kollektif',
    letterSpacing:scale(2),
    fontWeight:600,

  },
icon:{
    left:scale(10),
},
wrong:{
left:scale(250),
} 
});
