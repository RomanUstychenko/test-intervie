import React from 'react'
import { Forms, Logo, Btn, BtnFollowing, BtnText, Tweets, TweetsFollowing, PictureBox, Picture, CenterLine, PictureBoyBox } from './form.styled'
import picture from '../../img/picture.png'
import Line from '../../img/line.png'
import boy from '../../img/boy.png'
import { useState, useEffect  } from 'react';


const Form = () => {


    const [BtnActive, setBtnActive] = useState(() => {
      try {
        const Btn = localStorage.getItem("BtnActive");
            return Btn === null ? undefined : JSON.parse(Btn);
      } catch (error) {
        console.log(error)
      }
        });
    const [Following, setFollowing] = useState( () => {
      let Foll = localStorage.getItem("Following") || 10500;
      console.log(Foll)
      return Foll === null ? undefined : JSON.parse(Foll);
    });
console.log(Following)

    useEffect (() => {
      
    localStorage.setItem("BtnActive", JSON.stringify(BtnActive));
    localStorage.setItem("Following", JSON.stringify(Following));



  }, [BtnActive, Following]) 



  return (
    <Forms>    
            <Logo />
        <PictureBox>
            <Picture src={picture} alt="fff" />
        </PictureBox>
       
        <PictureBoyBox>
            <img src={boy} alt="fff" />
        </PictureBoyBox>        
          <CenterLine src={Line} alt="fff" />
            <Tweets>
            777 TWEETS
            </Tweets>
      
        <TweetsFollowing>
           {Following}
            </TweetsFollowing>
      
        {!BtnActive && (
            <Btn
            type="button"
            onClick={() => {
                setBtnActive(true);
                setFollowing((prev ) => prev + 1);
              }}>
            <BtnText
            >FOLLOW</BtnText>
            </Btn>
        )}
          {BtnActive && (
            <BtnFollowing
            type="button"
           
            onClick={() => {
                setBtnActive(false);
                setFollowing((prev) => prev - 1);
              }}>
            <BtnText>FOLLOWING</BtnText>
            </BtnFollowing>
        )}
            
        </Forms>
  )
}
export default Form;