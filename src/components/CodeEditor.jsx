import { useEffect, useRef, useState } from "react";
import { getLevelInfo } from "../utils/levelsInfo";
import useLevel from "../zustand/useLevel";
import toast from 'react-hot-toast';


const CodeEditor = () => {

    const {
        level,
        setLevel,
        levelsCompleted,
        setLevelsCompleted,
        fruits,
        setFruits,
        setCodeResetUsed,
        levelsResetUsed,
        setLevelsResetUsed
    } = useLevel();

    let levelInfo = getLevelInfo(level);

    const [code, setCode] = useState(localStorage.getItem(`codeLevel${level}`) || '');
    const [error, setError] = useState('');
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        const textarea = document.getElementById('textArea');
        const textLength = textarea.value.length;

        textarea.focus();

        // set the cursor to the end of the text
        textarea.setSelectionRange(textLength, textLength);
    }, []);

    useEffect(() => {
        localStorage.setItem('level', level);

        setFruits(levelInfo.defaultFruits);
        setCode(localStorage.getItem(`codeLevel${level}`) || '');
        textareaRef.current?.focus();

        setEnableButton(false);
        if (level <= levelsCompleted) {
            setEnableButton(true);
        }

        // setting the level info elements inside the levelInfoDiv dynamically
        const levelInfoDiv = document.getElementById('levelInfoDiv');
        levelInfoDiv.textContent = "";
        levelInfo.levelDescription.forEach((text, idx) => {
            const p = document.createElement('p');
            p.innerHTML = `${text}`;
            p.setAttribute('key', idx);
            p.classList.add('levelDesc');
            levelInfoDiv.appendChild(p);
        });
    }, [level]);

    const textareaRef = useRef();
    useEffect(() => {
        textareaRef.current?.focus();
        localStorage.setItem(`codeLevel${level}`, code);

        if (levelsResetUsed) {
            setCode('');
            setLevelsResetUsed(false);
        }
    });

    const checkOutput = (fruits) => {
        if (JSON.stringify(levelInfo.expectedFruits) === JSON.stringify(fruits)) {
            toast.success("Well done!");
            localStorage.setItem('levelsCompleted', levelsCompleted + 1);
            setLevelsCompleted(levelsCompleted + 1);
            setEnableButton(true);
        } else {
            toast.error("Nope! try Again.");
        }
    };

    const runUserCode = () => {
        try {
            let tempFruits = [...fruits];
            const userFunc = new Function('fruits', `
                ${code}
                return fruits;
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
        setCodeResetUsed(true);
        setEnableButton(false);
    };

    const handleNext = () => {
        setLevel(level + 1);
        setError('');
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
        }
    };

    return (
        <section>
            <div id="levelInfoDiv" className="mt-4 flex flex-col gap-4 max-md:gap-2"></div>

            <div className="demoFruits w-full flex flex-col font-serif">
                <p className="font-semibold max-md:text-sm">Initial Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.defaultFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="demoFruit p-1 max-md:p-[3px] bg-yellow-100 border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div className="demoFruits w-full flex flex-col font-serif">
                <p className="font-semibold max-md:text-sm">Expected Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {levelInfo.expectedFruits.map((fruit, idx) => (
                        <div
                            key={idx}
                            className="demoFruit p-1 max-md:p-[3px] bg-yellow-100 border border-yellow-400"
                        >
                            {fruit}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8 max-md:mt-4">
                <div className="code h-44 max-md:h-32 p-2 px-4 max-md:p-1 max-md:px-2 bg-gray-200 font-mono">
                    <p className="p-0.5">
                        let fruits = [{levelInfo.defaultFruits.map(f => `"${f}"`).join(', ')}];
                    </p>
                    <textarea
                        id="textArea"
                        ref={textareaRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={(e) => keyDownValidation(e)}
                        className="w-full p-0.5 outline-none resize-none bg-white"
                        spellCheck={false}
                        rows={levelInfo.maxLines}
                    />
                    <p className="p-0.5">
                        fruits.displayInPanel();
                    </p>
                </div>
                <div className="mt-2 flex justify-end items-center gap-2">
                    <button
                        onClick={runUserCode}
                        className="button"
                    >
                        Run Code
                    </button>
                    <button
                        onClick={handleReset}
                        className="button"
                    >
                        Reset
                    </button>
                    <button
                        onClick={handleNext}
                        className={`nextBtn ${!enableButton ? "bg-blue-300" : "enabledNextBtn"}`}
                        disabled={!enableButton}
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