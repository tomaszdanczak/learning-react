import Navigation from "./components/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Chapter02 from "./components/Chapter02";
import Chapter03 from "./components/Chapter03";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chapter02" component={Chapter02} />
            <Route path="/chapter03" component={Chapter03} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
