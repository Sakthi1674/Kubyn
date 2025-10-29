import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import UploadIcon from '../../../assets/icons/UploadIcon';
import ButtonComp from '../../../components/common/ButtonComp';
import colors from '../../../theme/color';

const DownloadStatements = () => {
  const navigation = useNavigation<NavigationProp<any>>();
   const colorScheme = useColorScheme();
   const theme = colors[colorScheme ?? "light"];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('AccountScreen')}
        >
          <BackWard
            width={15}
            height={15}
            color={theme.Button}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>
          Download Statements
        </Text>
      </View>

      {/* Dropdown */}
      <View style={[styles.dropdownWrapper, { backgroundColor: theme.buttondark }]}>
        <Text style={[styles.dropdownText, { color: theme.text }]}>
          Select Period
        </Text>
        <TouchableOpacity>
          <ArrowDown width={15} height={10} color={theme.Button} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Cards */}
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <View
            style={[styles.card, { backgroundColor: theme.buttondark }]}
            key={index}
          >
            <View style={styles.icon}>
              <UploadIcon width={20} height={20} stroke={theme.text} />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <ButtonComp
          title="Download All"
          onPress={() => console.log('Download pressed')}
          style={[styles.button, { backgroundColor: theme.Button }]}
          textStyle={{ color: theme.bttext }}
        />
      </View>
    </View>
  );
};

export default DownloadStatements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  backButton: {
    padding: scale(10),
    marginRight: scale(10),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    fontFamily: 'Kollektif',
    letterSpacing: scale(3),
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(6),
    marginVertical: verticalScale(15),
    width: scale(110),
    opacity: 0.9,
  },
  dropdownText: {
    fontSize: moderateScale(11),
    fontFamily: 'Avenir LT Std',
  },
  cardsContainer: {
    flexGrow: 1,
  },
  card: {
    height: verticalScale(48),
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(15),
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
  icon: {
    position: 'absolute',
    right: scale(20),
  },
  buttonContainer: {
    marginVertical: verticalScale(30),
  },
  button: {
    marginHorizontal: scale(30),
  },
});
