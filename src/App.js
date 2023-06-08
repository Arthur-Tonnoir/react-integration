import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Accueil from './Page/Accueil/Accueil';
import VideoPlayer from './Page/VideoPlayer/VideoPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' Component={Accueil} />
          <Route path='/videoplayer/:youtubeur/:title/:like' Component={VideoPlayer} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
