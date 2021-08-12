import React from "react";
import { View, Image, StyleSheet } from "react-native";

import ENV from "../../env";

const MapPreview = (props) => {
  let imagePreviewUrl;

  if (props.location) {
    imagePreviewUrl = `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=400&height=200&center=lonlat:${props.location.lng},${props.location.lat}&zoom=14&apiKey=${ENV.GeoapifyApiKey}`;
  }

  return (
    <View style={{ ...styles.mapPreview, ...props.style }}>
      {props.location ? (
        <Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} />
      ) : (
        props.children
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
