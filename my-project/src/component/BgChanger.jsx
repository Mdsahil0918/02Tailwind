import {useState} from 'react';
const BgChanger=()=>
  {
  const [color,setColor]=useState("white")
  return (
<div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center w-full h-screen inset-x-0 bottom-12 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Color Buttons */}
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 shadow-lg text-black py-2 rounded-3xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 shadow-lg text-white py-2 rounded-3xl"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 shadow-lg text-black py-2 rounded-3xl"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  )}
  export default BgChanger;