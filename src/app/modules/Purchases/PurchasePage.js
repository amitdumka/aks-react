import React, { Component } from "react";
import { MainPage } from "../../componets/Modules/MainPage";

import { ProductItemsPage as PurchaseItemsPage } from "./ProductItems/ProductItemsPage";
import { ProductItemsPage as ProductPurchase } from "./ProductItems/ProductItemsPage";
import { ProductItemsPage as ProductItems } from "./ProductItems/ProductItemsPage";

export default class PurchasePage extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props };
    this.title = "Purchase";
    this.ComponentList = [
      { path: "/productItems", component: { ProductItems } },
      { path: "/purchaseProducts", component: { ProductPurchase } },
      { path: "/purchaseItems", component: { PurchaseItemsPage } },
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
