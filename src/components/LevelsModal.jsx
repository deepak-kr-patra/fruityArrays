import { useEffect, useRef } from "react";
import useLevel from "../zustand/useLevel"
import { getTotalLevels } from "../utils/levelsInfo";


const LevelsModal = ({ levelRef }) => {
    const { level, setLevel, levelsCompleted } = useLevel();
    const totalLevsls = getTotalLevels();

    const modalRef = useRef(null);

    const handleOutsideClick = () => {
        const levelsModal = document.getElementById('levelsModal');
        if (!levelsModal.classList.contains('invisible')) {
            levelsModal.classList.add('invisible');
        }
    };

    useEffect(() => {
        const checkClickPosition = (e) => {
            // if level indicator is clicked
            if (levelRef.current && levelRef.current.contains(e.target)) {
                const levelsModal = document.getElementById('levelsModal');
                levelsModal.classList.toggle('invisible');
                return;
            }
            // if outside of levels modal is clicked
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleOutsideClick();
            }
        };

        document.addEventListener('mousedown', checkClickPosition);

        return () => document.removeEventListener('mousedown', checkClickPosition);
    }, []);

    const handleLevelChange = (clickedLevel) => {
        if (clickedLevel > levelsCompleted + 1) {
            return;
        }
        setLevel(clickedLevel);
        const levelsModal = document.getElementById('levelsModal');
        levelsModal.classList.add('invisible');
    };

    return (
        <div id="levelsModal" ref={modalRef} className="invisible absolute top-[38px] flex flex-col items-center">
            <div className="absolute w-8 h-8 bg-gray-700 rotate-45"></div>
            <div className="absolute top-1.5 bg-gray-700 levelsBox">
                {Array.from({ length: totalLevsls }, (_, index) => index + 1).map((lev, idx) =>
                    <div
                        key={idx}
                        className={`levelCircle ${level === lev ? "active" : ""} ${levelsCompleted >= lev ? "passedLevel" : ""}`}
                        onClick={() => handleLevelChange(lev)}
                    >
                        {lev}
                    </div>
                )}
            </div>
        </div>
    )
}

export default LevelsModal