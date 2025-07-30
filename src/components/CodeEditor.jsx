import { useState } from "react";

const CodeEditor = ({ onRun }) => {
    const [code, setCode] = useState('fruits.push("🥭")');

    const handleRun = () => {
        onRun(code);
    };

    return (
        <div>
            <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-40 bg-white p-2 border rounded resize-none"
                rows={3}
            />
            <button
                onClick={handleRun}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
            >
                Run Code
            </button>
        </div>
    );
}

export default CodeEditor