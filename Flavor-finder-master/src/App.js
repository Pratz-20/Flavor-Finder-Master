import './App.css';
import About from './components/About/about';
import Nav from "./components/navbar/nav";
import AllCards from "./components/Cards/AllCards"
import Modal from './components/Cards/Modal';
import Favorites from './components/Favorites/Favorites';
import { useGlobalContext } from './context';
import Loading from './components/Loader/loading';


const Par = () => {
  const { showModal, favorites, showFavorite} = useGlobalContext();
  return(
    <>
      <header className='fixed w-screen'>
        <Nav />
        {showFavorite && favorites.length > 0 && <Favorites />}
      </header>
      <div className='bg-[#f1f5f9]'>
        <About />
        <AllCards />
        { showModal && <Modal /> }
      </div>
    
    </>
  )
}

function App() {
  const {loading} = useGlobalContext();
  return (
    <div>
      {
        loading ? <Loading /> :  <Par />
      }
      
    </div>
  );
}

export default App;
