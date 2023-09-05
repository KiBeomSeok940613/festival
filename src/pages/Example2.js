import React, { useState } from 'react'
import Example2_ from './../component/Example2'
import { styled } from 'styled-components'

const Content = styled.div`
        display: flex;
        justify-content: space-start;
        max-width: 1200px;
        margin: 100px auto;
        padding: 0 2%;
        flex-wrap: wrap;
        row-gap: 24px;
`
const ContentItem = styled.div`
  flex-basis: 32.5%;
  border: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
`
const Button = styled.button`
  display: block;
  width: 120px;
  padding: 5px 20px;
  cursor: pointer;
  border: 1px solid #ddd;


`
  
  

function Example2() {

  let [data, setData] = useState(Example2_);
  let [current, setCurrent] = useState(1);
  const dataFilter = data.filter(e => e.group <= current)
  return (
  <>
    <Content>
      {
        dataFilter.map((e,i)=>{
          return(
            <ContentItem key={i}>
              <p>색상 :{e.color}</p>
              <p>점수 :{e.score}</p>
            </ContentItem>
          )
        })
      }

    </Content>
    <button onClick={()=>setCurrent(current+1)}>더보기 +</button>
  </>
  )
}

export default Example2