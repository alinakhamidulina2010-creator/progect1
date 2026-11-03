
navigator.geolocation.getCurrentPosition(
    async (pos) => {
    const coordlat = pos.coords.latitude;
    const coordlon = pos.coords.longitude;
    console.log(coordlat, coordlon);
    try {

          const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordlat}&longitude=${coordlon}&current=temperature_2m,wind_speed_10m,pressure_msl,precipitation,relative_humidity_2m`);
          const data = await response.json();
          console.log(data.current.temperature_2m)
          let temp = document.querySelector('.todaydata')
          temp.innerHTML = data.current.temperature_2m
          
          let temp1 = document.querySelector('.todaydata1')
          temp1.innerHTML = data.current.temperature_2m
          
          console.log(data.current.wind_speed_10m,data.current.pressure_msl)
          
          let wind = document.querySelector('.wind')
          wind.innerHTML = data.current.wind_speed_10m
          let davlenie = document.querySelector('.davlenie')
          davlenie.innerHTML = data.current.pressure_msl
          let water = document.querySelector('.water')
          water.innerHTML = data.current.relative_humidity_2m
          let osadki = document.querySelector('.osadki')
          osadki.innerHTML = data.current.precipitation   

    }
    catch (error) {
        console.error("Ошибка:", error);
    }
},
(error) => {
  console.log("Ошибка :", error.message);
})


/*
const params = new URLSearchParams({
  latitude: "52.37125",
  longitude: "4.89388",
  current: "temperature_2m,pressure_msl"
});
const url = "https://api.open-meteo.com/v1/forecast";
const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.69&longitude=44.83&current=temperature_2m,wind_speed_10m,pressure_msl,precipitation,relative_humidity_2m`);
const data = await response.json();
console.log(data.current.temperature_2m)
let temp = document.querySelector('.todaydata')
temp.innerHTML = data.current.temperature_2m

let temp1 = document.querySelector('.todaydata1')
temp1.innerHTML = data.current.temperature_2m

console.log(data.current.wind_speed_10m,data.current.pressure_msl)

let wind = document.querySelector('.wind')
wind.innerHTML = data.current.wind_speed_10m
let davlenie = document.querySelector('.davlenie')
davlenie.innerHTML = data.current.pressure_msl
let water = document.querySelector('.water')
water.innerHTML = data.current.relative_humidity_2m
let osadki = document.querySelector('.osadki')
osadki.innerHTML = data.current.precipitation


*/


