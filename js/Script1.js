window.addEventListener("load", () => {
  let long;
  let lat;
  let temp_degree = document.querySelector(".temp-degree");
  let temp_description = document.querySelector(".temp-description");
  let location_timezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = "https://cors-anywhere.herokuapp.com/";

      const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={5deada72678c08c3cd2ec4a8f0322797}`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
        });
    });
  } else {
    document.write("Doesnt work!");
  }
});
