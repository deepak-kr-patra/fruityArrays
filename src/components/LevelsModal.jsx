import useLevel from "../zustand/useLevel"

const LevelsModal = () => {
    const { level, setLevel, levelsCompleted } = useLevel();

    const handleLevelChange = (clickedLevel) => {
        if (clickedLevel > levelsCompleted + 1) {
            return;
        }
        setLevel(clickedLevel);
    };

    return (
        <div id="levelsModal" className="invisible absolute top-[38px] flex flex-col items-center">
            <div className="absolute w-8 h-8 bg-gray-700 rotate-45"></div>
            <div className="absolute top-1.5 bg-gray-700 levelsBox">
                <div className={`levelCircle ${level === 1 ? "active" : ""} ${levelsCompleted >= 1 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(1)}>1</div>
                <div className={`levelCircle ${level === 2 ? "active" : ""} ${levelsCompleted >= 2 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(2)}>2</div>
                <div className={`levelCircle ${level === 3 ? "active" : ""} ${levelsCompleted >= 3 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(3)}>3</div>
                <div className={`levelCircle ${level === 4 ? "active" : ""} ${levelsCompleted >= 4 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(4)}>4</div>
                <div className={`levelCircle ${level === 5 ? "active" : ""} ${levelsCompleted >= 5 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(5)}>5</div>
                <div className={`levelCircle ${level === 6 ? "active" : ""} ${levelsCompleted >= 6 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(6)}>6</div>
                <div className={`levelCircle ${level === 7 ? "active" : ""} ${levelsCompleted >= 7 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(7)}>7</div>
                <div className={`levelCircle ${level === 8 ? "active" : ""} ${levelsCompleted >= 8 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(8)}>8</div>
                <div className={`levelCircle ${level === 9 ? "active" : ""} ${levelsCompleted >= 9 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(9)}>9</div>
                <div className={`levelCircle ${level === 10 ? "active" : ""} ${levelsCompleted >= 10 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(10)}>10</div>
                <div className={`levelCircle ${level === 11 ? "active" : ""} ${levelsCompleted >= 11 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(11)}>11</div>
                <div className={`levelCircle ${level === 12 ? "active" : ""} ${levelsCompleted >= 12 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(12)}>12</div>
                <div className={`levelCircle ${level === 13 ? "active" : ""} ${levelsCompleted >= 13 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(13)}>13</div>
                <div className={`levelCircle ${level === 14 ? "active" : ""} ${levelsCompleted >= 14 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(14)}>14</div>
                <div className={`levelCircle ${level === 15 ? "active" : ""} ${levelsCompleted >= 15 ? "passedLevel" : ""}`} onClick={() => handleLevelChange(15)}>15</div>
            </div>
        </div>
    )
}

export default LevelsModal