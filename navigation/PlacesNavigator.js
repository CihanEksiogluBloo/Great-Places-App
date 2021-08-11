import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import Color from "../constants/Color";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Color.primary,
  },
  headerTintColor: "white",
  headerTitleAlign: "center",
};

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

export default createAppContainer(PlacesNavigator);
