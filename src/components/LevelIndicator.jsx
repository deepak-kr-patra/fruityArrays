import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from "../zustand/useLevel";

const LevelIndicator = () => {
    const { level } = useLevel();

    return (
        <div className='font-bold h-6 flex justify-center items-center'>
            <span className='bg-blue-300 h-6 flex justify-center items-center px-2'><BiSolidLeftArrow /></span>
            <p className='bg-blue-400 h-6 px-2'>Level {level} of 10</p>
            <span className='bg-blue-300 h-6 flex justify-center items-center px-2'><BiSolidRightArrow /></span>
        </div>
    )
}

export default LevelIndicator