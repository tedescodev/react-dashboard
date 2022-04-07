import React from "react";
import { TopBar, Toogle, Search, UserImage } from "./style";

function TopComponent({ toogle, setToogle }) {
  return (
    <TopBar>
      <Toogle onClick={() => setToogle(!toogle)}>
        <ion-icon name="menu-outline"></ion-icon>
      </Toogle>
      <Search>
        <label>
          <input type="text" placeholder="Search Here" />
          <ion-icon name="search-outline"></ion-icon>
        </label>
      </Search>
      <UserImage>
        <img src={require("../../../assets/img/user.jpg")} alt="User" />
      </UserImage>
    </TopBar>
  );
}

export default TopComponent;
