import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import BackWard from '../../../assets/icons/BackWard';
import ArrowDown from '../../../assets/icons/ArrowDown';
import ChatBox from '../../../assets/icons/ChatBox';
import colors from '../../../theme/color';


export default function HelpCentreScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? colors.dark : colors.light;
  const [expanded, setExpanded] = useState<number | null>(null);
  const [issueText, setIssueText] = useState('');

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer:
        'Go to Settings → Account → Change Password. Follow the prompts to reset your password.',
    },
    {
      question: 'How do I contact support?',
      answer:
        'You can chat with our support team directly using the "Chat with Support" button above.',
    },
    {
      question: 'Where can I find my order history?',
      answer: 'You can view your orders under Profile → My Orders section.',
    },
    {
      question: 'How do I update my profile information?',
      answer: 'Navigate to Profile → Edit Profile to update your details.',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleSubmit = () => {
    if (issueText.trim() === '') {
      alert('Please describe your issue before submitting.');
      return;
    }
    alert('Your issue has been submitted. Our team will get back to you shortly.');
    setIssueText('');
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <BackWard width={10} height={16} color={theme.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Help Centre</Text>
      </View>

      {/* Chat Button */}
      <TouchableOpacity
        style={[styles.chatButton, { backgroundColor: theme.Button }]}
        activeOpacity={0.8}>
        <Text style={[styles.chatButtonText, { color: theme.bttext }]}>
          Chat with Support
        </Text>
        <ChatBox width={24} height={24} strcoke={theme.bttext} />
      </TouchableOpacity>

      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>FAQs</Text>

        {faqs.map((item, index) => (
          <View
            key={index}
            style={[styles.dropdown, { backgroundColor: theme.buttondark }]}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => toggleExpand(index)}
              activeOpacity={0.7}>
              <Text style={[styles.dropdownText, { color: theme.text }]}>
                {item.question}
              </Text>
            <View
  style={{
    transform: [{ rotate: expanded === index ? '180deg' : '0deg' }],
  }}
>
  <ArrowDown width={14} height={14} color={theme.text} />
</View>

            </TouchableOpacity>
            {expanded === index && (
              <Text style={[styles.dropdownContent, { color: theme.textSecondary }]}>
                {item.answer}
              </Text>
            )}
          </View>
        ))}

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={[styles.seeMoreText, { color: theme.text }]}>See More</Text>
        </TouchableOpacity>
      </View>

      {/* Report an Issue Section */}
      <View style={styles.section}>
        <View style={styles.section1}>
          <Text style={[styles.sectionTitle1, { color: theme.text }]}>
            Report an Issue
          </Text>

          <View
            style={[
              styles.categoryButton,
              { backgroundColor: theme.buttondark },
            ]}>
            <Text style={[styles.categoryText, { color: theme.textSecondary }]}>
              Category
            </Text>
            <ArrowDown width={12} height={16} color={theme.textSecondary} />
          </View>
        </View>

        <TextInput
          style={[
            styles.textArea,
            {
              backgroundColor: theme.buttondark,
              color: theme.text,
            },
          ]}
          placeholder="Share your concerns..."
          placeholderTextColor={theme.textSecondary}
          multiline
          value={issueText}
          onChangeText={setIssueText}
        />

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: theme.Button }]}
          onPress={handleSubmit}
          activeOpacity={0.8}>
          <Text style={[styles.submitText, { color: theme.bttext }]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingTop: verticalScale(60),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(25),
  },
  headerTitle: {
    fontSize: moderateScale(22),
    fontWeight: '700',
    marginLeft: scale(30),
    letterSpacing: scale(4),
    fontFamily: 'Avenir LT Std',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(25),
    alignSelf: 'center',
    marginBottom: verticalScale(20),
    width: scale(200),
    height: verticalScale(50),
  },
  chatButtonText: {
    fontSize: moderateScale(12),
    fontWeight: '400',
    marginRight: scale(8),
    letterSpacing: scale(1),
    fontFamily: 'Avenir LT Std 55 Roman',
  },
  section: {
    marginBottom: verticalScale(30),
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    marginBottom: verticalScale(22),
    fontFamily: 'Avenir LT Std 85 Heavy',
    letterSpacing: scale(1),
  },
  sectionTitle1: {
    fontSize: moderateScale(12),
    fontWeight: '700',
    marginBottom: verticalScale(22),
    fontFamily: 'Avenir LT Std 85 Heavy',
    letterSpacing: scale(1),
  },
  dropdown: {
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
    overflow: 'hidden',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scale(14),
    height: verticalScale(39),
  },
  dropdownText: {
    fontSize: moderateScale(12),
    fontFamily: 'Avenir LT Std',
  },
  dropdownContent: {
    paddingHorizontal: scale(14),
    paddingBottom: verticalScale(10),
    fontSize: moderateScale(12),
    fontFamily: 'Avenir LT Std',
  },
  seeMoreText: {
    fontSize: moderateScale(13),
    fontWeight: '600',
    textAlign: 'right',
    fontFamily: 'Avenir LT Std',
    letterSpacing: scale(1),
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: verticalScale(16),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(28),
    width: scale(130),
    marginBottom: verticalScale(14),
  },
  categoryText: {
    fontSize: moderateScale(14),
    fontFamily: 'Open Sans',
  },
  textArea: {
    borderRadius: moderateScale(10),
    padding: scale(14),
    fontSize: moderateScale(12),
    textAlignVertical: 'top',
    height: verticalScale(85),
    marginBottom: verticalScale(2),
    fontFamily: 'Avenir LT Std',
  },
  submitButton: {
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(26),
    alignSelf: 'flex-end',
  },
  submitText: {
    fontSize: moderateScale(15),
    fontWeight: '600',
  },
});
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

