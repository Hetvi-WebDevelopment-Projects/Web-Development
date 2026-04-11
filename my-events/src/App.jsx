//import react from "react";

//function App(){
//    return (
//      <div> 
//        <button onClick={handleClick} >Click me</button>
//      </div>
//    )
//}

//export default App;

//import { useState } from "react"

//function App(){
//  const [isFollowed, setIsFollowed] = useState(false);
//  return (
//    <div>
//      <button onClick={() => setIsFollowed(!isFollowed)}>
//        {isFollowed ? "Following" : "Follow"}
//      </button>
//    </div>
//  )
//}

//export default App;


/*import {useState} from "react";

function App(){

  const [text, settext] = useState("");
  return(
    <div>
      <input type="text" 
      placeholder="Search" 
      value={text} 
      onChange={(e)=> settext(e.target.value)}/>
      <h4>You Typed: {text}</h4>
    </div>
  )
}

export default App;*/

/*import { useState } from "react";

const[color, setcolor] = useState("white");
const[dark, setdark] = useState(false);

function App(){
  const[color, setcolor] = useState("white");
  const[dark, setdark] = useState(false);
  function handleClick(){
    setcolor("black");
    setdark(!dark);
  }
  return (
    <div style={background-color: color , height:'100vh'}>
      <button onClick={handleClick}>
        {dark ? "☀️" : "🌙"}
      </button>

    </div>
  )
}

export default App;*/

