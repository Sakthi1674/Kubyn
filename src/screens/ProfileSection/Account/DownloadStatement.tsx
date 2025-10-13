import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import UploadIcon from '../../../assets/icons/UploadIcon';
import ButtonComp from '../../../components/common/ButtonComp';


const DownloadStatements = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <BackWard width={15} height={15} />
        </TouchableOpacity>
        <Text style={styles.title}>Download Statements</Text>
      </View>

      {/* Dropdown */}
      <View style={styles.dropdownWrapper}>
        <Text style={styles.dropdownText}>Select Period</Text>
        <TouchableOpacity>
          <ArrowDown width={15} height={10} />
        </TouchableOpacity>
      </View>

      {/* Scrollable Cards */}
      <ScrollView
        contentContainerStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <View style={styles.card} key={index}>
                <View style={styles.icon}>
                    <UploadIcon width={20} height={20} />
                </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <ButtonComp
          title="Download All"
          onPress={() => console.log('Download pressed')}
          style={styles.button}
          textStyle={{ color: '#FAF8F5' }}
        />
      </View>
    </View>
  );
};

export default DownloadStatements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:30,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Kollektif',
    letterSpacing: 4,
  },
  dropdownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#E3E9F1',
    marginVertical: 25,
    width: 140,
     color: '#223F61',
    
  },
  dropdownText: {
    fontSize: 14,
    color: '#223F61',
    fontFamily:"Avenir LT Std",
  },
  cardsContainer: {
    flexGrow: 1,
  },
  card: {
    height: 70,
    backgroundColor: '#E9EEF6',
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#223F61',
    marginHorizontal: 30,
  },
});