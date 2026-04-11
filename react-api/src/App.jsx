import React from "react";
import { useState } from "react";

function App(){
  const [place,setplace] =useState("");
  const [weather,setWeather] = useState(null);

 const getWeather =() =>
 {
  if(place){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&apikey=90d8f47b711ed66c2b85e760068a68db`)
    .then(response => response.json())
    .then(data => {
      setWeather(data);
  })
  .catch((err) => console.log("Error Fetching Weather ", err));
}
};
  return(
    <div style={{backgroundImage: "url('https://images.pexels.com/photos/734789/pexels-photo-734789.jpeg')", backgroundSize: "cover", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <div style={{backgroundColor: "white", backgroundSize: "cover", fontSize: "18px", fontWeight: "bold", margin: "20px", border: "1px solid lightblue", padding: "20px", borderRadius: "10px", height: "250px", width: "350px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <h2>Weather API</h2>
      
      <input type="text" placeholder="Enter the place" value={place} onChange={(e) => setplace(e.target.value)} /><br />

      <button onClick={getWeather}>Search</button><br />
      
      <p> Temperature : {`${weather?.main?.temp}°C`}</p>
      <p>Humidity: {`${weather?.main?.humidity}%`}</p>
      <p>Description: {`${weather?.weather?.[0]?.description}`}</p>
      </div>
    </div>
    );
  }
export default App;