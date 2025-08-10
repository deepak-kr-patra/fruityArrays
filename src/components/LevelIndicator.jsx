import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from "../zustand/useLevel";

const LevelIndicator = () => {
    const { level } = useLevel();

    return (
        <div className='font-bold h-6 flex justify-center items-center'>
            <span className='bg-blue-300 h-8 flex justify-center items-center p-2 rounded-tl-xs rounded-bl-xs'><BiSolidLeftArrow /></span>
            <p className='bg-blue-400 h-8 flex justify-center items-center p-2'>Level {level} of 10</p>
            <span className='bg-blue-300 h-8 flex justify-center items-center p-2 rounded-tr-xs rounded-br-xs'><BiSolidRightArrow /></span>
        </div>
    )
}

export default LevelIndicator