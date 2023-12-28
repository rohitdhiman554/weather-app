import './App.css';
import SideBar from './components/Sidebar';
import WeatherDetails from './components/Weather';
import WeekForecast from './components/Weather/WeekForecast';
import SearchBar from './components/search';

function App() {
  return (
    <div className='flex w-full p-8 gap-8'>
      <SideBar />
      <div className='flex flex-col gap-5 w-3/5 ml-8'>
        <SearchBar />
        <div className='flex justify-center'>
          <WeatherDetails />
        </div>
      </div>
      <div className='w-4/12 mb-5'>
        <WeekForecast />
      </div>
    </div>
  );
}

export default App;
