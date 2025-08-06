import './App.css'
import { useState } from 'react'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { getLevelInfo } from './utils/levelsInfo';

// const defaultFruits = ['🍎', '🍌', '🍇', '🍓', '🍍'];

function App() {
  const levelInfo = getLevelInfo();
  // const [fruits, setFruits] = useState([...defaultFruits]);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const checkOutput = (fruits) => {
    const expectedFruitsArray = levelInfo.expectedFruits;

    if (JSON.stringify(expectedFruitsArray) === JSON.stringify(fruits)) {
      setResult("Well done!");
    } else {
      setResult("Nope! try Again.");
    }
  }

  // const runUserCode = (code) => {
  //   try {
  //     const tempFruits = [...fruits];
  //     const userFunc = new Function('fruits', code);
  //     userFunc(tempFruits);
  //     setFruits(tempFruits);
  //     checkOutput(tempFruits);
  //     setError('');
  //   } catch (e) {
  //     setError(e.message);
  //   }
  // };

  const resetFruitsArray = () => {
    // setFruits(defaultFruits);
    setError('');
    setResult('');
  };

  return (
    <div className="flex h-screen bg-blue-50 p-4vv gap-4">
      <div className="w-1/2 p-4">
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-extrabold'>Array Ally</h2>
          <div className='font-bold h-6 flex justify-center items-center'>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidLeftArrow /></span>
            <p className='bg-gray-400 h-6 px-2'>Level 1 of 10</p>
            <span className='bg-gray-300 h-6 flex justify-center items-center px-2'><BiSolidRightArrow /></span>
          </div>
        </div>
        <CodeEditor checkOutput={checkOutput} onReset={resetFruitsArray} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {result && <p className="text-red-500 mt-2">{result}</p>}
      </div>
      <div className="w-1/2 flex justify-center">
        <FruitVisualizer />
      </div>
    </div>
  )
}

export default App
