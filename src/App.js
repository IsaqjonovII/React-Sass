import { Routes, Route } from "react-router-dom";
import { App__Routes } from "./routes";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./styles/index.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="page__container">
        <Sidebar />
        <Routes>
          {App__Routes?.map(({ id, path, component }) => (
            <Route path={path} key={id} element={component} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
