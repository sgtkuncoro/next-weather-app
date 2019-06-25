import React from "react";

import GlobalLayout from "../components/layouts/Global";
import DefaultLayout from "../components/layouts/Default";

export default props => (
  <GlobalLayout>
    <DefaultLayout>{props.children}</DefaultLayout>
  </GlobalLayout>
);
