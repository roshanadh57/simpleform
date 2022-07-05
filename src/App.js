import "./App.css";
import Page from "./components/Page.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;
