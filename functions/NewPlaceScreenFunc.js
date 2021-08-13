export const inputTextChangeHandler = (text, setState) => {
  setState(text);
};

export const savePlaceHandler = (
  titleValue,
  addPlace,
  dispatch,
  goBack,
  selectedImage,
  selectedLocation
) => {
  return (
    dispatch(addPlace(titleValue, selectedImage, selectedLocation)), goBack()
  );
};

export const imageTakenHandler = (imagePath, setSelectedImageState) => {
  setSelectedImageState(imagePath);
};
