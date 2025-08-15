import { useEffect, useRef, useState } from "react";
import { getLevelInfo } from "../utils/levelsInfo";
import useLevel from "../zustand/useLevel";
import toast from 'react-hot-toast';


const CodeEditor = () => {

    const { level, setLevel, fruits, setFruits, setResetUsed } = useLevel();
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
        if (JSON.stringify(levelInfo.expectedFruits) === JSON.stringify(fruits)) {
            setResult("Well done!");
            toast.success("Well done!");
        } else {
            setResult("Nope! try Again.");
            toast.error("Nope! try Again.");
        }
    };

    const runUserCode = () => {
        try {
            let tempFruits = [...fruits];
            const userFunc = new Function('fruits', `
                ${code}
                return fruits
            `);
            tempFruits = userFunc(tempFruits);
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
        setResetUsed(true);
    };

    const handleNext = () => {
        setLevel(level + 1);
        setError('');
        setResult('');
    };

    const keyDownValidation = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.target;
            const newValue = code.substring(0, selectionStart) + "    " + code.substring(selectionEnd);
            setCode(newValue);

            // Move the cursor after inserted spaces
            requestAnimationFrame(() => {
                e.target.selectionStart = e.target.selectionEnd = selectionStart + 4;
            });
        } else if (e.key === 'Enter') {
            const currentLineCount = code.split('\n').length;

            if (currentLineCount >= levelInfo.maxLines) {
                e.preventDefault();
                return;
            }
        } else if (e.key === '{' || e.key === '(' || e.key === '[' || e.key === '"' || e.key === "'") {
            e.preventDefault();
            const { selectionStart, selectionEnd } = e.target;
            let autoCompletedStr;
            switch (e.key) {
                case '{':
                    autoCompletedStr = "{}";
                    break;
                case '(':
                    autoCompletedStr = "()";
                    break;
                case '[':
                    autoCompletedStr = "[]";
                    break;
                case '"':
                    autoCompletedStr = '""';
                    break;
                case "'":
                    autoCompletedStr = "''";
                    break;
                default:
                    break;
            }
            const newValue = code.substring(0, selectionStart) + autoCompletedStr + code.substring(selectionEnd);
            setCode(newValue);

            requestAnimationFrame(() => {
                e.target.selectionStart = e.target.selectionEnd = selectionStart + 1;
            });
        }
    };

    return (
        <section>
            <div className="mt-4 flex flex-col gap-4">
                {levelInfo.levelDescription.map((text, idx) =>
                    <p key={idx} className="levelDesc">{text}</p>
                )}
            </div>
            <div className="my-4 w-full flex flex-col font-serif">
                <p className="font-semibold">Initial Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.defaultFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="h-max text-2xl p-1 bg-yellow-100 rounded border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-4 w-full flex flex-col font-serif">
                <p className="font-semibold">Expected Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.expectedFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="h-max text-2xl p-1 bg-yellow-100 rounded border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <div className="rounded h-44 flex flex-col p-2 px-4 bg-gray-200 border-black border-2 font-mono">
                    <p className="p-1">
                        let fruits = [{levelInfo.defaultFruits.map(f => `"${f}"`).join(', ')}];
                    </p>
                    <textarea
                        ref={textareaRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={(e) => keyDownValidation(e)}
                        className="w-full p-1 outline-none resize-none bg-white"
                        spellCheck={false}
                        rows={levelInfo.maxLines}
                    />
                    <p className="p-1">
                        fruits.displayInPanel();
                    </p>
                </div>
                <div className="mt-2 flex justify-end items-center gap-2">
                    <button
                        onClick={runUserCode}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                    >
                        Run Code
                    </button>
                    <button
                        onClick={handleReset}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded cursor-pointer"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleNext}
                        className={`px-3 py-1.5 ${result !== "Well done!" ? "bg-blue-300" : "bg-blue-600 cursor-pointer hover:bg-blue-700"} text-white rounded`}
                    // disabled={result !== "Well done!"}
                    >
                        Next
                    </button>
                </div>
            </div>

            {error && <p className="text-red-500 mt-2 font-mono">{error}</p>}
        </section>
    );
}

export default CodeEditor