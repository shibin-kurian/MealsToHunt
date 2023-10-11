import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={() => ({
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      })}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => (
          <SafeArea>
            <Text>Restaurant Detail</Text>
          </SafeArea>
        )}
      />
    </RestaurantStack.Navigator>
  );
};
