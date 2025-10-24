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


export default function HelpCentreScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}>
      
      
      <View style={styles.header}>
        <BackWard width={24} height={24} />
        <Text style={styles.headerTitle}>Help Centre</Text>
      </View>

     
      <TouchableOpacity style={styles.chatButton} activeOpacity={0.8}>
        <Text style={styles.chatButtonText}>Chat with Support</Text>
        <ChatBox  />
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text>Chat with Support</Text>
       <ChatBox width={14} height={14}/>
      </TouchableOpacity> */}

    
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
        <Text style={styles.sectionTitle}>Report an Issue</Text>

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
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginTop:50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginLeft: 30,
    color: '#121212',
    letterSpacing: 4,
    fontFamily:'Avenir LT Std',
    
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D2040',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 26,
    alignSelf: 'center',
    marginBottom: 40,
  },
  chatButtonText: {
    color: '#FBFDFF',
    fontSize: 13,
    fontWeight: '400',
    marginRight: 8,
   letterSpacing:1,
   fontFamily:'Avenir LT Std',
  },
  section: {
    marginBottom: 30,
  },
   section1: {
   flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0D2040',
    marginBottom: 22,
    fontFamily:'Avenir LT Std',
    letterSpacing:1,
  },
  dropdown: {
    backgroundColor: '#F0F4FA',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  seeMoreText: {
    color: '#0D2040',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: 16,
    fontFamily:'Avenir LT Std',
    letterSpacing:1,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E3E9F1',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 28,
    width: 130,
    marginBottom: 14,
  },
  categoryText: {
    fontSize: 14,
    color: '#223F61',
    fontFamily:'Open Sans',
  },
  textArea: {
    backgroundColor: '#F0F4FA',
    borderRadius: 10,
    padding: 14,
    fontSize: 12,
    color: '#0D2040',
    textAlignVertical: 'top',
    height: 100,
    marginBottom: 20,
    fontFamily:'Avenir LT Std',
  },
  submitButton: {
    backgroundColor: '#223F61',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 22,
    alignSelf: 'flex-end',
  },
  submitText: {
    color: '#FBFDFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
