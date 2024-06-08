import { useState } from "react"


const BgChanger = () => {
    const [color, setColor] = useState("blue")
    return (
        <div className="h-screen w-full justify-center" style={{ backgroundColor: color }}>

            <div className=" fixed bottom-48 flex justify-center  px-2 gap-6 inset-x-0">
                <div className="bg-white rounded rounded-lg px-4 py-4 flex gap-5">
                <button onClick={() => setColor("red")} className="p-4 bg-red-600 cursor-pointer rounded-r-md gap-3">
                    red</button>
                <button onClick={() => setColor("blue")} className="p-4 bg-blue-600 cursor-pointer rounded-r-md gap-3">blue</button>
                <button onClick={() => setColor("green")} className="p-4 bg-green-600 cursor-pointer rounded-r-md gap-3">green</button>
                <button onClick={() => setColor("yellow")} className="p-4 bg-yellow-600 cursor-pointer rounded-r-md gap-3">yellow</button>
                <button onClick={() => setColor("pink")} className="p-4 bg-pink-600 cursor-pointer rounded-r-md gap-3">pink</button>
                <button onClick={() => setColor("orange")} className="p-4 bg-orange-600 cursor-pointer rounded-r-md gap-3">orange</button>
                <button onClick={() => setColor("violet")} className="p-4 bg-violet-600 cursor-pointer rounded-r-md gap-3">violet</button>
                </div>
            </div>
        </div>

    )
}

export default BgChanger