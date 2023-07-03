
import './App.css';
import Category from './Components/Category/Category';
import Registration from './Components/Registration/Registration';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/category' element={<Category/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
