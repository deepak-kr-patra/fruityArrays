import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';
import { Toaster } from 'react-hot-toast';
import useLevel from './zustand/useLevel';


function App() {
  const { screenWidth, setScreenWidth } = useLevel();

  window.onresize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      {screenWidth >= 768 && 
      <div className="flex max-md:flex-col max-md:justify-between h-screen bg-blue-100">
        <div className="w-1/2 p-4 max-md:w-full">
          <div className='flex justify-between items-center'>
            <h2 className='header'>
              {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
            </h2>
            <LevelIndicator />
          </div>
          <CodeEditor />
        </div>

        <div className="w-1/2 p-2 max-md:w-full fruitsVisualizerContainer">
          <FruitVisualizer />
        </div>
        <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
      </div>}

      {screenWidth < 768 && 
      <div className="flex flex-col h-screen bg-blue-100">
        <div className="p-4 pb-0 w-full">
          <div className='flex justify-between items-center'>
            <h2 className='header'>
              {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
            </h2>
            <LevelIndicator />
          </div>
        </div>

        <div className="p-2 w-full fruitsVisualizerContainer">
          <FruitVisualizer />
        </div>

        <div className="p-2 pt-0 w-full ">
          <CodeEditor />
        </div>
        <Toaster toastOptions={{ position: "top-center", duration: 4000 }} />
      </div>}
    </>
  )
}

export default App
