import React, { useContext } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { RestaurantInfo } from "../components/restaurants-info.component";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={(item) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
