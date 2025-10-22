import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation, NavigationProp, RouteProp, useRoute } from "@react-navigation/native";

import BackWard from "../../../../assets/icons/BackWard";
import MobileIcon from "../../../../assets/icons/MobileIcon";
import EmailIcon from "../../../../assets/icons/EmailIcon";
import ButtonComp from "../../../../components/common/ButtonComp";

// Define the navigation stack types
type RootStackParamList = {
  ForgetPin: undefined;
  SetPin: {
    method: "sms" | "email";
    contact: string;
    userId: string;
    phone: string;
    email: string;
  };
  // Add other screens if needed
};

// Define route params type if coming from previous screen
type ForgetPinRouteProp = RouteProp<any, any>;

const ForgetPin: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<ForgetPinRouteProp>();

  const [selectedMethod, setSelectedMethod] = useState<"sms" | "email">("sms");
  const [phone, setPhone] = useState<string>(route.params?.phoneNumber || "+91 ***** **234");
  const [email, setEmail] = useState<string>(route.params?.email || "example@gmail.com");
  const [userId, setUserId] = useState<string>(route.params?.userId || "");
  const [loading, setLoading] = useState(false);

  // Fetch user data if phone exists
  useEffect(() => {
    const fetchUserData = async () => {
      if (!phone) return;
      setLoading(true);
      try {
        const response = await fetch("http://10.0.2.2:5000/api/forget-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phoneNumber: phone }),
        });

        const data = await response.json();
        if (response.ok) {
          setEmail(data.email || email);
          setPhone(data.phoneNumber || phone);
          setUserId(data.userId || userId);
        } else {
          console.log("Error fetching user data:", data.message);
        }
      } catch (err) {
        console.error("Server error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [phone]);

  const handleVerify = () => {
    const contactInfo = selectedMethod === "sms" ? phone : email;

    navigation.navigate("SetPin", {
      method: selectedMethod,
      contact: contactInfo,
      userId,
      phone,
      email,
    });
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#223F61" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <BackWard width={10} height={16} color="#223F61" />
        </TouchableOpacity>
        <Text style={styles.heading}>Forget Password</Text>
      </View>

      <Text style={styles.infoText}>Select how we should reset your password:</Text>

      {/* SMS Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "sms" && styles.selectedContainer,
        ]}
        onPress={() => setSelectedMethod("sms")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[styles.bigCircle, { opacity: selectedMethod === "sms" ? 1 : 0.2 }]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.viaText}>via SMS</Text>
          <Text style={styles.contactText}>{phone}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <MobileIcon />
        </View>
      </TouchableOpacity>

      {/* Email Option */}
      <TouchableOpacity
        style={[
          styles.contactMethodContainer,
          selectedMethod === "email" && styles.selectedContainer,
        ]}
        onPress={() => setSelectedMethod("email")}
      >
        <View style={styles.circleWrapper}>
          <View
            style={[styles.bigCircle, { opacity: selectedMethod === "email" ? 1 : 0.2 }]}
          >
            <View style={styles.smallCircle} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.viaText}>via Email</Text>
          <Text style={styles.contactText}>{email}</Text>
        </View>
        <View style={styles.iconWrapper}>
          <EmailIcon />
        </View>
      </TouchableOpacity>

      {/* Verify Button */}
      <ButtonComp
        title="Verify"
        onPress={handleVerify}
        style={{ backgroundColor: "#223F61", marginTop: 30 }}
        textStyle={{ color: "#FAF8F5" }}
      />
    </View>
  );
};

export default ForgetPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
    paddingTop: 60,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  backButton: { position: "absolute", left: 0 },
  heading: { fontWeight: "700", fontSize: 28, color: "#121212" },
  infoText: { fontSize: 14, color: "#121212", marginBottom: 20 },
  contactMethodContainer: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3E9F1CC",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#223F61",
    padding: 16,
    marginBottom: 20,
  },
  selectedContainer: { borderWidth: 2 },
  circleWrapper: { marginRight: 10 },
  bigCircle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: "#223F61",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: { width: 9, height: 9, backgroundColor: "#223F61", borderRadius: 4.5 },
  textContainer: { flex: 1 },
  viaText: { fontSize: 16, color: "#223F61", opacity: 0.52 },
  contactText: { fontSize: 16, color: "#121212", opacity: 0.75, marginTop: 10 },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FBFDFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
