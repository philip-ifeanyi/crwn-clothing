import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import sections from './directory.data.js';

const Directory = () => {
  return (
    <div className = "directory-menu">
      {
        sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }
    </div>
  )
}

export default Directory;