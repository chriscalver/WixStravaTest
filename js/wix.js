var AccessCode = 0;

    fetch("https://www.strava.com/oauth/token?client_id=105639&client_secret=7189c307da8243d844c6baa42687e07b6bf2602f&refresh_token=12e9e2963c28b90e2c2da47839f26875c76952f1&grant_type=refresh_token", {
        "method": "POST",
        "headers": {
            
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);      
        
         AccessCode= response.access_token;


         //document.getElementById('box1').innerHTML = AccessCode;
         //$w("#text1").text = AccessCode;           
               
    })
    .then(response => {


        let newcode = "Bearer " + AccessCode;
            //$w("#text9").text = newcode;    















            //$w("#text9").text = newcode;    
            fetch("https://www.strava.com/api/v3/athlete/activities?per_page=10", {
                    "method": "GET",
                    "headers": {
                        "Authorization": newcode
                    }
                })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                


                    //document.getElementById('box12').innerHTML.rows = [];
                    //$w("#WeeklyActivitiesTable").rows = [];
                    for (let index = 0; index < response.length; index++) {   
        
                        const distanceraw = response[index].distance;
                        const distanceraw2 = distanceraw / 1000;
                        const newDistance = distanceraw2.toFixed(2) + " " + "km";
        
                        //myArray[index] = {"event": response[index].name, "distance": newDistance};
                                
                    }
                    


                    //$w("#WeeklyActivitiesTable").rows = myArray;
                    
                    //console.log(myArray);
                    
                    




                    function myFunction(raw) {
                        return raw *2;
                    }
        
                    const distanceraw = response[0].distance;
        
                    const distanceraw2 = distanceraw / 1000;
                    const newDistance = distanceraw2.toFixed(2);

                    document.getElementById('box9').innerHTML = newDistance + "km";
                    //$w("#DistanceData").text = newDistance + "km";
        
                    const movingtimeraw = response[0].moving_time;
                    const movingtimeraw2 = movingtimeraw / 60;
                    const movingtimetrimmed = Math.trunc(movingtimeraw2);
                    const movingtimedecimal = movingtimeraw2 - movingtimetrimmed;
                    const movingtimedecimal60 = movingtimedecimal * 60;
                    const movingtimedecimal60toseconds = movingtimedecimal60 / 100;
                    const movingtimedecimal60tosecondsrounded = movingtimedecimal60toseconds.toFixed(2);
                    const secondstrimmed = movingtimedecimal60tosecondsrounded.toString().slice(2);
                    const movingtime = movingtimetrimmed + movingtimedecimal60toseconds;
                    const movingtimefinal = movingtime.toFixed(2);


                    //$w("#MovingTimeData").text = movingtimetrimmed.toString() + " min" + "  " + secondstrimmed + " secs";
                     document.getElementById('box11').innerHTML = movingtimetrimmed.toString() + " min" + "  " + secondstrimmed + " secs";
                    
                    //$w("#ActivityNameData").text = response[0].name;
                    document.getElementById('box7').innerHTML = response[0].name;

                    
                    //$w("#ActivityTypeData").text = response[0].type;
                    document.getElementById('box6').innerHTML = response[0].type;

                    document.getElementById('box10').innerHTML = response[0].average_heartrate.toString();

                    //$w("#hrtext").text = response[0].average_heartrate.toString();
                })
                .catch(err => {
                    console.log(err);
                });
        


















































        fetch("https://www.strava.com/api/v3/athlete", {
        "method": "GET",
        "headers": {
            "Authorization": newcode
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);

        //$w("#AthleteName").text = response.firstname + " " + response.lastname;
        document.getElementById('box1').innerHTML = response.firstname + " " + response.lastname;

    })
    .catch(err => {
        console.log(err);
    });
          












    fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=42.98%2C-81.25", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": '78f85b7b41msh23461f7d0f97e63p1b3ddajsna0629e398be9'
        }
        })
    .then(response => response.json())
    .then(response => {
        console.log(response);
      //  console.log(response.content);
                //$w("#WeatherLocation").text = response.location.name + ", " + response.location.region;
                document.getElementById('box2').innerHTML = response.location.name + ", " + response.location.region;
                document.getElementById('box5').innerHTML = response.location.name + ", " + response.location.region;
                
                const icon = response.current.condition.icon;
               //document.getElementById('box5').innerHTML = "https:" + icon;

             
              document.getElementById('box13').src = "https:" + icon;
            // document.getElementById('box13').innerHTML.show();   
    
    
                document.getElementById('box3').innerHTML = response.current.temp_c.toString();
                document.getElementById('box4').innerHTML = response.current.condition.text;
    
       
    })
    .catch(err => {
        console.log(err);
    });































                           
    })
    .catch(err => {
        console.log(err);
    });





