import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Button,
} from "react-native";
import Color from "../constants/Color";
import {
  inputTextChangeHandler,
  savePlaceHandler,
  imageTakenHandler,
} from "../functions/NewPlaceScreenFunc";
import { setStateFunc } from "../functions/GeneralFunctions";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/actions/places-action";
import LocationPicker from "../components/Pickers/LocationPicker";
import ImgPicker from "../components/Pickers/ImgPicker";

const NewPlaceScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const locationPickedHandler = useCallback(
    (location) => {
      setSelectedLocation(location);
    },
    [setSelectedLocation]
  );

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={titleValue}
          onChangeText={(text) => setStateFunc(text, setTitleValue)}
        />
        <ImgPicker
          onImageTake={setStateFunc}
          setSelectedImageState={setSelectedImage}
        />
        <LocationPicker
          navigation={navigation}
          onLocationPicked={locationPickedHandler}
        />

        <Button
          title="Save Place"
          color={Color.primary}
          onPress={() =>
            savePlaceHandler(
              titleValue,
              placesActions.addPlace,
              dispatch,
              navigation.goBack,
              selectedImage,
              selectedLocation
            )
          }
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "New Place",
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: Color.lightGrey,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
