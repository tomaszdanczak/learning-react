import Navigation from "./components/Navigation";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import Chapter02 from "./components/Chapter02";
import Chapter03 from "./components/Chapter03";
import Chapter04 from "./components/Chapter04";
import Chapter05 from "./components/Chapter05";
import Chapter06 from "./components/Chapter06";
import Chapter07 from "./components/Chapter07";
import Chapter08 from "./components/Chapter08";
import Chapter09 from "./components/Chapter09";
import Chapter10 from "./components/Chapter10";
import Chapter11 from "./components/Chapter11";
import Chapter12 from "./components/Chapter12";
import Chapter13 from "./components/Chapter13";
import Chapter14 from "./components/Chapter14";
import Chapter15 from "./components/Chapter15";
import Chapter16 from "./components/Chapter16";
import Chapter17 from "./components/Chapter17";
import Chapter18 from "./components/Chapter18";
import Chapter19 from "./components/Chapter19";
import Chapter20 from "./components/Chapter20";

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
            <Route path="/chapter04" component={Chapter04} />
            <Route path="/chapter05" component={Chapter05} />
            <Route path="/chapter06" component={Chapter06} />
            <Route path="/chapter07" component={Chapter07} />
            <Route path="/chapter08" component={Chapter08} />
            <Route path="/chapter09" component={Chapter09} />
            <Route path="/chapter10" component={Chapter10} />
            <Route path="/chapter11" component={Chapter11} />
            <Route path="/chapter12" component={Chapter12} />
            <Route path="/chapter13" component={Chapter13} />
            <Route path="/chapter14" component={Chapter14} />
            <Route path="/chapter15" component={Chapter15} />
            <Route path="/chapter16" component={Chapter16} />
            <Route path="/chapter17" component={Chapter17} />
            <Route path="/chapter18" component={Chapter18} />
            <Route path="/chapter19" component={Chapter19} />
            <Route path="/chapter20" component={Chapter20} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
