// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
//   Easing,
//   TouchableOpacity,
//   SafeAreaView,
// } from 'react-native';
// import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

// const MonthlyIncomePopup = () => {
//   const monthlyIncome = 20000; // ₹60,000
//   const saved = 13000; // ₹10,000
//   const spend = monthlyIncome - saved;

//   // yearly values
//   const savedYear = saved * 12;
//   const spendYear = spend * 12;

//   // Animated heights
//   const savedHeight = useRef(new Animated.Value(0)).current;
//   const spendHeight = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(savedHeight, {
//       toValue: (saved / monthlyIncome) * 140, // height proportional
//       duration: 1000,
//       easing: Easing.out(Easing.ease),
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(spendHeight, {
//       toValue: (spend / monthlyIncome) * 140,
//       duration: 1000,
//       easing: Easing.out(Easing.ease),
//       useNativeDriver: false,
//     }).start();
//   }, [saved, spend]);

//   return (
//     <SafeAreaView style={styles.overlay}>
//       <View style={styles.popup}>
//         <Text style={styles.title}>Your Monthly Income: ₹{monthlyIncome.toLocaleString()}</Text>

//         <View style={styles.chartRow}>
//           {/* Saved Column */}
//           <View style={styles.columnBox}>
//             <Text style={styles.smallLabel}>Saved{'\n'}₹{saved.toLocaleString()}/month</Text>
//             <View style={styles.barWrapper}>
//               <Animated.View
//                 style={[
//                   styles.savedBar,
//                   { height: savedHeight },
//                 ]}
//               />
//             </View>
//             <Text style={styles.yearText}>₹{savedYear.toLocaleString()}/Year</Text>
//           </View>

//           {/* Spend Column */}
//           <View style={styles.columnBox}>
//             <Text style={styles.smallLabel}>Spend Now{'\n'}₹{spend.toLocaleString()}/month</Text>
//             <View style={styles.barWrapper}>
//               <Animated.View
//                 style={[
//                   styles.spendBar,
//                   { height: spendHeight },
//                 ]}
//               />
//             </View>
//             <Text style={styles.yearText}>₹{spendYear.toLocaleString()}/Year</Text>
//           </View>
//         </View>

//         <View style={styles.footerBox}>
//           <Text style={styles.footerText}>
//             Saving small surpluses compounds{'\n'}into big cushions
//           </Text>
//         </View>

//         <TouchableOpacity style={styles.closeBtn}>
//           <Text style={styles.closeText}>×</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default MonthlyIncomePopup;

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   popup: {
//     width: '85%',
//     backgroundColor: '#fff',
//     borderRadius: moderateScale(20),
//     padding: moderateScale(20),
//     alignItems: 'center',
//     elevation: 10,
//   },
//   title: {
//     fontSize: moderateScale(16),
//     fontWeight: '600',
//     color: '#243D63',
//     marginBottom: verticalScale(20),
//   },
//   chartRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//   },
//   columnBox: {
//     alignItems: 'center',
//   },
//   smallLabel: {
//     fontSize: moderateScale(10),
//     color: '#243D63',
//     textAlign: 'center',
//     marginBottom: verticalScale(8),
//   },
//   barWrapper: {
//     width: scale(70),
//     height: verticalScale(140),
//     backgroundColor: 'rgba(220,220,220,0.2)',
//     borderRadius: moderateScale(15),
//     justifyContent: 'flex-end',
//     overflow: 'hidden',
//     marginBottom: verticalScale(8),
//   },
//   savedBar: {
//     width: '100%',
//     backgroundColor: 'rgba(101,196,94,0.6)',
//     borderRadius: moderateScale(15),
//     height:scale(20),

//   },
//   spendBar: {
//     width: '100%',
//     backgroundColor: 'rgba(220,220,220,0.8)',
//     borderRadius: moderateScale(15),
//   },
//   yearText: {
//     fontSize: moderateScale(12),
//     fontWeight: '600',
//     color: '#243D63',
//   },
//   footerBox: {
//     backgroundColor: 'rgba(220,220,220,0.3)',
//     paddingVertical: verticalScale(10),
//     paddingHorizontal: moderateScale(16),
//     borderRadius: moderateScale(12),
//     marginTop: verticalScale(20),
//   },
//   footerText: {
//     fontSize: moderateScale(12),
//     color: '#243D63',
//     textAlign: 'center',
//   },
//   closeBtn: {
//     position: 'absolute',
//     top: moderateScale(12),
//     right: moderateScale(12),
//   },
//   closeText: {
//     fontSize: moderateScale(22),
//     color: '#243D63',
//   },
// });
