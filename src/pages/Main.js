import React from 'react'
import { styled } from 'styled-components'

const Content = styled.div`

  background-color: ${(props) => props.theme.colors.Primary};
  width: 100%;
  height: 500px;
  position: relative;
.box{
  width: 500px;
  height: 500px;
  border-radius: 50%;
  position: absolute;
  right: -100px;
  top: -100px;

  
  background-color: black;
}
h3{
  color:  ${(props) => props.theme.colors.Secondary};
  position: absolute;
  right: 70px;
  top: 400px;
  z-index: 3;
  font-size: 50px;
} 
p{
  color:  ${(props) => props.theme.colors.Secondary};
  position: absolute;
  right: 0;
  top: 500px;
}

  
  




`



function Main() {
  return (
    <>
    <Content>
      <h3>기 범 석</h3>
    <p>자바스크립트,리액트,타입스크립트 마스터</p>
    <div className="box">bb</div>
    
    </Content>
    
    </>
  )
}

export default Main