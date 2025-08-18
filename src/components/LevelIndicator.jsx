import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import useLevel from "../zustand/useLevel";
import LevelsModal from "./LevelsModal";


const LevelIndicator = () => {
    const { level } = useLevel();

    const toggleModal = () => {
        console.log("from level indicator");
        
        document.getElementById('levelsModal').classList.toggle('invisible');
    };

    return (
        <div className="relative flex flex-col items-center">
            <div className='font-semibold h-8 flex justify-center items-center cursor-pointer'>
                <span
                    className='bg-blue-300 hover:bg-[#9fcdff] h-8 flex justify-center items-center p-2 rounded-tl-xs rounded-bl-xs'
                >
                    <BiSolidLeftArrow />
                </span>
                <p
                    className='bg-blue-400 hover:bg-blue-300 h-8 w-[150px] flex justify-center border-x-1 border-gray-100 items-center p-2'
                    onClick={toggleModal}
                >
                    Level {level} of 15
                </p>
                <span
                    className='bg-blue-300 hover:bg-[#9fcdff] h-8 flex justify-center items-center p-2 rounded-tr-xs rounded-br-xs'
                >
                    <BiSolidRightArrow />
                </span>
            </div>
            <LevelsModal />
        </div>
    )
}

export default LevelIndicator