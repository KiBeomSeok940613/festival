import { NavLink, Route, Routes } from "react-router-dom";
import Globalstyle from "./component/Globalstyle";
 import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Aside from "./component/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

// import Example from "./pages/Example";
// import Example2 from "./pages/Example2";
 import Example3 from "./pages/Example3";
import Example4 from "./pages/Example4";
import Datepicker from "./pages/Datepicker";

function App() {

  const light = {
  colors: {
    Primary : "hotpink",
    Secondary : "oranged",
    BgColor: "#e8e8e8",
    Color : "#000",
    ContentBg: "#fff"
  }
}
const dark = {
  colors : {
    Primary : "#272929",
    Secondary: "#e9e9e9",
    BgColor: "#e3e3e3",
    Color : "#e9e9e9",
    ContentBg: "#272929"


  }
}
const [themeConfig, setThemeConfig] = useState("light");
const DarkMode = themeConfig === "light" ? light : dark;
const ThemeSelect = () => {
  setThemeConfig(themeConfig === "light" ? "dark" : "light")
}





  return (
    <>
      
    
    <ThemeProvider theme={DarkMode}>
    <Globalstyle />
    <Aside ThemeSelect={ThemeSelect} themeConfig = {themeConfig} />
    {/* 리액트에선 무조건 NavLink 사용 a태그 사용x */}
    
    
    <Routes>
        <Route path="/" element={<Main/>}></Route>
       {/* <Route path="/example2" element={<Example2/>}></Route>
      <Route path="/example" element={<Example/>}></Route> */}
      <Route path="/ex3" element={<Example3/>}></Route>
      <Route path="/ex4" element={<Example4/>}></Route>
      <Route path="/Aside" element={<Aside/>}></Route>
      <Route path="/datepicker" element={<Datepicker/>}></Route>
      <Route path="/detail/:seq" element={<Detail/>}></Route>
     
      
      {/* / 후 뒤에 주소가 붙으면 ...에 주소를 보여주세요 */}
      {/* 홈페이지 딱 열었을때 먼저 보여줄 페이지"/" " */}
    </Routes>
    </ThemeProvider>
    {/* Routes 밖에 쓰면 고정됨 */}
    </>
    // 이제 모든 스타일 은 여기서 관리
  );
}

export default App;
