import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom"
import Landing from './pages/landing';
import Input from './component/input' 

function App() {

  return (
    <Router>

      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/input' element={<Input/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
