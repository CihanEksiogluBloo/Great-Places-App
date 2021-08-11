import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import PlaceItem from "../components/UI/PlaceItem";

const PlacesListScreen = ({navigation}) => {
  const places = useSelector((state) => state.places.places);
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <PlaceItem
            image={item.imageUri}
            onSelect={() => {
              navigation.navigate("PlaceDetail", {
                placeTitle: item.title,
                placeId: item.id,
              });
            }}
            title={item.title}
            address={null}
          />
        );
      }}
    />
  );
};

PlacesListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <Entypo
        name="plus"
        size={24}
        color="white"
        style={styles.plusHeader}
        onPress={() => {
          navigation.navigate("NewPlace");
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  plusHeader: { marginHorizontal: 10 },
});

export default PlacesListScreen;
