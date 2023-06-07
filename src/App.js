import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import Video from './Components/Video/Video';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='main-containers'>
        <SideBar />
        <Video />
      </div>
    </div>
  );
}

export default App;
