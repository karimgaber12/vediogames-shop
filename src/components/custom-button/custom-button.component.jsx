import React from 'react'
import './custom-button.style.scss'
function CustomButton({children,isGoogleSignIn,...otherProps}) {
  return (
    <button  className= {`${isGoogleSignIn? 'googleSignIn': ''} custom-button`}{...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton