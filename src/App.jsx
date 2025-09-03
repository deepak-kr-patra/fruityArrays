import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';
import { Toaster } from 'react-hot-toast';
import useGlobalStates from './zustand/useGlobalStates';


function App() {
  const { screenWidth, setScreenWidth } = useGlobalStates();

  window.onresize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      {screenWidth >= 768 && 
      <div className="flex max-md:flex-col max-md:justify-between h-screen bg-blue-100">
        <div className="w-[55%] h-full flex flex-col p-4 max-md:w-full">
          <div className='flex justify-between items-center'>
            <h2 className='header'>
              {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
            </h2>
            <LevelIndicator />
          </div>
          <CodeEditor />
        </div>

        <div className="w-[45%] p-2 pl-0 max-md:w-full max-md:h-max">
          <FruitVisualizer />
        </div>
        <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
      </div>}

      {screenWidth < 768 && 
      <div className="flex flex-col h-dvh bg-blue-100">
        <div className="p-2 pb-0 w-full">
          <div className='flex justify-between items-center'>
            <h2 className='header'>
              {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
            </h2>
            <LevelIndicator />
          </div>
        </div>

        <div className="p-2 w-full max-md:h-max">
          <FruitVisualizer />
        </div>

        <div className="p-2 pt-0 w-full flex-1">
          <CodeEditor />
        </div>
        <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
      </div>}
    </>
  )
}

export default App
