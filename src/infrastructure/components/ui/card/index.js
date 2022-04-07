import React from "react";
import { Card, Numbers, CardName, Icon } from "./style";

function CardComponent({ numbers, name, icon }) {
  return (
    <Card>
      <div>
        <Numbers>{numbers}</Numbers>
        <CardName>{name}</CardName>
      </div>
      <Icon>
        <ion-icon name={icon}></ion-icon>
      </Icon>
    </Card>
  );
}

export default CardComponent;
