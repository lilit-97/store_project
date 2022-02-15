import React from 'react';
import {useParams} from "react-router-dom";
import {MdAddShoppingCart} from 'react-icons/md';

import data from "../../data";
import {ContentCard} from "@vkontakte/vkui";
import styles from "./styles.content.css"

const CardItem = () => {
  const {id} = useParams()
  const {productItems} = data;
  const element = productItems.find(product => product.id === id);

  return (
    <>
      <ContentCard
        key={element.id}
        src={element.image}
        subtitle={element.name}
        header={`${element.price}$`}
        text={element.description}
        caption={<MdAddShoppingCart className="icon_content"/>}
        maxHeight={500}
      />
    </>
  )
};

export default CardItem;