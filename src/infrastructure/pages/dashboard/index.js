import React, { Fragment } from "react";
import { CardBox, Card } from "../../components";

function DashboardPage() {
  const items = [
    {
      name: "Daily Views",
      numbers: "1,504",
      icon: "eye-outline",
    },
    {
      name: "Sales",
      numbers: "80",
      icon: "cart-outline",
    },
    {
      name: "Comments",
      numbers: "284",
      icon: "chatbubbles-outline",
    },
    {
      name: "Earning",
      numbers: "$7,800",
      icon: "cash-outline",
    },
  ];
  return (
    <Fragment>
      <h1 className="text-center">Dashboard</h1>
      <CardBox>
        {items.map((item, key) => (
          <Fragment>
            <Card key={key} name={item.name} numbers={item.numbers} icon={item.icon} />
          </Fragment>
        ))}
      </CardBox>
    </Fragment>
  );
}

export default DashboardPage;
