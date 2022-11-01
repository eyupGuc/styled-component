import { Header } from "./component/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./component/styles/Global.styled";
import data from "./data";
const style={
  colors:{header:"#fff",body:"#fff", footer:"#8A1C4A"},
  margin:{},responsive:"768px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header/>
      <div>
        {data.map((item)=>{
          console.log(item);
          return(<>
          
          </>)
        })}
      </div>
    </ThemeProvider>
  );
};

export default App;
