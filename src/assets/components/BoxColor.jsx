


const BoxColor = ({ handleColor, color }) => {
    const handleChange = (e) => {
        handleColor(e)
    }
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col">
            <div className="w-[300px] h-[300px] border border-slate-500 " style={{ backgroundColor: color }}></div>

            <input type="text"
                className="border border-slate-950 max-w-screen-sm p-4 mt-4"
                value={color}
                onChange={handleChange}
            />
        </div>
    )
}

export default BoxColor