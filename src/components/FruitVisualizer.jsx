import { useEffect, useState } from "react";
import useLevel from "../zustand/useLevel";

const FruitVisualizer = () => {
    const { level, fruits } = useLevel();
    const [animSeed, setAnimSeed] = useState(Date.now());

    useEffect(() => {
        setAnimSeed(Date.now());
    }, [level]);

    // useLayoutEffect(() => {
    //     const fruitDivs = document.querySelectorAll('.fruitsSection > div');

    //     fruitDivs.forEach(fruitDiv => {
    //         fruitDiv.classList.remove('animateArray');

    //         // Force a reflow to make the browser see it as a "new" animation
    //         void fruitDiv.offsetWidth;

    //         fruitDiv.classList.add('animateArray');
    //     });
    // }, [level]);

    return (
        <div className="fruitsSection w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded shadow min-h-[100px] h-full">
            {fruits.map((fruit, idx) => (
                <div
                    key={`${animSeed}-${idx}`}
                    className="animateArray h-max text-3xl p-2 bg-yellow-100 rounded border border-yellow-400"
                >
                    {fruit || "❓"}
                </div>
            ))}
        </div>
    );
}

export default FruitVisualizer