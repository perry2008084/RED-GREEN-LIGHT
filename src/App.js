import { useState } from "react";
import { NavProvider } from './store/NavContext';
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentEdit from "./components/ContentEdit";
import { PAGE_MODE_NORMAL, PAGE_MODE_EDIT } from "./constants";

function App() {
  // 模式状态
  const [mode, setMode] = useState(PAGE_MODE_NORMAL);

  // 切换模式
  const handleChangeMode = (mode) => {
    setMode(mode);
  };

  return (
    <NavProvider>
      <div className="m-8">
        <Header changeMode={handleChangeMode}></Header>
        {mode === PAGE_MODE_NORMAL && <Content></Content>}
        {mode === PAGE_MODE_EDIT && (
          <ContentEdit changeMode={handleChangeMode}></ContentEdit>
        )}
        <Footer></Footer>
      </div>
    </NavProvider>
  );
}

export default App;
