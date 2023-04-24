import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import {useLocation} from "react-router-dom";

function App() {
    const location= useLocation();
    console.log("app",location)
    const userProfile = location.state?.userProfile;
    // useEffect
  return (
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu userProfile={userProfile} />

      <div className="background"></div>
    </div>
  );
}

export default App;
