import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="flex max-md:flex-col h-screen bg-blue-100">
      <div className="w-1/2 p-4 max-md:w-full">
        <div className='flex justify-between items-center'>
          <h2 className='header'>
            {"FRUITS ARRAY".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
          </h2>
          <LevelIndicator />
        </div>
        <CodeEditor />
      </div>

      <div className="w-1/2 p-2 max-md:w-full">
        <FruitVisualizer />
      </div>
      <Toaster toastOptions={{ position: "bottom-right", duration: 4000 }} />
    </div>
  )
}

export default App
