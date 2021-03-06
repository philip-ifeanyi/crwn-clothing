import React, { Component } from "react";
import SHOP_DATA from "./2.1 shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection.components";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    const {collections} = this.state
    return (
      <div className="shop-page"> 
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
      </div>
    )
  } 
}

export default ShopPage