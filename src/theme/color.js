import { Button } from "react-native-web";


// Light Theme Colors
export const lightColors = {
  background: '#FBFDFF',
  text: '#121212',
  bttext: '#FBFDFF',
  textSecondary: '#666666',
  notification: '#FD9D9D',
  icon: "#D1D1D6",
  Button: "#223F61",
  radio: "#223F61",
  container: "#223F61",
  buttonDisabled:"#98989F",
  buttondark:"#E3E9F1",
  bar:"#223F61"
};

// Dark Theme Colors
export const darkColors = {
  background: '#2F2F2F',
  text: '#FAFBFB',
  bttext:'#2F2F2F',
  textSecondary: '#98989F',
  notification: '#E74C3C',
  icon: "#D1D1D6",
  Button: "#E3E9F1",
  radio: "#E3E9F1",
  container: "#3A3A3A",
  buttonDisabled:"#E3E9F1CC",
  buttondark:"#3A3A3A",
  bar:"#223F61"
};

// Combined theme object
export const colors = {
  light: lightColors,
  dark: darkColors,
};

// Default export
export default colors;