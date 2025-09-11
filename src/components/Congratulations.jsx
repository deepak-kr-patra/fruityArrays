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

            <h2 className="message">
                {"CONGRATULATIONS".split('').map((ch, idx) => <span key={idx}>{ch}</span>)}
            </h2>

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