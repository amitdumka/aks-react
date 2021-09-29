import React, { Component } from "react";
import MainPage from "../../componets/AutoModule/MainPage";

import {ProductItemsPage} from "./ProductItems/ProductItemsPage";

export default class PurchasePage extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props };
    this.title = "Purchase";
    this.ComponentList = [
      { path: "/productItems", component: { ProductItemsPage } ,name:"ProductItemsPage"},
      //{ path: "/purchaseProducts", component: { ProductItemsPage } },
      //{ path: "/purchaseItems", component: { ProductItemsPage } },
    ];
    this.BasePath = "/purchase";
    this.DefaultPath = "/purchase/productItems";
  }

  render() {
    console.log(ProductItemsPage);
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
