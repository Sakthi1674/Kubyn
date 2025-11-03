import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  LayoutRectangle,
} from "react-native";
import { Calendar } from "react-native-calendars";

interface CalendarDay {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

const Dates: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState<"start" | "end" | null>(null);
  const [inputLayout, setInputLayout] = useState<LayoutRectangle | null>(null);

  const handleDateSelect = (day: CalendarDay) => {
    if (activeInput === "start") {
      setStartDate(day.dateString);
    } else if (activeInput === "end") {
      setEndDate(day.dateString);
    }
    setShowCalendar(false);
    setActiveInput(null);
  };

  const toggleCalendar = (input: "start" | "end", layout: LayoutRectangle) => {
    if (showCalendar && activeInput === input) {
      setShowCalendar(false);
      setActiveInput(null);
    } else {
      setActiveInput(input);
      setInputLayout(layout);
      setShowCalendar(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📅 Select Goal Duration</Text>

      {/* Start Date Input */}
      <View
        onLayout={(e) => {
          if (activeInput === "start" || !inputLayout)
            setInputLayout(e.nativeEvent.layout);
        }}
      >
        <TouchableOpacity
          style={styles.inputBox}
          onPress={(e) =>
            toggleCalendar("start", e.nativeEvent.target as any)
          }
        >
          <Text style={styles.inputText}>
            {startDate || "Select Start Date"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* End Date Input */}
      <View
        onLayout={(e) => {
          if (activeInput === "end" || !inputLayout)
            setInputLayout(e.nativeEvent.layout);
        }}
      >
        <TouchableOpacity
          style={styles.inputBox}
          onPress={(e) =>
            toggleCalendar("end", e.nativeEvent.target as any)
          }
        >
          <Text style={styles.inputText}>{endDate || "Select End Date"}</Text>
        </TouchableOpacity>
      </View>

      {/* Inline Calendar Popup */}
      {showCalendar && inputLayout && (
        <View
          style={[
            styles.popupCalendar,
            {
              top: inputLayout.y + inputLayout.height + 10,
              left: 20,
              right: 20,
            },
          ]}
        >
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={
              startDate && endDate
                ? {
                    [startDate]: {
                      startingDay: true,
                      color: "#4A90E2",
                      textColor: "white",
                    },
                    [endDate]: {
                      endingDay: true,
                      color: "#4A90E2",
                      textColor: "white",
                    },
                  }
                : startDate
                ? {
                    [startDate]: {
                      selected: true,
                      color: "#4A90E2",
                      textColor: "white",
                    },
                  }
                : {}
            }
            markingType="period"
            theme={{
              calendarBackground: "#fff",
              todayTextColor: "#4A90E2",
              arrowColor: "#4A90E2",
              monthTextColor: "#333",
            }}
          />
        </View>
      )}

    </SafeAreaView>
  );
};

export default Dates;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 14,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  inputText: {
    color: "#333",
    fontSize: 16,
  },
  popupCalendar: {
    position: "absolute",
    zIndex: 999,
    borderRadius: 12,
    backgroundColor: "#fff",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 10,
  },
 
});
