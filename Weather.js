import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
    iconName: "weather-lightning-rainy",
    gradient: ["#373B44", "#4286f4"],
  },
  Drizzle: {
    title: "Drizzle",
    subtitle: "Is like rain, but backwards compatibility",
    iconName: "weather-rainy",
    gradient: ["#00C6FB", "#005BEA"],
  },
  Rain: {
    title: "Rainig like a waterfall",
    subtitle: "For more info look outside",
    iconName: "weather-pouring",
    gradient: ["#00C6FB", "#005BEA"],
  },
  Snow: {
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Foke no.",
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", "#B9B6E5"],
  },
  Mist: {
    title: "Mist",
    subtitle: "I can't see anything",
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Smoke: {
    title: "Smoke",
    subtitle: "Thanks a lot China 🖕🏻",
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Haze: {
    title: "Haze",
    subtitle: "Thanks a lot China 🖕🏻",
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Dust: {
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Fog: {
    title: "Fog",
    subtitle: "I can't see anything",
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Sand: {
    title: "Dusty",
    subtitle: "Thanks a lot China 🖕🏻",
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Squall: {
    title: "Windy as a fan",
    subtitle: "It's cool outside",
    iconName: "weather-windy",
    gradient: ["#D7D2CC", "#304352"],
  },
  Tornado: {
    title: "Let's go outside",
    subtitle: "Finally u can fly",
    iconName: "weather-tornado",
    gradient: ["#373B44", "#4286f4"],
  },
  Clear: {
    title: "Sunny as a fire",
    subtitle: "Go get your skin burnt",
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FEF253"],
  },
  Clouds: {
    title: "Clouds",
    subtitle: "I know, fokin boring",
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={weatherOptions[condition].gradient}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    color: "white",
    fontSize: 42,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 40,
  },
  title: {
    textAlign: "left",
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "left",
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});
