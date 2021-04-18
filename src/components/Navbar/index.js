import React, { Component } from 'react'
import {Container, Logo,Input,InputCon,SearchIcon,IconWrapper,Badge} from './style'


class Navbar extends Component{
     render(){
         return(
             <Container>
                 <Logo>

                 </Logo>
                 <InputCon>
                      <SearchIcon>

                      </SearchIcon>
                     <Input placeholder='Search'>
                     </Input>
                 </InputCon>
                 <IconWrapper>
                <IconWrapper.Home>
                </IconWrapper.Home>
                
                <IconWrapper.Compass>

                </IconWrapper.Compass>
                <InputCon>
                    <Badge>3</Badge>
                   <IconWrapper.MessageRounded></IconWrapper.MessageRounded>
                </InputCon>
                <IconWrapper.Heart>
                </IconWrapper.Heart>  
                   
                <IconWrapper.Iconka>
                </IconWrapper.Iconka>
                </IconWrapper>
             </Container>
         )
     }
}


export default  Navbar