import React,{useEffect} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import PlaceItem from "../components/UI/PlaceItem";
import * as placesActions from "../store/actions/places-action";

const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

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
