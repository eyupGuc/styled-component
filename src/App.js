import { Header } from "./component/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./component/styles/Global.styled";
import data from "./data";
import Card from "./component/Card";
import Container from "./component/styles/Container.styled";
const style={
  colors:{header:"#fff",body:"#fff", footer:"#8A1C4A"},
  margin:{},responsive:"768px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header/>
      <Container>
        {data.map((item)=>{
          //  console.log(item);
          return(<Card key={item.id} data={item}/>
          
          )
        })}
      </Container>
    </ThemeProvider>
  );
};

export default App;
