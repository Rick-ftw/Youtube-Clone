import React from 'react'
import LogoImage from "../assets/img/youtube.png"

export const Logo = () => {
  return (
    <div className='logo-con'>
        <img src={LogoImage} alt="itbe-logo" className='logo-img'/>
        <h2 className='logo-h2'>Itube</h2>
    </div>
  )
}
