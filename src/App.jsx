import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from './zustand/useLevel';

function App() {
  const { level } = useLevel();

  return (
    <div className="flex h-screen bg-blue-50 p-4vv gap-4">
      <div className="w-1/2 p-4">
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-extrabold'>Array Ally</h2>
          <div className='font-bold h-6 flex justify-center items-center'>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidLeftArrow /></span>
            <p className='bg-gray-400 h-6 px-2'>Level {level} of 10</p>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidRightArrow /></span>
          </div>
        </div>
        <CodeEditor />
      </div>
      <div className="w-1/2 flex justify-center">
        <FruitVisualizer />
      </div>
    </div>
  )
}

export default App
