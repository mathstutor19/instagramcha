import styled from 'styled-components'
import {Settings} from '@styled-icons/feather/Settings'
export const Container=styled.div`
display:flex;
margin-top:30px;
width:100%;
`
export const Left=styled.div`
display:flex;
margin-left:10%;
`
export const Right=styled.div`
display:flex;
flex-direction:column;
margin-left:15%;

`
export const Img=styled.img`
width:150px;
height:150px;
border-radius:50%;
border:var(--border);
`
export const HeaderCon=styled.div`
display:flex;
margin-bottom:20px;

`
export const Text=styled.span`
color:rgba(38,38,38);
font-weight:500;
font-size:16px;
padding-right:25px;
`

export const Number=styled.span`
color:rgba(38,38,38);
font-weight:600;
font-size:16px;
padding-right:5px;
cursor:pointer;

`

export const Button=styled.div`
border:var(--border);
border-radius:3px;
padding:5px 9px;
height:fit-content;
white-space:nowrap;
margin-right:20px;
cursor:pointer;
`


export const Title=styled.div`
white-space:nowrap;
color:#262626;
font-size:26px;
margin-right:20px;
`
export const Setting=styled(Settings)`
color:black;
width:22px;
height:33px;
cursor:pointer;

`

export const DataWrapper=styled.div`
display:flex;
margin-bottom:15px;
`

export const  Name=styled.div`
display:inline;
font-weight:600;
font-size:16px;

`

export const Tag=styled.a`
text-decoration:none;
font-size:16px;
color:#00376b;
font-weight:${({bold})=>bold && '600'};
margin-top:3px;
`