import { useState } from 'react'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';

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
    <div className="flex h-screen bg-gray-100 p-4 gap-4">
      <div className="w-1/2">
        <CodeEditor onRun={runUserCode} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <div className="w-1/2">
        <FruitVisualizer fruits={fruits} />
      </div>
    </div>
  )
}

export default App
