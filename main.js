const URL = "https://worldtimeapi.org/api/timezone/UTC";
const LastUpdate =  "2024-10-23T03:16:04.988523+00:00";
var currentTime = " ";

async function getTime(){
    const result = await fetch(URL)
    result.json().then(data =>{
        currentTime = data.utc_datetime;
        const outputHTML = document.getElementById('DateUTC');
        outputHTML.innerHTML = "Current Time: " + currentTime + "<br>Last Update: " + LastUpdate;
    })
}
getTime();