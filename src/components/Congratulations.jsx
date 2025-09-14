import useGlobalStates from "../zustand/useGlobalStates";


const Congratulations = () => {
    const { setLevel, setLevelsCompleted, setLevelsResetUsed } = useGlobalStates();

    const resetGame = () => {
        setLevel(1);
        setLevelsCompleted(0);
        setLevelsResetUsed(true);

        localStorage.clear();

        goBack();
    };

    const goBack = () => {
        document.getElementById('congratulationsSection').classList.remove('showCongratsSection');
    };

    return (
        <section id="congratulationsSection" className="w-screen h-dvh p-12 bg-blue-100 ">
            <div className="w-screen overflow-hidden">
                <div className="flex w-[200%] fruitsBeltTop">
                    <div className="w-screen flex justify-around items-center track">
                        <p>🥭</p>
                        <p>🍉</p>
                        <p>🍎</p>
                        <p>🍇</p>
                        <p>🍐</p>
                        <p>🍓</p>
                        <p>🍌</p>
                    </div>
                    <div className="w-screen flex justify-around items-center track">
                        <p>🥭</p>
                        <p>🍉</p>
                        <p>🍎</p>
                        <p>🍇</p>
                        <p>🍐</p>
                        <p>🍓</p>
                        <p>🍌</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="message">
                    {"CONGRATULATIONS".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
                </h2>
                <div className="buttons flex gap-2">
                    <button onClick={resetGame} className="congratsBtn">Play Again</button>
                    <button onClick={goBack} className="congratsBtn">Back</button>
                </div>
            </div>

            <div className="w-screen overflow-hidden">
                <div className="flex w-[200%] fruitsBeltBottom">
                    <div className="w-screen flex justify-around items-center track">
                        <p>🍊</p>
                        <p>🍉</p>
                        <p>🍎</p>
                        <p>🥭</p>
                        <p>🍇</p>
                        <p>🍋</p>
                        <p>🍏</p>
                    </div>
                    <div className="w-screen flex justify-around items-center track">
                        <p>🍊</p>
                        <p>🍉</p>
                        <p>🍎</p>
                        <p>🥭</p>
                        <p>🍇</p>
                        <p>🍋</p>
                        <p>🍏</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Congratulations