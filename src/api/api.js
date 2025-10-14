import { Platform } from "react-native";

const API_BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:5000" : "http://localhost:5000";

export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/test`);
    const data = await response.json();
    console.log("✅ Response from backend:", data);
    return data; // return for screen usage
  } catch (error) {
    console.log("❌ Backend connection failed:", error);
    throw error;
  }
};
