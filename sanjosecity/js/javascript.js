

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function getLastUpdateDate() {
    var timeNow = new Date();
    var dow = timeNow.getDay();
    var dowList = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"];
    var mon = timeNow.getMonth();
    var dom = timeNow.getDate();
    var monList = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
    var year = timeNow.getFullYear();

    var st = "xx";
    switch (dom) {
        case 1: st = "st";
            break;
        case 2: st = "nd";
            break;
        case 3: st = "rd";
            break;
        case 4: st = "th";
            break;
        case 5: st = "th";
            break;
        case 6: st = "th";
            break;
        case 7: st = "th";
            break;
        case 8: st = "th";
            break;
        case 9: st = "th";
            break;
        case 10: st = "th";
            break;
        case 11: st = "th";
            break;
        case 12: st = "th";
            break;
        case 13: st = "th";
            break;
        case 14: st = "th";
            break;
        case 15: st = "th";
            break;
        case 16: st = "th";
            break;
        case 17: st = "th";
            break;
        case 18: st = "th";
            break;
        case 19: st = "th";
            break;
        case 20: st = "th";
            break;
        case 21: st = "st";
            break;
        case 22: st = "nd";
            break;
        case 23: st = "rd";
            break;
        case 24: st = "th";
            break;
        case 25: st = "th";
            break;
        case 26: st = "th";
            break;
        case 27: st = "th";
            break;
        case 28: st = "th";
            break;
        case 29: st = "th";
            break;
        case 30: st = "th";
            break;
        case 31: st = "st";
            break;
        default: st = "th";
    };


    document.getElementById("updateDate").innerHTML = " "
        +
        dowList[dow]
        +
        ", "
        +
        monList[mon]
        +
        " "
        +
        dom
        +
        st
        +
        " "
        +
        year;



    function adjustRating(rating) {
        document.getElementById("ratingvalue").innerHTML = rating;
    }

    function selectResponse() {
        const s = document.querySelector('#selected')
        const sel = document.querySelector('#selectbrowser');
        s.style.display = "block";
        s.textContent = sel.value;

    }

}