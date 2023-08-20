import viteLogo from "/vite.svg";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
    <Nav />
    <Routes>
      <Route path="/" element={<Dashboard />}/>
        <Route path="form" element={<Form />} />
   
    </Routes>
    </div>
  );
}

export default App;
