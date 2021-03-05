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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ReactHelmet />
        <Header />
        <Switch>
          <Route path="/" exact component={Letters} />
          <Route path="/ranking" component={Letters} />
          <Route path="/contents" exact component={Letters} />
          <Route path="/musicsheets" component={Letters} />
          <Route path="/auth/token" component={OAuth} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
