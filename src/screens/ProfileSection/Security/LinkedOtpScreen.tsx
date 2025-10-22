import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import ButtonComp from '../../../components/common/ButtonComp';
import BackWard from '../../../assets/icons/BackWard';


const LinkedOtpScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity >
          <BackWard width={20} height={20} />
        </TouchableOpacity>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Confirmation</Text>
        <Text style={styles.subText}>
          Please Enter the verification Code sent to {'\n'}+91*****0156
        </Text>

        {/* OTP Boxes */}
        <View style={styles.otpContainer}>
          {[0, 1, 2, 3].map((_, index) => (
            <View key={index} style={styles.otpBox}>
              <Text style={styles.otpText}>0</Text>
            </View>
          ))}
        </View>
            
        {/* Verify Button */}
        <View>
        <ButtonComp
       
                title="Verify"
                // onPress={goToHome}
                onPress={() => {''}}
                 style={{
                       backgroundColor: "#223F61" ,   
                      //  marginHorizontal: 30,
                      width:210,

                      
                 }}
                  textStyle={{
                    color:  "#E3E9F1",
                    fontFamily:"Avenir LT Std",
                }}
            />
            </View>
    
                </View>
     
      <View style={styles.updateWrapper}>
       <ButtonComp
       
                title="Update"
                // onPress={goToHome}
                onPress={() => {''}}
                 style={{
                       backgroundColor: "#223F61",     
                       marginHorizontal: 30,
                        opacity:0.35,
                 }}
                  textStyle={{
                    color: "#FBFDFF",
                     fontWeight: '600',
                  fontFamily:"Avenir LT Std",
                  letterSpacing:2,
                }}
            />
      </View>
    </SafeAreaView>
  );
};

export default LinkedOtpScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 50,
  },
  cardContainer: {
    width: '85%',
    backgroundColor: '#f4f7fb',
    borderRadius: 22,
    paddingVertical: 50,
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Avenir LT Std',
    marginBottom: 10,
  
  },
  subText: {
    fontSize: 12,
    color: '#2e446c',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'Avenir LT Std',
    lineHeight: 18,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  otpBox: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E6ED',
  },
  otpText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#223F61',
    opacity:0.35,
  },
  updateWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
    alignItems: 'center',
  },

 
});