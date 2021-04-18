import React, { Component } from 'react'
import {Container,ItemWrapper} from './style'
import {storydata} from '../../../server/Story'
class Story extends Component{
     render(){
         return(
             <Container>
                {
                    storydata.map((value,index)=>{
                        return(
                            <ItemWrapper key={value.id}>
                             <ItemWrapper.img src={value.img}>
                            </ItemWrapper.img>  
                            <ItemWrapper.Title>
                                {value.title}
                            </ItemWrapper.Title>

                            </ItemWrapper>
                        )
                    })
                }
             </Container>
         )
     }
}


export default  Story