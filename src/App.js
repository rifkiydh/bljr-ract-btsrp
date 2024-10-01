import "./App.css";
import NavigationBar from "./components/Navigationbar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/SuperHero";
import "./style/landingPage.css";
function App() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
