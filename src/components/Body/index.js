import React, { Component } from 'react'
import {Container} from './style'
import Header from './Header'
import Story from './Story'
import  Content from './Content'

class Body extends Component{
     render(){
         return(
             <Container>
                 <Header>
                     
                 </Header>
                 <Story>

                 </Story>
                 <Content>
                     
                 </Content>

             </Container>
         )
     }
}


export default  Body