import './App.css';
import SideBar from './components/Sidebar';
import WeatherDetails from './components/Weather';
import WeekForecast from './components/Weather/WeekForecast';
import SearchBar from './components/search';

function App() {
  return (
    <div className='flex w-full'>

      <div className='h-full p-8'>
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
      <div className='p-8 w-4/12 h-screen'>
        <WeekForecast />
      </div>
    </div>
  );
}

export default App;
