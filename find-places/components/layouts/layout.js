import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ElementsPlaces from "./elementsPlaces";
function layout(props) {
  const { children } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <Header setSearchText={setSearchText} searchText={searchText} />
      <ElementsPlaces searchText={searchText} />
      <Footer />
    </div>
  );
}

export default layout;
