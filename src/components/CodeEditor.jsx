import { useState } from "react";

const CodeEditor = ({ onRun, onReset, fruits }) => {
    const [code, setCode] = useState('fruits.push("🥭")');

    const handleRun = () => {
        onRun(code);
    };

    const handleReset = () => {
        setCode('fruits.push("🥭")');
        onReset();
    };

    return (
        <section>
            <p id="levelInfo" className="my-4">
                Use push method to add "🥭" to the fruits array.
            </p>
            <div id="originalArray" className="my-4 w-full flex flex-col gap-2">
                <p>Original Array: </p>
                <div className="flex justify-start items-center gap-2">
                    {fruits.map((fruit, idx) => (
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
                    {[...fruits, "🥭"].map((fruit, idx) => (
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
                    className="w-full h-40 bg-white p-2 border rounded resize-none"
                    rows={3}
                />
                <div id="buttonsDiv" className="flex justify-end items-center gap-2">
                    <button
                        onClick={handleRun}
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
                        // onClick={handleReset}
                        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            </div>

        </section>
    );
}

export default CodeEditor