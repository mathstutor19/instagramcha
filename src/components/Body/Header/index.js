import React, { Component } from 'react'
import {Container,Right,Left,Img,Title,Button,HeaderCon,Tag,Name,Number,Text,Setting,DataWrapper} from '../Header/style'
import logo from '../../../essets/img.jpg'
class Body extends Component{
     render(){
         return(
             <Container>
                 <Left>
                    <Img src={logo}></Img>
                 </Left>
                 <Right>
                     <HeaderCon>
                         <Title>
                            hayo_uz
                         </Title>
                         <Button>
                             Edit profil
                         </Button>
                         <Setting>

                         </Setting>
                     </HeaderCon>
                     <DataWrapper>
                        <Number>884</Number>
                        <Text>Post</Text>
                        <Number>1344</Number>
                        <Text>Followers</Text>
                        <Number>10</Number>
                        <Text>Following</Text>
                     </DataWrapper>
                     <Name>
                         Hayo Ziynatdur
                     </Name>
                     <Tag href="#">
                        @kun_hadisi
                     </Tag>
                     <Text>
                         Sozingiz sukutingizdan chiroyli bolsa gapiring
                     </Text>
                     <Tag  bold href="#">
                        t.me/hayosiynatdur
                     </Tag>
                 </Right>
             </Container>
         )
     }
}


export default  Body