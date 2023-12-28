import './App.css';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div className='flex w-full first-letter:border-black'>
      <div className='h-screen p-8'>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
