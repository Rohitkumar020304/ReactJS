import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")
  const [framecolor, setFrameColor] = useState("black")
  const [isFraemHidden, setIsFrameHidden] = useState(false)

  function toggleFrame(){
    if(isFraemHidden){
      setFrameColor("black");
    }
    else{
      setFrameColor(color);
    }
    setIsFrameHidden(!isFraemHidden);
  }

  function changeColor(newcolor){
    setColor(newcolor);
    if(isFraemHidden){
      setFrameColor(newcolor);
    }
  }

  return (
    <>

      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      ></div>
      <div className="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-nonoe px-3 py-2 rounded-xl"
        style={{backgroundColor: framecolor}}
        >
          <button
          onClick={() => changeColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => changeColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => changeColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => changeColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          
          <button
          onClick={() => changeColor("slategray")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "slategray"}}
          >Slategray</button>
          <button
          onClick={() => changeColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-gray shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => changeColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button
          onClick={() => changeColor("aquamarine")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "aquamarine"}}
          >Aquamarine</button>
          <button
          onClick={() => changeColor("cyan")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "cyan"}}
          >Cyan</button>
          <button
          onClick={() => changeColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >white</button>
          <button
          onClick={toggleFrame}
          className="outline-none px-4 py-1 rounded-full font-bold text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >{isFraemHidden ? "Show Frame" : "Hide Frame"}</button>

        </div>
      </div>
    </>
  )
}

export default App
