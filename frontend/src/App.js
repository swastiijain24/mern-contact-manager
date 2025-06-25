import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Update from './components/Update';
import Read from './components/Read';
import Create from './components/Create';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
