window.addEventListener('load',()=>{
   let long;
   let lat;
    let temp_degree = document.querySelector(".temp-degree");
    let temp_description = document.querySelector(".temp-description");
    let location_timezone = document.querySelector(".location-timezone");
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
       
        fetch(api).then(response =>{
            return response.json();
        }).then(data => {
                   console.log(data);
            
            const {temperature, summary} = data.currently;

            let F = temperature;
            let cel = 5/9*(F-32);
            temp_degree.innerHTML = Math.round(cel);
            temp_description.innerHTML = summary;
            location_timezone.innerHTML = data.timezone;
            
        })
        
        });
        
    }
    else{
        document.write("Doesnt work!");
    }
    
    
    
    
});