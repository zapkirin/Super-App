
import './App.css';
import Category from './Components/Category/Category';
import Profile from './Components/Profile/Profile';
import Registration from './Components/Registration/Registration';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
