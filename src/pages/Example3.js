import React, { useState } from 'react'
import Example3_ from "./../component/Example3"
import { styled } from 'styled-components'


const Content = styled.div`
display: flex; justify-content: space-between;
`

function Example3() {

  let [data,setData] = useState(Example3_)
  let [animal,setAnimal] = useState("전체");

  const filterAnimal = [...new Set(data.map(e =>e.animal))];
  console.log(filterAnimal)
    
  const dataFilter = data.filter(e =>{
    if(animal === "전체"){

    }else{
      return e.animal === animal
    }
  })
  return (
    <>
    <Content>
     <ul>
      <li onClick={()=>{setAnimal("cat")}}></li>{
        filterAnimal.map((e,i)=>{
          return(
            <li key={i} onClick={()=>setAnimal(e)}>{e}</li>

          )
        })
      }
      
     </ul>
     {
      dataFilter.map((el,i)=>{
        return(
          <>
          <p>{el.animal}</p>
          <p>{el.gender}</p>
          <p>{el.height}</p>
          
          </>
        )

      })
     }
    
    </Content>
    
    </>
  )
}

export default Example3