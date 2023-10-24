import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationLogic } from "./src/infrastructure/navigation/index";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { firebase, initializeApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { theme } from "./src/infrastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyA1LruQxbkPZLPLAR7blIp3fbadiDgdSO0",
  authDomain: "mealstohunt.firebaseapp.com",
  projectId: "mealstohunt",
  storageBucket: "mealstohunt.appspot.com",
  messagingSenderId: "1090177879394",
  appId: "1:1090177879394:web:7f7f9688ba645051cc703b",
};
//if (!firebase.apps.length) {
initializeApp(firebaseConfig);
//}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <NavigationLogic />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
