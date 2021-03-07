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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ReactHelmet />
        <Header />
        <Switch>
          <Route path="/" exact component={Letters} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/contents" exact component={Contents} />
          <Route path="/musicsheets" component={MusicSheets} />
          <Route path="/auth/token" exact component={OAuth} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
