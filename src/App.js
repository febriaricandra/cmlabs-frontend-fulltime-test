import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import ListIngredient from './pages/ListIngredient';
import Home from './pages/Home';
import DetailMeal from './pages/DetailMeal';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredient" element={<ListIngredient />} />
      <Route path="/ingredient/:id" element={<DetailMeal /> } />
    </Routes>
  );
}

export default App;
