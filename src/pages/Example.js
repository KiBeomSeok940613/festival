import React, { useState } from 'react'
import Example_ from "./../component/Example"
import { styled } from 'styled-components'
//./ 현재폴더


const Content = styled.div`
display: flex; justify-content: space-between;

`
function Example() {
 
 
  // 새로고침 없이 값을 실시간으로 바꿀때 사용 useState
   let [data,setData] = useState(Example_)
   let [job, setJob] = useState("전체");
  //  job 은 출력하는 setJob은 바꿀수있는
   
   const dataFilter = data.filter(e =>{
    if(job === "전체"){
    
    }else{
    return e.job === job
    }
    return e.job === job
  })
  //  뒤에 값이 data 로 들어가는 하지만 data 값 을 바꾸려면 setData 를 사용 해야 
  const filterJob =[...new Set(data.map(e => e.job))];
  
  console.log(filterJob)
  return (
    <Content>
      <ul>
        <li onClick={()=>{setJob("전체")}}>전체</li>
        {
          filterJob.map((e,i)=>{
            return (
              <li key={i} onClick={()=>setJob(e)}>{e}</li>
              // 반복문을 사용 하면 key 값을 입력
            )
          })

        }
        
      </ul>
    {/* {data.map((e,i,a)=>{
  //       // e,i 파라미터  e=element i=index
  //     return(
  //       <>
  //       <div key={i}></div>
  //       <p>{e.name}</p>
  //       <p>{i}</p>
  //       <p>{a[i].name}</p>
  //       </>
  //     )
  // })}     */}
  {
    data.filter((e)=>{
      return e.job === job
    
    }).map((el,i)=>{
      return (
        <p key={i}>{el.name}</p>
      )
    })
  }
    
  </Content>
  )
}

export default Example