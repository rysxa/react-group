import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';

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
