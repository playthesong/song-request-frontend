import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import Letters from "./pages/Letters";
import Footer from "./components/Footer/Footer";
import ReactHelmet from "./common/ReactHelmet";
import OAuth from "./pages/OAuth";
import Ranking from "./pages/Ranking";
import Contents from "./pages/Contents";
import MusicSheets from "./pages/MusicSheets";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import MyPage from "./pages/MyPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <ReactHelmet />
        <Header />
        <Switch>
          <Route path="/" exact component={Letters} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/contents" exact component={Contents} />
          <Route path="/musicsheets" component={MusicSheets} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/auth/token" exact component={OAuth} />
          <Route path="/error" component={ErrorPage} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
