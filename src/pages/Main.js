import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'



const Content = styled.div`

  
/* https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=QCIutLD50Q9uCQ1Gd3UxG0S8pzPhp10dTDi6fLwtZaic4HxeE86krF9HT%2FdvA1wQntjyK4nYGD%2BeMnDQZPkZGg%3D%3D&pageNo=1&numOfRows=10&resultType=json */


  background-color: ${(props) => props.theme.colors.BgColor};
  width: 100%;
  padding: 120px 2% 50px 2%;
  overflow: hidden;

  
`
const ContentWrap= styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 1.2%;

`
const ContentItem = styled.div`
background-color: #fff;
flex-basis: 32.5%;
border: 1px solid #ddd; border-radius: 5px;
padding: 20px; box-sizing: border-box; cursor: pointer;
white-space: break-spaces;// 줄이 길어지면 자동으로 줄바꿈
img{width: 100%; display: block; margin-bottom: 24px;}
h3{margin-bottom: 24px;}
li{line-height: 2; margin-bottom: 20px}

@media screen and (max-width: 1200px){
  flex-basis: 52.5%;
}

@media screen and (max-width: 640px){
    flex-basis: 100%;
}
`



  


const Category =styled.div`
width: 100%;
margin-bottom: 1.2%;
ul{
  max-width: 1200px; margin: 0 auto; display: flex;flex-wrap: wrap;
  justify-content: space-between;
}
li{
   background-color: ${(props) => props.theme.colors.ContentBg}; 
  border: 1px solid #ddd;
  padding: 5px 20px;
  border-radius: 5px; cursor: pointer;
  color: ${(props) => props.theme.colors.Color} ;
&.on{
  background-color: hotpink;
  font-weight: bold;
  color: #fff;
}
}

`
const Pagination = styled.div`
background-color: #fff;
padding: 20px;
border-radius: 5px;
border: 1px solid #ddd;
ul{
  max-width: 1200px; margin: 0 auto; display: flex;flex-wrap: wrap;
  column-gap: 20px; justify-content: center; align-items: center;
}
li{
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 5px 20px;
  border-radius: 5px; cursor: pointer;
&.on{
  background-color: hotpink;
  font-weight: bold;
  color: #fff;
}

}

`

function Main() {
const [data, setData] = useState();
  const [allData , setAllData] = useState();
  const list = 10;
  const [page, setPage] = useState(1);
  const [totalCnt, setTotalCnt] = useState(0);
  const [gugun, setGugun] = useState("전체")
  const pagination = 5;
  const totalPage = Math.floor(totalCnt / list)

  let startPage;
  let endPage;

  const currentBlock = Math.ceil(page / pagination)
  // 만약에 현재 페이지가 1 / 5 > 0.2 1 2 3 4 5
  startPage = (currentBlock - 1) * pagination + 1;
  endPage = startPage + pagination -1 ;

  if(endPage > totalPage){
    endPage = totalPage;
  }
  const PrevBlock = () =>{
    if(startPage > 1){
      setPage(startPage - pagination);
                           
    }

  }
  const NextBlock = () =>{
    if(endPage < totalPage){
      setPage(startPage + pagination)
    }

    
  }

  const PageList = [];
  for(let i = startPage; i <= endPage; i ++){
    PageList.push(
      <li key={i}
        onClick={()=>{setPage(i)}}>{i}
      </li>
    )
  }
useEffect(() =>{
     axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=${page}&numOfRows=10&resultType=json`)
     .then(function(res){
       
       setData(res.data.getFestivalKr.item)
        
       
     })
  }, [])
  
  useEffect(() =>{
     axios.get(`https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=${process.env.REACT_APP_APIKEY}&pageNo=1&numOfRows=100&resultType=json`)
     .then(function(res){
      setAllData(res.data.getFestivalKr.item)
      setTotalCnt(res.data.getFestivalKr.totalCount);


     })
  }, [page])
  const FilterData = data && data.filter(e => {
    return (
      gugun === "전체" || gugun === e.GUGUN_NM
    )
  })

  const FilterGugun = [...new Set (allData && allData.map(e=>e.GUGUN_NM))];
  

  const [isActive, setIsActive] = useState();
  const Div = styled.div`
    color: red;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
  
  `

  return (
    <>
    
    <Content>
      <Category>
      {/* <Div className={isActive === -1 ? 'on' : ''} onClick={()=>{setIsActive(-1)}}>{`인덱스 번호 : -1`}</Div>
        {      
        Array(5).fill().map((e,i)=>{
          return(
            <Div className={isActive === i ? 'on' : ''} onClick={()=>{setIsActive(i)}}>{`인덱스 번호 : ${i}`}</Div>
          )
        })
        } */}
          <ul>
            <li className={isActive === -1 ? 'on' : ''} onClick={
                  ()=> {setIsActive(-1);setGugun("전체")}}>전체 </li>
          {
            data && FilterGugun.map((e,i)=>{
              return(
                <li className={isActive === i ? 'on' : ''} onClick={
                  ()=>{setIsActive(i);setGugun(e)}}key={i}>{e}</li>               
                  // true false 일때만 사용 가능
              )
            })
          }
          </ul>
        
        </Category>
      <ContentWrap>
       
          {
           data && FilterData.map((e,i)=>{
              return(
              
              <ContentItem key={i}>
                 <NavLink to={`detail/${e.UC_SEQ}`}
                  state={
                    e
                    // 메인 페이지에서 클릭해서 들어가면 
                  }
                >
                <h3>{e.TITLE}</h3>
                <img src={e.MAIN_IMG_THUMB} alt={e.MAIN_TITLE}/>
                <ul>
                  <li>구군 : {e.GUGUN_NM}</li>
                  <li>운영 및 시간 : {e.USAGE_DAY_WEEK_AND_TIME}</li>
                  {
                    e.MIDDLE_SIZE_RM1 !== "" &&     
                                // 000 이 비어있지 "않다면" 출력해주세요
                  <li>편의 시설 : {e.MIDDLE_SIZE_RM1}</li>
                  }
                  <li>이용요금{e.USAGE_AMOUNT}</li>
                  {
                    e.TRFC_INFO !== "" &&
                  
                  <li>교통편{e.TRFC_INFO}</li>
                  }
                  {
                    e.MAIN_PLACE !== "" &&
                  <li>주요장소{e.MAIN_PLACE}</li>
                  }
                </ul>

                 </NavLink> 
              </ContentItem>
                
              )
            })
          }
        
      </ContentWrap>     
    </Content>
    <Pagination>
      <ul>
        <li onClick={PrevBlock}>이전</li>
        {PageList}   
        <li onClick={NextBlock}>다음</li>
      </ul>
    </Pagination>
    </>
  )
}

export default Main