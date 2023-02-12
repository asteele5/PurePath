import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};


function Button() {
  const [name, setName] = useState("Click Me");

  function handleClick() {
    console.log("button clicked");

    setName("Thank you!");

  }

  return <button onClick={handleClick}> {name} </button>;
}



function App() {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is :", lat);
      console.log("Longitude is :", long);
    });

    const center = {
      lat: lat,
      lng: long
    };


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is me testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={getLocation}>Get Location </button> */}
        <Button />
      {/* </header> */} 
      <LoadScript
        googleMapsApiKey="AIzaSyD_Mx8GV07MegosFOSpjyOjuQUu5QbV5Mw"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
