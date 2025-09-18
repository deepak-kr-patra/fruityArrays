import { useEffect, useRef, useState } from "react";
import { getLevelInfo, getTotalLevels } from "../utils/levelsInfo";
import useGlobalStates from "../zustand/useGlobalStates";
import toast from 'react-hot-toast';


const CodeEditor = () => {

    const {
        screenWidth,
        level,
        setLevel,
        levelsCompleted,
        setLevelsCompleted,
        fruits,
        setFruits,
        setCodeResetUsed,
        levelsResetUsed,
        setLevelsResetUsed
    } = useGlobalStates();

    let levelInfo = getLevelInfo(level);
    let totalLevels = getTotalLevels();

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

        if (level <= levelsCompleted) {
            setFruits(levelInfo.expectedFruits);
        } else {
            setFruits(levelInfo.defaultFruits);
        }
        setCode(localStorage.getItem(`codeLevel${level}`) || '');
        setError('');

        setEnableButton(false);
        if (level <= levelsCompleted && level < totalLevels) {
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
    // intentionally kept this useEffect below previous one so 'code' doesn't get same value as previous level
    useEffect(() => {
        if (screenWidth >= 768) {
            textareaRef.current?.focus();
        }
        localStorage.setItem(`codeLevel${level}`, code);

        if (levelsResetUsed) {
            setCode('');
            setLevelsResetUsed(false);
        }
    });

    const checkOutput = (fruits) => {
        if (JSON.stringify(levelInfo.expectedFruits) === JSON.stringify(fruits)) {
            // show congrats section after some animations
            if (level === 15) {
                const fruitsItems = document.querySelectorAll('.fruitItem');
                fruitsItems.forEach((fruit, idx) => {
                    fruit.classList.add('flyUp');
                    fruit.style.animationDelay = `${idx * 0.1}s`;
                });
                setTimeout(() => {
                    document.getElementById('congratulationsSection').classList.add('showCongratsSection');
                }, 5000);
            } else {
                setEnableButton(true);
            }

            if (level > levelsCompleted) {
                toast.success("Well done!");
                localStorage.setItem('levelsCompleted', levelsCompleted + 1);
                setLevelsCompleted(levelsCompleted + 1);
            } else {
                toast.success("Level already completed.");
            }
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
        <section className="flex flex-col justify-start flex-1 max-md:h-full">
            <div id="levelInfoDiv" className="mt-4 max-md:mt-0 flex flex-col gap-4 max-lg:gap-2"></div>

            <div className="demoFruits w-full flex flex-col font-serif">
                <p className="font-semibold max-lg:text-sm">Initial Array: </p>
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
                <p className="font-semibold max-lg:text-sm">Expected Array: </p>
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
            <div className="mt-4 flex flex-col justify-end flex-1">
                <div className="codeBox flex flex-col h-48 max-md:h-38 p-2 max-lg:p-1 bg-gray-200">
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

                    <div className="flex justify-between items-end flex-1">
                        {<p className="error text-red-500">{error}</p>}
                        <div className="flex gap-2 max-lg:gap-1">
                            <button
                                onClick={runUserCode}
                                className="button"
                            >
                                Run
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
                </div>
                <p className="footer mt-2">
                    2025 &copy;
                    created by <a target="_blank" href="https://deepakpatra.netlify.app" className="myName">Deepak</a>
                </p>
            </div>
        </section>
    );
}

export default CodeEditor