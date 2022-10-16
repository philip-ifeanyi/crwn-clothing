import React from "react";

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

// import './shoppage.styles.scss';

const ShopPage = () => {
  return (
    <div className='shop-page'>
      {
        SHOP_DATA.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  );
}

export default ShopPage;