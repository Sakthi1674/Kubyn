import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import ButtonComp from './../../components/common/ButtonComp';


// Define your stack param list
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const WelcomePage: React.FC = () => {
  // Type the navigation prop
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("Home"); // Go back to SplashScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App!</Text>

      {/* Default React Native button */}
      <Button title="Go Back to Splash" onPress={handlePress} />

      {/* ✅ Custom reusable button component */}
      <ButtonComp
        title="Custom Button"
        color="#FF6B00" // You can change this dynamically
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default WelcomePage;
