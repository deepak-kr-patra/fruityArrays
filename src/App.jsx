import './App.css'
import CodeEditor from './components/CodeEditor';
import FruitVisualizer from './components/FruitVisualizer';
import LevelIndicator from './components/LevelIndicator';

function App() {
  return (
    <div className="flex h-screen bg-blue-50 p-4vv gap-4">
      <div className="w-1/2 p-4">
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-extrabold'>Array Ally</h2>
          <LevelIndicator />
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
