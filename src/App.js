import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
