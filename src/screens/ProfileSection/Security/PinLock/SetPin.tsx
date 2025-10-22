import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BackWard from '../../../../assets/icons/BackWard';
import ButtonComp from '../../../../components/common/ButtonComp';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const SetPin = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackWard width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Pin Lock</Text>
      </View>

      {/* Subtext */}
      <Text style={styles.subText}>Set Pin</Text>

      {/* PIN Placeholder */}
      <View style={styles.pinContainer}>
        {[0, 1, 2, 3].map((_, index) => (
          <View key={index} style={styles.pinDot} />
        ))}
      </View>

      {/* Next Button */}
      <View style={styles.buttonWrapper}>
        <ButtonComp
          title="Next"
          onPress={() => navigation.navigate('ResetPin')}
          style={{
            backgroundColor: '#223F61',
            marginHorizontal: 30,
          }}
          textStyle={{
            color: '#FAF8F5',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SetPin;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 70,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    letterSpacing: 2,
    marginLeft: 30,
    fontFamily: 'Kollektif',
  },
  subText: {
    fontSize: 14,
    color: '#121212',
    marginTop: 40,
    fontFamily: 'Avenir LT Std',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
    marginTop: 180,
  },
  pinDot: {
    width: 30,
    height: 1,
    backgroundColor: '#121212',
    marginHorizontal: 10,
    borderRadius: 2,
  },
  buttonWrapper: {
    width: '90%',
    position: 'absolute',
    bottom: 40,
  },
});
