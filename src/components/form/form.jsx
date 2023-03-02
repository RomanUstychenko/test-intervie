import React from 'react'
import { Forms, Logo, Btn, BtnText, Tweets } from './form.styled'
import picture from '../../img/picture.png'
import boy from '../../img/boy.png'
import { useState } from 'react';


const Form = () => {

    const [BtnActive, setBtnActive] = useState(false);
    const [Following, setFollowing] = useState(100500);

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
        <div>
            <Tweets>
            777 TWEETS
            </Tweets>
        </div>
        <div>
        <Tweets>
            {Following}
            </Tweets>
        </div>
        {!BtnActive && (
            <Btn
            onClick={() => {
                setBtnActive(true);
                setFollowing((prev) => prev + 1);
              }}>
            <BtnText
            >FOLLOW</BtnText>
            </Btn>
        )}
          {BtnActive && (
            <Btn
            onClick={() => {
                setBtnActive(false);
                setFollowing((prev) => prev - 1);
              }}>
            <BtnText>FOLLOWING</BtnText>
            </Btn>
        )}
            
        </Forms>
  )
}
export default Form