import { useEffect, useRef, useState } from "react";
import { getLevelInfo } from "../utils/levelsInfo";
import useLevel from "../zustand/useLevel";
import toast from 'react-hot-toast';


const CodeEditor = () => {

    const { level, setLevel, fruits, setFruits } = useLevel();
    let levelInfo = getLevelInfo(level);

    useEffect(() => {
        setFruits(levelInfo.defaultFruits);
        setCode('');
        textareaRef.current?.focus();
    }, [level]);
    
    const textareaRef = useRef();
    useEffect(() => {
        textareaRef.current?.focus();
    });

    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState('');

    const checkOutput = (fruits) => {
        const expectedFruitsArray = levelInfo.expectedFruits;

        if (JSON.stringify(expectedFruitsArray) === JSON.stringify(fruits)) {
            setResult("Well done!");
            toast.success("Well done!");
        } else {
            setResult("Nope! try Again.");
            toast.error("Nope! try Again.");
        }
    };

    const runUserCode = () => {
        try {
            const tempFruits = [...fruits];
            const userFunc = new Function('fruits', code);
            userFunc(tempFruits);
            setFruits(tempFruits);
            checkOutput(tempFruits);
            setError('');
        } catch (e) {
            setError(e.message);
        }
    };

    const handleReset = () => {
        setCode('');
        setFruits(levelInfo.defaultFruits);
        setError('');
        setResult('');
    };

    const handleNext = () => {
        setLevel(level + 1);
        setError('');
        setResult('');
    };

    return (
        <section>
            <p id="levelDesc" className="my-4">
                {levelInfo.levelDescription}
            </p>
            <div id="originalArray" className="my-4 w-full flex flex-col gap-1">
                <p className="font-semibold">Initial Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.defaultFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="h-max text-3xl p-1 bg-yellow-100 rounded border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div id="expectedArray" className="my-4 w-full flex flex-col gap-1">
                <p className="font-semibold">Expected Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.expectedFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="h-max text-3xl p-1 bg-yellow-100 rounded border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <div className="rounded h-52 flex flex-col p-2 px-4 bg-gray-200 border-black border-2 font-mono">
                    <p className="px-2 pt-1">
                        let fruits = [{levelInfo.defaultFruits.map(f => `"${f}"`).join(', ')}];
                    </p>
                    <textarea
                        ref={textareaRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full px-2 py-1 outline-none resize-none bg-white"
                        spellCheck={false}
                        rows={levelInfo.maxLines}
                    />
                    <p className="px-2 py-1">
                        fruits.displayInPanel();
                    </p>
                </div>
                <div id="buttonsDiv" className="mt-2 flex justify-end items-center gap-2">
                    <button
                        onClick={runUserCode}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                    >
                        Run Code
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleNext}
                        className={`px-4 py-2 ${result !== "Well done!" ? "bg-blue-300" : "bg-blue-600 cursor-pointer hover:bg-blue-700"} text-white rounded`}
                        disabled={result !== "Well done!"}
                    >
                        Next
                    </button>
                </div>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
        </section>
    );
}

export default CodeEditor