import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routers />
        <div>
          <Routes>
            <Route exact path='/' element={<Header />} />
            {/* <Route path='/props' element={<Props />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
