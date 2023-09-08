import "./App.css";
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import Main from "./component/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyFooter from "./component/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Main />
      <MyFooter />
    </div>
  );
}

export default App;
