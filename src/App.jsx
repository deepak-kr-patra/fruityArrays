import { useState } from 'react'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const defaultFruits = ['🍎', '🍌', '🍇', '🍓', '🍍'];

function App() {
  const [fruits, setFruits] = useState([...defaultFruits]);
  const [error, setError] = useState('');

  const runUserCode = (code) => {
    try {
      const tempFruits = [...defaultFruits];
      const userFunc = new Function('fruits', code);
      userFunc(tempFruits);
      setFruits(tempFruits);
      setError('');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 p-4vv gap-4">
      <div className="w-1/2 p-4">
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-extrabold p-4'>Array Ally</h2>
          <div className='font-bold h-6 p-4 flex justify-center items-center'>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidLeftArrow /></span>
            <p className='bg-gray-400 h-6 px-2'>Level 1 of 10</p>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidRightArrow /></span>
          </div>
        </div>
        <CodeEditor onRun={runUserCode} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="w-1/2 flex justify-center">
        <FruitVisualizer fruits={fruits} />
      </div>
    </div>
  )
}

export default App
