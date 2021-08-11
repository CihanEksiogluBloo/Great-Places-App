import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlaceDetailScreen = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

PlaceDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam("placeTitle"),
  };
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
