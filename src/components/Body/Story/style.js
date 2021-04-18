import styled from 'styled-components'
export const Container=styled.div`
display:flex;
height:fit-content;
padding:0px 50px 70px 50px;
margin:45px 0 0 0;
justify-content:center;
overflow-x:scroll;
::-webkit-scrollbar {
    width:0px;
    background:transparent;
}
`
export const ItemWrapper=styled.div`
display:flex;
flex-direction:column;
margin-left:25px;

`
ItemWrapper.img=styled.img`
width:77px;
height:77px;
border-radius:50px;
border:var(--border);

`
ItemWrapper.Title=styled.div`
font-weight:600;
padding-top:15px;

`