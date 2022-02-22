import React from "react";
import ElementMain from "../components/layouts/elementMain";
import Layout from "../components/layouts/layout";

function index() {
  return (
    <div>
      <ElementMain />
    </div>
  );
}
index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default index;
