import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import ButtonComp from '../../../../components/common/ButtonComp';
import BackWard from '../../../../assets/icons/BackWard';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


// Define type for navigation
type RootStackParamList = {
    AccountDeleteVerification: undefined;
};

export default function DeleteAccount() {
    const navigation = useNavigation<NavigationProp<any>>();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity  onPress={() => navigation.navigate('AccountScreen')}>
                    <BackWard width={15} height={15} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Delete Account</Text>
            </View>

            {/* Title */}
            <Text style={styles.confirmTitle}>
                Are you sure you want to delete your account?
            </Text>

            {/* Info Text */}
            <Text style={styles.paragraph}>
                We respect your decision. Please note that deleting your account is
                permanent, and all your data will be securely removed.
            </Text>

            <Text style={styles.paragraph}>
                Note: This includes your account history, preferences, and any saved
                information. Once deleted, your account cannot be restored.
            </Text>

            
            
   <View style={styles.btn}>
        <ButtonComp
                
                title="Delete Account"
              
               onPress={() => navigation.navigate('AccountDeleteVerification')}
                 style={{
                       backgroundColor: "#223F61",
                       marginTop: verticalScale(545),        
                       marginBottom: verticalScale(20),     
                       marginHorizontal: scale(35),
                 }}
                  textStyle={{
                    color: "#FAF8F5",
                    
                }}
             />
             
            
     
     <ButtonComp
       
                title="Cancel"
                // onPress={goToHome}
                onPress={() => {'../deleteaccount/AccountDeleteVerification'}}
                 style={{
                       backgroundColor: "#E3E9F1",     
                       marginHorizontal: scale(35),
                 }}
                  textStyle={{
                    color: "#223F61",
                }}
            />
            </View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
    flex: 1,
    // width: scale(350),
    // height: verticalScale(500),
    backgroundColor: '#ffffff',
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: moderateScale(5),
    marginLeft: scale(30),
  },
  confirmTitle: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: '#2e446c',
    marginBottom: verticalScale(20),
    letterSpacing:scale(1.5),
    lineHeight:verticalScale(19),
  },
  paragraph: {
    fontSize: moderateScale(10),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(15),
    fontWeight: '500',
    letterSpacing:scale(1),

  },
  paragraph1: {
    fontSize: moderateScale(9),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(15),
    fontWeight: '500',
    letterSpacing:scale(1),

  },
 btn:{
  position:'absolute',
 }
});
