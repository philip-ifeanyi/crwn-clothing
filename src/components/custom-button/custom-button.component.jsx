import React from "react";

import './custom-button.styles.scss'

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
}


const CustomButton = ({children, buttonType, ...otherProps}) => {
  return (
    <button
      className={`${buttonType} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton