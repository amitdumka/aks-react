import React, { Component } from "react";
import ComponentPage from "../../../componets/Modules/ComponentPage";

import * as Settings from "./Settings";

export default class ProductItemsPage extends Component {
  render() {
    return (
      <>
        <ComponentPage Settings={Settings} />
      </>
    );
  }
}
