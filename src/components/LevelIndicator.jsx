import { useRef } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from "../zustand/useLevel";
import LevelsModal from "./LevelsModal";


const LevelIndicator = () => {
    const { level, setLevel, levelsCompleted } = useLevel();

    const levelRef = useRef(null);

    const prevLevel = () => {
        if (level === 1) {
            return;
        }
        setLevel(level - 1);
    };

    const nextLevel = () => {
        if (level === 15 || level === levelsCompleted + 1) {
            return;
        }
        setLevel(level + 1);
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className='font-semibold h-8 flex justify-center items-center'>
                <button
                    className={`${level === 1 ? "opacity-50" : "hover:bg-[#9fcdff]"} bg-blue-300 h-8 flex justify-center items-center p-2 rounded-tl-xs rounded-bl-xs cursor-pointer`}
                    onClick={prevLevel}
                >
                    <BiSolidLeftArrow />
                </button>
                <div
                    className='bg-blue-400 hover:bg-blue-300 h-8 w-[150px] flex justify-center border-x-1 border-gray-100 items-center p-2 cursor-pointer'
                    ref={levelRef}
                >
                    Level {level} of 15
                </div>
                <button
                    className={`${level === 15 || level === levelsCompleted + 1 ? "opacity-50" : "hover:bg-[#9fcdff]"} bg-blue-300 h-8 flex justify-center items-center p-2 rounded-tr-xs rounded-br-xs cursor-pointer`}
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