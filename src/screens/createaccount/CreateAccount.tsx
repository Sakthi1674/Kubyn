import React from "react";
import { View, Text, StyleSheet } from "react-native";
 
const CreateAccount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#121212",
  },
});
 
export default CreateAccount;
 
 