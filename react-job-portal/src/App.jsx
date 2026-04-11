import react from "react";
import TypesExample from "./buttonsjobportal";
import { useState } from "react";

function App(){
  const [search, setsearch] = useState("");

  const jobs= ["Teacher", "Developer", "Designer", "Manager"];
  

  return(
    <div class="search"> 
      <h1>Job Portal</h1>
      <p>Browse thousands of job opportunities</p>
      <input type="text" placeholder="Search Jobs" value={search} onChange={(e)=> setsearch(e.target.value)}/> <br /><br />
      <button onClick={()=> setsearch("")}>Search</button>
    </div>
  )
}

export default App;