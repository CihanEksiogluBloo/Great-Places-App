export const inputTextChangeHandler = (text, setState) => {
  setState(text);
};

export const savePlaceHandler = (
  titleValue,
  addPlace,
  dispatch,
  goBack,
  selectedImage
) => {
  return dispatch(addPlace(titleValue, selectedImage)), goBack();
};

export const imageTakenHandler = (imagePath, setSelectedImageState) => {
  setSelectedImageState(imagePath);
};
