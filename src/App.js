import './App.css';
import SideBar from './components/Sidebar';
import SearchBar from './components/search';

function App() {
  return (
    <div className='flex w-full border-black'>
      <div className='h-screen p-8'>
        <SideBar />
      </div>
      <div className='w-3/5 b ml-5 p-8'>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
