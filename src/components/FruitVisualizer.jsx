import { useEffect, useRef, useState } from "react";
import useLevel from "../zustand/useLevel";


const ANIM_CLEAR_MS = 450; // slightly longer than CSS animation

const FruitVisualizer = () => {

    const { fruits, level, codeResetUsed, setCodeResetUsed } = useLevel();

    // to not render any array until fruits array is non-empty
    const [isReady, setIsReady] = useState(false);

    // refs to hold previous values (persist across renders without causing rerenders)
    const prevFruitsRef = useRef([]);
    const prevLevelRef = useRef();

    // add 'newLevelAnimation' to every element initially
    const [animFlags, setAnimFlags] = useState(() => fruits.map(() => "newLevelAnimation"));

    useEffect(() => {
        if (fruits.length > 0) setIsReady(true);

        const prevFruits = prevFruitsRef.current;
        const prevLevel = prevLevelRef.current;

        const levelChanged = prevLevel === undefined || level !== prevLevel;
        const filledFromEmpty = prevFruits.length === 0 && fruits.length > 0;

        let newAnimFlags;

        if (levelChanged || filledFromEmpty) {
            newAnimFlags = fruits.map(() => "newLevelAnimation");
        } else {
            if (codeResetUsed) {
                newAnimFlags = fruits.map(() => "");
                setCodeResetUsed(false);
            } else {
                // Build counts of previous occurrences
                const prevCounts = {};
                prevFruits.forEach((f) => (prevCounts[f] = (prevCounts[f] || 0) + 1));

                // consumed counts as we iterate current fruits
                const consumed = {};
                newAnimFlags = fruits.map((f) => {
                    const prevCount = prevCounts[f] || 0;
                    const seen = consumed[f] || 0;
                    consumed[f] = seen + 1;
                    // If we've already matched all prev occurrences of this value,
                    // then this current occurrence is an extra (i.e. new one)
                    return consumed[f] > prevCount ? "newFruitAnimation" : "";
                });
            }
        }

        // Apply flags so render adds the class to newly changed indices
        setAnimFlags(newAnimFlags);

        // Clear flags after animation finishes so same item can animate again later
        let t;
        if (newAnimFlags.some(Boolean)) {
            t = setTimeout(() => {
                setAnimFlags((prev) => prev.map(() => ""));
            }, ANIM_CLEAR_MS);
        }

        // update prev refs after computing animation flags
        prevFruitsRef.current = fruits;
        prevLevelRef.current = level;

        return () => clearTimeout(t);
    }, [fruits]);

    return (
        <div className="fruitsSection w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded shadow min-h-[100px] h-full">
            {isReady && fruits.map((fruit, idx) => {
                return <div
                    key={`${level}-${idx}`}
                    className={`${animFlags[idx]} fruitItem p-2 max-md:p-1.5 bg-yellow-100 border border-yellow-400`}
                >
                    {fruit || "❓"}
                </div>
            })}
        </div>
    );
}

export default FruitVisualizer