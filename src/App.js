import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import SongRequest from "./components/SongRequest/SongRequest";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={SongRequest} />
          <Route path="/ranking" component={SongRequest} />
          <Route path="/contents" exact component={SongRequest} />
          <Route path="/musicsheets" component={SongRequest} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
