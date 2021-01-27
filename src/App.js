import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import SongRequest from "./components/SongRequest/SongRequest";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;
