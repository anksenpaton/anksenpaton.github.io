

function windChill() {

    var wind;
    var temp;
    temp = 36;
    wind = 7;
    var chill;
    chill = Math.round((0.0817 * (3.71 * (Math.pow(wind, 0.5)) + 5.81 - 0.25 * wind) * (temp - 91.4) + 91.4));
 
    if (temp > 50) {
        chill = "N/A";
    }
    if (wind > 3) {
    }
    else {
        chill = "N/A";
    }
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("windchill").innerHTML = chill;
}