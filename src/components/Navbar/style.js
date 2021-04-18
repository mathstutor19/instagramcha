import styled from 'styled-components'
import logo from '../../essets/logo.png'
import iconka from '../../essets/img.jpg'

import {Search} from '@styled-icons/bootstrap/Search'
import {Home} from '@styled-icons/boxicons-solid/Home'
import { MessageRounded} from '@styled-icons/boxicons-regular/MessageRounded'
import {Compass} from '@styled-icons/bootstrap/Compass'
import {Heart} from '@styled-icons/boxicons-regular/Heart'
export const Container =styled.div`
display:flex;
border-bottom:1px solid #000;
padding:0px 15%;
height:54px;
justify-content:space-between;
align-items:center;
`

export const Logo=styled.div`
background-image:url(${logo});
width:154px;
height:29px;
background-repeat:no-repeat;
background-size:contain;
`
export const Input=styled.input`
border:1px solid rgba(219,219,219);
background-color:transparent;
width:215px;
height:28px;
border-radius:3px;
::placeholder{
 color:rgba(142,142,142);
 text-align:center;
}
`
export const SearchIcon=styled(Search)`
width:15px;
color:var(--color);
position:absolute;
left:30%;
top:25%;
`
export const InputCon=styled.div`
display:flex;
position:relative;
`

// Icons
export const IconWrapper=styled.div`
display:flex;
align-items:center;

`
IconWrapper.Home=styled(Home)`
width:30px;
color:#000;
margin-right:20px;
`
IconWrapper.Compass=styled(Compass)`
width:28px;
color:#000;
margin-right:20px;
`
IconWrapper.Heart=styled(Heart)`
width:30px;
color:#000;
margin-right:20px;
`

IconWrapper.MessageRounded=styled(MessageRounded)`
width:30px;
color:#000;
margin-right:20px;
`
IconWrapper.Iconka=styled.img`
background-image:url(${iconka});
width:30px;
height:30px;
color:#000;
background-size:cover;
background-repeat:no-repeat;
margin-right:20px;
border-radius:50%;
border: 1px solid #000;
`


export const  Badge = styled.div`
background-color:red;
color:white;
width:20px;
height:15px;
border-radius:50%;
position:absolute;
top:-6px;
left:15px;
text-align:center;
`