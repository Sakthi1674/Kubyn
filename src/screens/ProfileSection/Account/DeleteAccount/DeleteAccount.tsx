import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
} from "react-native";
import ButtonComp from "../../../../components/common/ButtonComp";
import BackWard from "../../../../assets/icons/BackWard";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import colors from "../../../../theme/color";


type RootStackParamList = {
  AccountDeleteVerification: undefined;
};

export default function DeleteAccount() {
  const navigation = useNavigation<NavigationProp<any>>();
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme ?? "light"];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AccountScreen")}>
          <BackWard width={15} height={15} color={theme.text} /> {/* ✅ theme icon */}
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.text }]}>
          Delete Account
        </Text>
      </View>

      {/* Title */}
      <Text style={[styles.confirmTitle, { color: theme.text }]}>
        Are you sure you want to delete your account?
      </Text>

      {/* Info Text */}
      <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
        We respect your decision. Please note that deleting your account is
        permanent, and all your data will be securely removed.
      </Text>

      <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
        Note: This includes your account history, preferences, and any saved
        information. Once deleted, your account cannot be restored.
      </Text>

      <View style={styles.btn}>
        {/* Delete Account Button */}
        <ButtonComp
          title="Delete Account"
          onPress={() => navigation.navigate("AccountDeleteVerification")}
          style={{
            backgroundColor: theme.Button,
            marginTop: verticalScale(545),
            marginBottom: verticalScale(20),
            marginHorizontal: scale(35),
          }}
          textStyle={{
            color: theme.bttext,
          }}
        />

        {/* Cancel Button */}
        <ButtonComp
          title="Cancel"
          onPress={() => navigation.navigate("AccountScreen")}
          style={{
            backgroundColor: theme.buttondark,
            marginHorizontal: scale(35),
          }}
          textStyle={{
            color: theme.text,
          }}
        />
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(60),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(30),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    letterSpacing: moderateScale(5),
    marginLeft: scale(30),
  },
  confirmTitle: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    marginBottom: verticalScale(20),
    letterSpacing: scale(1.5),
    lineHeight: verticalScale(19),
  },
  paragraph: {
    fontSize: moderateScale(10),
    marginBottom: verticalScale(15),
    lineHeight: verticalScale(15),
    fontWeight: "500",
    letterSpacing: scale(1),
  },
  btn: {
    position: "absolute",
  },
});
