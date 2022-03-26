var newYear = '2 Apr 2022';


function contDown() {
    var newYearDate = new Date(newYear);
    var currntDate = new Date();


    var totalSecounds = (newYearDate - currntDate) / 1000;
    var days = Math.floor(totalSecounds / 3600 / 24);
    var hours = Math.floor(totalSecounds / 3600 % 24);
    var min = Math.floor(totalSecounds / 60) % 60;
    var sec = Math.floor(totalSecounds % 60);

    function zero(time) {
        return time < 10 ? (`0${time}`) : time;
    }

    document.getElementById("st-days").innerHTML = zero(days + `:`);
    document.getElementById("st-hour").innerHTML = zero(hours + `:`);
    document.getElementById("st-min").innerHTML = zero(min + `:`);
    document.getElementById("st-sec").innerHTML = zero(sec);
}



setInterval(contDown, 1000)