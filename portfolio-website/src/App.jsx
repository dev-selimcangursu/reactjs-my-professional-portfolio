import "./App.css";
import PortfolioList from "./components/Portfolio/PortfolioList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ExperienceList from "./components/Experience/ExperienceList";
import ServiceList from "./components/Services/ServiceList";
import About from "./components/About/About";
import HomeScreen from "./components/Home/HomeScreen";


function App() {
  return (
    <>
      <HomeScreen/>
      <About />
      <ServiceList />
      <ExperienceList />
      <PortfolioList />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
