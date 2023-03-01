import { APIProvider } from './services/context';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DETAIL_CARD, HOME } from './Routes/Routes';
import { Home } from './views/Home';
import { FruitDetails } from './views/FruitDetails';

function App() {
  return (
    <APIProvider>
      <Router>
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={DETAIL_CARD} element={<FruitDetails />} />
        </Routes>
      </Router>
    </APIProvider>
  );
}

export default App;
