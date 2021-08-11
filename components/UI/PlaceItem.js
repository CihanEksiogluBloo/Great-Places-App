import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Color from "../../constants/Color";

const PlaceItem = ({ image, onSelect, title, address }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}> {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: Color.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: Color.blue,
    borderColor: Color.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: Color.lightGrey,
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: Color.lightGrey,
    fontSize: 16,
  },
});

export default PlaceItem;
