import React, { Component } from "react";

import { Component1Page as PurchaseItems } from "";
import { Component1Page as ProductPurchase } from "";
import { Component1Page as ProductItems } from "";
import { MainPage } from "./MainPage";

export default class PurchasePage extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props };
    this.title = "Purchase";
    this.ComponentList = [
      { path: "/productItems", component: { ProductItems } },
      { path: "/purchaseProducts", component: { ProductPurchase } },
      { path: "/purchaseItems", component: { PurchaseItems } },
    ];
    this.BasePath = "/purchase";
    this.DefaultPath = "/purchase/productItems";
  }

  render() {
    return (
      <>
        <MainPage
          title={this.title}
          BasePath={this.BasePath}
          DefaultPath={this.DefaultPath}
          ComponentList={this.ComponentList}
        />
      </>
    );
  }
}


