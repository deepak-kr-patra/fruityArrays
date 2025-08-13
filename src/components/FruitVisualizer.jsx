import { useEffect, useRef, useState } from "react";
import useLevel from "../zustand/useLevel";


const ANIM_CLEAR_MS = 450; // make slightly longer than CSS animation

const FruitVisualizer = () => {

    const { fruits, level } = useLevel();

    // to not load anything until fruits array is having actual items
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (fruits.length > 0) setIsReady(true);
    }, [fruits]);

    // refs to hold previous values (persist across renders without causing rerenders)
    const prevFruitsRef = useRef([]);
    const prevLevelRef = useRef();

    // per-index flags: true => add `.animateArray` to that element
    const [animFlags, setAnimFlags] = useState(() => fruits.map(() => "animateArray"));

    useEffect(() => {
        const prevFruits = prevFruitsRef.current;
        const prevLevel = prevLevelRef.current;

        const levelChanged = prevLevel === undefined || level !== prevLevel;
        const filledFromEmpty = prevFruits.length === 0 && fruits.length > 0;

        let newAnimFlags;

        if (levelChanged || filledFromEmpty) {
            // const levelInfo = getLevelInfo(level);
            // console.log("level changed to: " + level);
            // setFruits(levelInfo.defaultFruits);
            // console.log("fruits: " + fruits.toString());

            // // first mount or new level -> animate everything
            // newAnimFlags = levelInfo.defaultFruits.map(() => "animateArray");

            newAnimFlags = fruits.map(() => "animateArray");
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
                // this current occurrence is an extra (i.e. new)
                return consumed[f] > prevCount ? "animateFruit" : "";
            });
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

        // update prev refs AFTER computing animation flags
        prevFruitsRef.current = fruits;
        prevLevelRef.current = level;

        return () => clearTimeout(t);
    }, [fruits]);

    // do not return anything to render until fruits array is non-empty
    if (!isReady) return null;

    return (
        <div className="fruitsSection w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded shadow min-h-[100px] h-full">
            {fruits.map((fruit, idx) => {
                return <div
                    key={`${level}-${idx}`}
                    className={`${animFlags[idx]} h-max text-3xl p-2 bg-yellow-100 rounded border border-yellow-400`}
                >
                    {fruit || "❓"}
                </div>
            })}
        </div>
    );
}

export default FruitVisualizer