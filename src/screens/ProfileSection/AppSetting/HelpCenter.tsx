import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';

import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import ChatBox from '../../../assets/icons/ChatBox';
import ButtonComp from '../../../components/common/ButtonComp';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';





export default function HelpCentreScreen() {
        const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <ScrollView
      style={styles.container}
      // contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}>
      
      
      <View style={styles.header}>
        <BackWard width={24} height={24} onPress={()=>navigation.navigate('ProfileScreen')}/>
        <Text style={styles.headerTitle}>Help Centre</Text>
      </View>

     
      <TouchableOpacity style={styles.chatButton} activeOpacity={0.8}>
        <Text style={styles.chatButtonText}>Chat with Support</Text>
        <ChatBox width={24} height={24}  />
      </TouchableOpacity>
   

    
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FAQs</Text>

        <View style={styles.dropdown}>
          <ArrowDown width={14} height={14} />
        </View>
        <View style={styles.dropdown}>
          <ArrowDown width={14} height={14} />
        </View>
        <View style={styles.dropdown}>
          <ArrowDown width={14} height={14} />
        </View>
        <View style={styles.dropdown}>
          <ArrowDown width={14} height={14} />
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* Report an Issue Section */}
      <View style={styles.section}>
        <View style={styles.section1}>
        <Text style={styles.sectionTitle1}>Report an Issue</Text>

        <View style={styles.categoryButton}>
          <Text style={styles.categoryText}>Category</Text>
          <ArrowDown width={12} height={16} />
        </View>
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Share your concerns..."
          placeholderTextColor="#8A97A7"
          multiline
          editable={true} 
        />

        <TouchableOpacity style={styles.submitButton} >
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity> 
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
    paddingHorizontal: scale(24),
    // paddingTop: Platform.OS === 'ios' ? 60 : 40,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(25),
    marginTop:verticalScale(50),
  },
  headerTitle: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: scale(30),
    color: '#121212',
    letterSpacing: scale(4),
    fontFamily:'Avenir LT Std',
    
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D2040',
    borderRadius: moderateScale(25),
    alignSelf: 'center',
    marginBottom: verticalScale(20),
    width:scale(200),
    height:verticalScale(50),
  },
  chatButtonText: {
    color: '#FBFDFF',
    fontSize: moderateScale(12),
    fontWeight: '400',
    marginRight: scale(8),
   letterSpacing:scale(1),
   fontFamily:'Avenir LT Std',
  },
  section: {
    marginBottom: verticalScale(30),
  },
   section1: {
   flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  sectionTitle: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#0D2040',
    marginBottom: verticalScale(22),
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(1),
  },
    sectionTitle1: {
    fontSize: moderateScale(15),
    fontWeight: '700',
    color: '#0D2040',
    marginBottom: verticalScale(22),
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(1),
  },
  dropdown: {
    backgroundColor: '#F0F4FA',
    borderRadius: moderateScale(10),
    height: verticalScale(39),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: scale(14),
    marginBottom: verticalScale(10),
  },
  seeMoreText: {
    color: '#0D2040',
    fontSize: moderateScale(13),
    fontWeight: '600',
    textAlign: 'right',
    // marginBottom: verticalScale(16),
    fontFamily:'Avenir LT Std',
    letterSpacing:scale(1),
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E3E9F1',
    borderRadius: verticalScale(16),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(28),
    width: scale(130),
    marginBottom: verticalScale(14),
  },
  categoryText: {
    fontSize: moderateScale(14),
    color: '#223F61',
    fontFamily:'Open Sans',
  },
  textArea: {
    backgroundColor: '#F0F4FA',
    borderRadius: moderateScale(10),
    padding: scale(14),
    fontSize: moderateScale(12),
    color: '#0D2040',
    textAlignVertical: 'top',
    height: verticalScale(85),
    marginBottom: verticalScale(2),
    fontFamily:'Avenir LT Std',
  },
  submitButton: {
    backgroundColor: '#223F61',
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(26),
    alignSelf: 'flex-end',
  },
  submitText: {
    color: '#FBFDFF',
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
});
