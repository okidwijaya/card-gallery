const ButtonGroup = () => {
    return (
        <div className="flex gap-2 justify-center mt-12"> 
        {/* div className="h-96 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg p-10 w-1/2 m-auto flex justify-center items-center gap-3"> */}
            <button className="p-4 w-auto m-2 rounded-md bg-red-700">button one</button>
            <button className="p-4 w-auto m-2 rounded-md bg-purple-700">button two</button>
            <button className="p-4 w-auto m-2 rounded-md bg-green-800">button three</button>
            <button className="p-4 w-auto m-2 rounded-md bg-indigo-700">button four</button>
        </div>
    )
}
 
export default ButtonGroup;