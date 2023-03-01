import styled from 'styled-components';

import { ReactComponent as GoIt} from '../../img/logo.svg';

export const Forms = styled.div `
position: absolute;
width: 380px;
height: 460px;
left: 435px;
top: 168px;
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
`
export const Logo = styled(GoIt) `
    width: 70px;
    height: 70px;
`
export const Btn = styled.button `
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;

position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
border: 0px solid;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
    cursor: pointer;
    &:hover,
  :focus {
    background: #1c023a;;
  }
`
export const BtnText = styled.p`
    width: 84px;
height: 22px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;

color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`