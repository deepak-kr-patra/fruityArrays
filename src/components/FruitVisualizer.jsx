import useLevel from "../zustand/useLevel";

const FruitVisualizer = ({}) => {
    const { fruits } = useLevel();

    return (
        <div className="w-full flex flex-wrap justify-center gap-2 bg-white p-4 rounded shadow min-h-[100px] h-full">
            {fruits.map((fruit, idx) => (
                <div
                    key={idx}
                    className="h-max text-3xl p-3 bg-yellow-100 rounded border border-yellow-400"
                >
                    {fruit}
                </div>
            ))}
        </div>
    );
}

export default FruitVisualizer