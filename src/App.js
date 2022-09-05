import { NavProvider } from "./store/NavContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <NavProvider>
      <div className="m-8">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </NavProvider>
  );
}

export default App;
