import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <div className="flex flex-col md:flex-wrap h-screen bg-blue-100">
        <div className='w-[55%] p-4 pb-0 max-md:p-2 max-md:w-full flex justify-between items-center'>
          <h2 className='header'>
            {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
          </h2>
          <LevelIndicator />
        </div>
        <div className="w-[45%] p-2 max-md:w-full fruitsVisualizerContainer">
          <FruitVisualizer />
        </div>
        <div className="w-[55%] p-4 pt-0 max-md:p-2 max-md:w-full flex-1">
          <CodeEditor />
        </div>
      </div>
      <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
    </>
  )
}

export default App
