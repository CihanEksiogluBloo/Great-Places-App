import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Alert } from "react-native";
import Color from "../../constants/Color";
import * as ImagePicker from "expo-image-picker";

import { Camera } from "expo-camera";

const ImgPicker = ({ onImageTake, setSelectedImageState }) => {
  const [image, setImage] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permission to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.6,
      });

      if (!result.cancelled) {
        setImage(result.uri);
        onImageTake(result.uri, setSelectedImageState);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text> No image picked yet.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </View>
      <Button
        title="Take Image"
        color={Color.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginBottom: 15,
  },

  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Color.lightGrey,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
