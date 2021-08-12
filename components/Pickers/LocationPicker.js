import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import Color from "../../constants/Color";
import * as Location from "expo-location";
import MapPreview from "../UI/MapPreview";

const LocationPicker = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const verifyPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant location permission to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000,
      });

      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (error) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again or pick a location on the map",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationPicker}>
      <MapPreview style={styles.mapPreview} location={pickedLocation} >
        {!isFetching ? (
          <Text style={styles.text}>No location chosen yet!</Text>
        ) : (
          <ActivityIndicator size="large" color={Color.primary} />
        )}
      </MapPreview>
      <Button
        title="Get User Location"
        color={Color.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: Color.lightGrey,
    borderWidth: 1,
  },
});

export default LocationPicker;
