const Congratulations = () => {
    return (
        <section id="congratulationsPage" className="w-screen h-dvh p-12 bg-blue-100 ">
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
                    <button className="congratsBtn">Play Again</button>
                    <button className="congratsBtn">Back</button>
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