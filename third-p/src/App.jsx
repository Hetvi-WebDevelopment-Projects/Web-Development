//import react from "react";
//function App()
//{
//let count=0
//function increase()
//{
  //count = count+1;
  //console.log(count)
//}
//return(
  //<div>
    //<h1>
      //This is React + vite
    //</h1>
    //<h2>
      //COunter : {count} 
    //</h2>
    //<button onClick= {increase}>Increase</button>
  //</div>
//)
//}

//export default App;

//import { useState } from "react";
//function App()
//{
//  const [likes, setlikes] = useState(10);
//  function increase()
//  {
//    setlikes(likes+1)
//    console.log(likes)
//  }
//  return(
//    <div>
//      <h2>Likes: {likes} </h2>
//      <button onClick={increase}>💝 likes</button>
//    </div>
//  )
//}
//export default App;

import { useState } from "react";
function App()
{
  const [show , setShow] = useState(false);
  return(
    <div>
      <input type={show ? "text" : "password" } placeholder="Enter your password"/>
    <button onClick={ ()=> setShow(!show) }>
      Show/Hide
    </button>
    </div>
  )
}

export default App;