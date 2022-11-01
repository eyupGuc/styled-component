import { Header } from "./component/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./component/styles/Global.styled";
const style={
  colors:{header:"#fff",body:"#fff", footer:"#8A1C4A"},
  margin:{},responsive:"768px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header/>
    </ThemeProvider>
  );
};

export default App;
