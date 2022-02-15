import React from "react";
import {useNavigate} from 'react-router-dom';

import {
  View, Panel, Group, CardGrid, ContentCard,

} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const Cards = ({productItems}) => {
  const navigate = useNavigate();
  return (
    <>
      <View activePanel="profile" id="profile">
        <Panel id="profile">
          <Group>
            <CardGrid size="m">
              {
                productItems.map((productItem) => (
                  <ContentCard
                    key={productItem.id}
                    src={productItem.image}
                    subtitle={productItem.name}
                    header={`${productItem.price}$`}
                    maxHeight={150}
                    onClick={() => navigate(`/product/${productItem.id}`)}
                  />
                ))
              }
            </CardGrid>
          </Group>
        </Panel>
      </View>
    </>
  );
};
export default Cards;