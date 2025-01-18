import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import NewCharacterPage from './pages/Character/NewCharacterPage';
import CharacterPage from './pages/Character/CharacterPage';
import CharactersPage from './pages/Character/CharactersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<CharactersPage/>} />
        <Route path="/character/new" element={<NewCharacterPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
