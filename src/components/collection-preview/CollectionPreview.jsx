import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collection-preview.styles.scss"

const CollectionPreview = ({ title, items}) => {
  return (
    <div className='collection-preview'>
      <h1 className="title">{title.toUpperCase()}</h1>
      {
        items
        .filter((item, idx)=> idx < 4)
        .map(({ id, ...otherCollectionPreviewProps}) => (
          <CollectionItem key={id} {...otherCollectionPreviewProps} />
        ))
      }
    </div>
  );
};

export default CollectionPreview;
