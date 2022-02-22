import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/layout";
import { observer } from "mobx-react-lite";
import { store } from "../components/store/store";
import Styles from "../styles/index.module.css";

const index = observer(() => {

  return <Layout></Layout>;
});

export default index;
