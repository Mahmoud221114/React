import React , {Component} from "react"; 
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutImage1 from './images/Frame 19.png';
import aboutImage2 from './images/download.png';
import Contact from "./Components/Contact";
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Feature />
        <About image={aboutImage1} title="Comes With All You Need For Daily Life" button="Get The App"/>
        <Presentation />
        <About image={aboutImage2} title="Download And Get The App Now" button="Download"/>
        <Contact />
      </div>
    )
  } 
}

export default App;
