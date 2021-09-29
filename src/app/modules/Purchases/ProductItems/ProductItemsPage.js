import React, { Component } from "react";
import ComponentPage from "../../../componets/AutoModule/ComponentPage";

import * as Settings from "./Settings";
import { FormsElements } from "./FormSettings";
export class ProductItemsPage extends Component {
  render() {
    return (
      <>
        <div>Hello World!</div>
        <ComponentPage Settings={Settings} InputFormElement={FormsElements} />
      </>
    );
  }
}
