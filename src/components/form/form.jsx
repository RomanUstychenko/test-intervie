import React from 'react'
import { Forms, Logo, Btn, BtnText } from './form.styled'
import picture from '../../img/picture.png'
import boy from '../../img/boy.png'

export default function form() {
  return (
    <Forms>
       
        <span>
            <Logo />
        </span>
        <div>
            <img src={picture} alt="fff" />
        </div>
        <div>
            <img src={boy} alt="fff" />
        </div>
        <Btn>
            <BtnText>FOLLOW</BtnText>
            </Btn>
        </Forms>
  )
}
