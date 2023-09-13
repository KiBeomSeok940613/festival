import React, { useState } from 'react'
import Example3_ from "./../component/Example3"
import { styled } from 'styled-components'


const Content = styled.div`
display: flex; justify-content: space-between;
`

function Example3() {

  const [data,setData] = useState(Example3_)
  const [animal,setAnimal] = useState("전체");

  const [gender,setGender] = useState("전체")

  const filterAnimal = [...new Set(data.map(e =>e.animal))];
  console.log(filterAnimal)

  
    
  const dataFilter = data.filter(e =>{
    
    let isAnimal = animal === "전체" || e.animal === animal;
    let isGender = gender === "전체" || e.gender === gender;
    // 두개다 "참" 일때 값을 출력
    return isAnimal && isGender

    // return(
    //   animal === "전체" ? e.animal : e.animal  === animal
    // );
    if(animal === "전체"){

    }else{
      return e.animal === animal
    }
  })
  const filterCate = [...new Set(data.map(e => e.animal))];
  const filterCate2 = [...new Set(data.map(e => e.gender))];
  return (
    <>
    <div>
      <ul>
        <li>전체</li>
        {
          filterCate.map((e,i)=>{
            return(
              <li key={i} onClick={()=>{setAnimal(e)}}></li>
            )
          })
        }
      </ul>
    </div>
    <Content>
     <ul>
      <li onClick={()=>{setAnimal("cat")}}></li>{
        filterAnimal.map((e,i)=>{
          return(
            <li key={i} onClick={()=>setAnimal(e)}>{e}</li>
            /* {
              filterAnimal.map((e,i)=>{
                return(
                  <li key={i}>{e.animal} - {e.gender} - {e.height}></li>
                )
              })
            } */

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