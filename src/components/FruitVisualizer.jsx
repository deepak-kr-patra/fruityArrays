import { useEffect, useRef, useState } from "react";
import useLevel from "../zustand/useLevel";
import { getLevelInfo } from "../utils/levelsInfo";
// import { getLevelInfo } from "../utils/levelsInfo";


const ANIM_CLEAR_MS = 450; // make slightly longer than CSS animation

const FruitVisualizer = () => {

    // const { level, fruits } = useLevel();

    // const prevFruitsRef = useRef([]);
    // const prevLevelRef = useRef(level);
    // const [animKeys, setAnimKeys] = useState([]);

    // useEffect(() => {
    //     let prevFruits = prevFruitsRef.current;
    //     const prevLevel = prevLevelRef.current;

    //     let newAnimKeys;

    //     if (level !== prevLevel) {
    //         newAnimKeys = fruits.map(() => true);
    //         prevFruits = getLevelInfo(level).defaultFruits;
    //     } else {
    //         console.log("prev: [" + prevFruits.toString() + "]");
    //         console.log("curr: [" + fruits.toString() + "]");

    //         // newAnimKeys = fruits.map((fruit, idx) => prevFruits[idx] !== fruit);
    //         newAnimKeys = fruits.map((fruit, idx) => {
    //             const wasHere = prevFruits.includes(fruit);
    //             return !wasHere;
    //         });

    //     }

    //     setAnimKeys(newAnimKeys);
    //     console.log(animKeys.toString());

    //     prevFruitsRef.current = fruits; // update reference
    //     prevLevelRef.current = level; // update reference
    // }, [fruits]);

    const { fruits, level, setFruits } = useLevel();

    // refs to hold previous values (persist across renders without causing rerenders)
    const prevFruitsRef = useRef([]);
    const prevLevelRef = useRef();

    // per-index flags: true => add `.animateArray` to that element
    const [animFlags, setAnimFlags] = useState(() => fruits.map(() => true));

    useEffect(() => {
        const prevFruits = prevFruitsRef.current;
        const prevLevel = prevLevelRef.current;

        let newAnimFlags;

        if (prevLevel === undefined || level !== prevLevel) {
            const levelInfo = getLevelInfo(level);
            console.log("level changed to: " + level);
            setFruits(levelInfo.defaultFruits);
            console.log("fruits: " + fruits.toString());

            // first mount or new level -> animate everything
            newAnimFlags = levelInfo.defaultFruits.map(() => true);
        } else {
            // same level -> mark only truly new occurrences
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
                return consumed[f] > prevCount;
            });
        }

        // Apply flags so render adds the class to newly changed indices
        setAnimFlags(newAnimFlags);

        // Clear flags after animation finishes so same item can animate again later
        let t;
        if (newAnimFlags.some(Boolean)) {
            t = setTimeout(() => {
                setAnimFlags((prev) => prev.map(() => false));
            }, ANIM_CLEAR_MS);
        }

        // update prev refs AFTER computing animation flags
        prevFruitsRef.current = fruits;
        prevLevelRef.current = level;

        return () => clearTimeout(t);
    }, [fruits]);

    // useEffect(() => {
    //     const newAnimFlags = fruits.map(() => true);
    //     console.log(newAnimFlags);

    //     // setAnimFlags(newAnimFlags);
    // }, [level]);

    return (
        <div className="fruitsSection w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded shadow min-h-[100px] h-full">
            {fruits.map((fruit, idx) => {
                return <div
                    key={`${level}-${idx}`}
                    className={`${animFlags[idx] ? 'animateArray' : ''} h-max text-3xl p-2 bg-yellow-100 rounded border border-yellow-400`}
                >
                    {fruit || "❓"}
                </div>
            })}
        </div>
    );
}

export default FruitVisualizer

// useEffect(() => {
//     const prevFruits = prevFruitsRef.current;
//     const prevLevel = prevLevelRef.current;

//     let newAnimKeys;

//     if (level !== prevLevel) {
//         newAnimKeys = fruits.map(() => true);
//     } else {
//         newAnimKeys = fruits.map((fruit, idx) => prevFruits[idx] !== fruit);
//     }

//     setAnimKeys(newAnimKeys);

//     prevFruitsRef.current = fruits;
//     prevLevelRef.current = level;

// }, [fruits, level]);


// useEffect(() => {
//     // const newAnimKeys = fruits.map(() => true);
//     // setAnimKeys(newAnimKeys);
//     const prevFruits = prevFruitsRef.current;
//     console.log("prev: [" + prevFruits.toString() + "]");
//     console.log("curr: [" + fruits.toString() + "]");
// }, [level]);