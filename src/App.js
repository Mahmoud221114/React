import React , {Component} from "react"; 
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import Offer from "./Components/Offer";
import About from "./Components/About";
import Contact from "./Components/Contact";

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Feature />
        <Offer />
        <About />
        <Contact />
      </div>
    )
  } 
}

export default App;
