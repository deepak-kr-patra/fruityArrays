import { useEffect, useState } from "react";
import { getLevelInfo } from "../utils/levelsInfo";
import useLevel from "../zustand/useLevel";

const CodeEditor = () => {

    const { level, setLevel, fruits, setFruits } = useLevel();
    let levelInfo = getLevelInfo(level);

    useEffect(() => {
        setFruits(levelInfo.defaultFruits);
        setCode('fruits.push("🥭")');
    }, [level]);

    const [code, setCode] = useState('fruits.push("🥭")');
    const [error, setError] = useState('');
    const [result, setResult] = useState('');

    const checkOutput = (fruits) => {
        const expectedFruitsArray = levelInfo.expectedFruits;

        if (JSON.stringify(expectedFruitsArray) === JSON.stringify(fruits)) {
            setResult("Well done!");
        } else {
            setResult("Nope! try Again.");
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
        setCode('fruits.push("🥭")');
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
            <p id="levelInfo" className="my-4">
                {levelInfo.levelDescription}
            </p>
            <div id="originalArray" className="my-4 w-full flex flex-col gap-2">
                <p>Original Array: </p>
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
            <div id="expectedArray" className="my-4 w-full flex flex-col gap-2">
                <p>Expected Array: </p>
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
            <div>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-40 bg-white p-2 border border-dashedxx rounded resize-none"
                    spellCheck={false}
                    rows={3}
                />
                <div id="buttonsDiv" className="flex justify-end items-center gap-2">
                    <button
                        onClick={runUserCode}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                    >
                        Run Code
                    </button>
                    <button
                        onClick={handleReset}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleNext}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            {result && <p className="text-red-500 mt-2">{result}</p>}
        </section>
    );
}

export default CodeEditor