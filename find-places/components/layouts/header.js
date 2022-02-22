import React, { useState } from "react";
import Styles from "../../styles/Header.module.css";
import { observer } from "mobx-react-lite";
import { store } from "../store/store";
const header = observer((props) => {
  const { places } = store;
  const { searchText, setSearchText } = props;

  return (
    <div className={Styles.container}>
      <h1>
        MYSRTP
        <span>
          <input
            className={Styles.input}
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </span>
      </h1>
    </div>
  );
});

export default header;
