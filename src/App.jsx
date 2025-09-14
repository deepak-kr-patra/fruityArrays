import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';
import { Toaster } from 'react-hot-toast';
import useGlobalStates from './zustand/useGlobalStates';
import Congratulations from './components/Congratulations';


function App() {
  const { screenWidth, setScreenWidth } = useGlobalStates();

  window.onresize = () => {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      <Congratulations />
      {screenWidth >= 768 &&
        <div className="flex h-screen bg-blue-100">
          <div className="w-[55%] h-full flex flex-col p-4">
            <div className='flex justify-between items-center'>
              <h2 className='header'>
                {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
              </h2>
              <LevelIndicator />
            </div>
            <CodeEditor />
          </div>

          <div className="w-[45%] h-full p-2 pl-0">
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

          <div className="p-2 h-max">
            <FruitVisualizer />
          </div>

          <div className="p-2 pt-0 w-full flex-1">
            <CodeEditor />
          </div>
          <Toaster toastOptions={{ position: "bottom-center", duration: 4000 }} />
        </div>}
    </>
  )
}

export default App
