import './App.css';
import SideBar from './components/Sidebar';
import WeatherDetails from './components/Weather/Details';
import SearchBar from './components/search';

function App() {
  return (
    <div className='flex w-full border-black'>

      <div className='h-screen p-8'>
        <SideBar />
      </div>
      <div className='flex flex-col w-3/5 ml-5'>
        <div className='p-8'>
          <SearchBar />
        </div>
        <div className='flex justify-center'>
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}

export default App;