import "./App.css";
import NavigationBar from "./components/Navigationbar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingPage.css";
function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      {/* end intro section */}
      <div className="trending">
        <Trending />
      </div>
    </div>
  );
}

export default App;
