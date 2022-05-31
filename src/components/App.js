import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Service from "./Service";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from "./ContactUs";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <ContactUs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>   
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
