import "./App.css";
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import Main from "./component/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyFooter from "./component/MyFooter";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="App w-100">
      <MyNav />
      <Main />
      {/* <Profile /> */}
      <MyFooter />
    </div>
  );
}

export default App;
