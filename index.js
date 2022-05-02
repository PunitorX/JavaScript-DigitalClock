function showTime()
{
    let date = new Date();
    let minutes = date.getMinutes(); // for 0 - 59
    let hours = date.getHours(); // for 0 - 23
    let seconds = date.getSeconds(); // for 0 - 59
    let session = "AM";

    if(hours == 0)
    {
        hours = 12;
    }
    if(hours > 12)
    {
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + session;
    
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();