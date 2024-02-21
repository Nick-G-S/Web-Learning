function updateClock(){

    const now = new Date();

    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secounds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${secounds}${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

function updateMilitary(){
    const now = new Date();

    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const secounds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${secounds}`;
    document.getElementById("clockMilitary").textContent = timeString;
}

setInterval(updateClock, 1000);
setInterval(updateMilitary, 1000);