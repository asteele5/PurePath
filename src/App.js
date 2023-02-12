import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { isFulfilled } from 'q';

const containerStyle = {
  width: '400px',
  height: '400px'
};



function sustainabilityScore({restaurant, walking, vegetarian}) {

  return walking + vegetarian;

}




function App() {

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [nearbyRestaurants, setNearbyRestaurants] = useState(null);
  const [nearbyWalkingRestaurants, setNearbyWalkingRestaurants] = useState(null);

  function Button({nearbyRestaurants, lat, long}) {

    let commuteTime = 30; //change based on user input

    let walkingNum = 87; //ask rohit

    let drivingNum = 804; //ask rohit

    

    let openNow = "false";

    let walking = true;
  

    function handleClick() {
  
      
      console.log("button clicked");

      let radius = commuteTime*drivingNum;

        axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location="+lat+"%2C"+long+"&radius="+radius+"&type=restaurant&opennow="+openNow+"&key=AIzaSyD_Mx8GV07MegosFOSpjyOjuQUu5QbV5Mw").then((response) => {
          setNearbyRestaurants(response.data);
        });

        // let next_page_token = nearbyRestaurants.next_page_token;

        // axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location=&next_page_token="+next_page_token+"&key=AIzaSyD_Mx8GV07MegosFOSpjyOjuQUu5QbV5Mw").then((response) => {
        //   setNearbyRestaurants(response.data);
        // }); 

        if(nearbyRestaurants != null){
          for(let i = 0; i < nearbyRestaurants.results.length; i++) {
            nearbyRestaurants.results[i]["walking"] = 0;
            // console.log("outside loop");
            console.log(nearbyRestaurants.results[i]);
          }
        }

      if (walking == true) {

        let radius = commuteTime*walkingNum;
        
        axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location="+lat+"%2C"+long+"&radius="+radius+"&type=restaurant&opennow="+openNow+"&key=AIzaSyD_Mx8GV07MegosFOSpjyOjuQUu5QbV5Mw").then((response) => {
          setNearbyWalkingRestaurants(response.data);
        });
        if(nearbyWalkingRestaurants != null){
          // console.log(nearbyRestaurants.results[0]);
          // console.log(nearbyRestaurants.next_page_token);
          for(let i = 0; i < nearbyWalkingRestaurants.results.length; i++) {
            
            if(nearbyRestaurants != null && nearbyRestaurants.results[i]['name'] === nearbyWalkingRestaurants.results[i]['name']) {
              console.log("inside loop");  
              nearbyRestaurants.results[i]["walking"] = 1;
                console.log(nearbyRestaurants.results[i]);
            }
            // console.log(nearbyRestaurants.results[i]);
          }
        }
          
      }

      

      }

      
      
      
      return <button onClick={handleClick}> Submit </button>;
  
  
    }
  
    
  

  
  
  


    

    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      // console.log("Latitude is :", lat);
      // console.log("Longitude is :", long);
    });

    const center = {
      lat: lat,
      lng: long
    };

    // const getAddressURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key=AIzaSyD_Mx8GV07MegosFOSpjyOjuQUu5QbV5Mw";

    // axios.get(getAddressURL).then((response) => {
    //   setCurrentAddress(response.data);
    // });

    // console.log(currentAddress);

    

    

    
      // console.log(nextPageToken);
      // nearbyRestaurants.forEach(element => console.log(element));

  

  
    
    // const restaurants = JSON.parse(nearbyRestaurants);
    // console.log(restaurants);


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
        <Button nearbyRestaurants={nearbyRestaurants} lat={lat} long={long}/>
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
