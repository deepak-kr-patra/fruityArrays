import { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from "../zustand/useLevel";
import LevelsModal from "./LevelsModal";
import { getTotalLevels } from "../utils/levelsInfo";


const LevelIndicator = () => {
    const { level, setLevel, levelsCompleted } = useLevel();
    const totalLevels = getTotalLevels();

    const levelRef = useRef(null);

    const prevLevel = () => {
        if (level === 1) {
            return;
        }
        setLevel(level - 1);
    };

    const nextLevel = () => {
        if (level === totalLevels || level === levelsCompleted + 1) {
            return;
        }
        setLevel(level + 1);
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className='font-semibold h-8 max-md:h-6 max-md:text-sm flex justify-center items-center'>
                <button
                    className={`${level === 1 ? "opacity-50" : "hover:bg-[#9fcdff]"} bg-blue-300 h-full flex justify-center items-center p-2 max-md:p-1 rounded-tl-xs rounded-bl-xs cursor-pointer`}
                    onClick={prevLevel}
                >
                    <BiSolidLeftArrow />
                </button>
                <div
                    className='levelDiv hover:bg-blue-300 p-2 max-md:p-1'
                    ref={levelRef}
                >
                    Level {level} of {totalLevels}
                </div>
                <button
                    className={`${level === totalLevels || level === levelsCompleted + 1 ? "opacity-50" : "hover:bg-[#9fcdff]"} bg-blue-300 h-full flex justify-center items-center p-2 max-md:p-1 rounded-tr-xs rounded-br-xs cursor-pointer`}
                    onClick={nextLevel}
                >
                    <BiSolidRightArrow />
                </button>
            </div>
            <LevelsModal levelRef={levelRef} />
        </div>
    )
}

export default LevelIndicator