import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/ContactMe" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
