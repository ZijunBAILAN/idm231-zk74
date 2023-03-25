const zodiacData = {
    "Capricorn": {
        "date": "Dec. 21 — Jan. 21",
        "description": "Capricorn in Love is earthy and status-minded."
    },
    "Sagittarius": {
        "date": "Nov. 21 — Dec. 21",
        "description": "Sagittarius in Love is philosophical and feisty."
    },
    "Scorpio": {
        "date": "Oct. 21 — Nov. 21",
        "description": "Scorpio in Love is secretive and intense."
    },
    "Libra": {
        "date": "Sept. 21 — Oct. 21",
        "description": "Libra in Love is a natural sounding board, with striking clarity."
    },
    "Virgo": {
        "date": "Aug. 21 — Sept. 21",
        "description": "Virgo in Love is sincere and discriminating."
    },
    "Leo": {
        "date": "July 21 — Aug. 21",
        "description": "Leo in Love is regal and proud."
    },
    "Cancer": {
        "date": "June 21 — July 21",
        "description": "Cancer in Love is self-protective and nurturing."
    },
    "Gemini": {
        "date": "May 21 — June 21",
        "description": "Gemini in Love is playful and fun."
    },
    "Taurus": {
        "date": "April 21 — May 21",
        "description": "Taurus in Love is sensual and loyal."
    },
    "Aries": {
        "date": "March 21 — April 21",
        "description": "Aries in Love is a passionate fool."
    },
    "Pisces": {
        "date": "Feb. 21 — March 21",
        "description": "Pisces in Love is romantic and enchanting."
    },
    "Aquarius": {
        "date": "Jan. 21 — Feb. 21",
        "description": "Aquarius in Love is unconventional."
    }
}

window.onload = function(){
    // Add necessary events
    const date_input = document.querySelector("#date_input");
    date_input.addEventListener("change", query_zodiac);

    const signs = document.querySelectorAll(".sign");
    signs.forEach(sign => {
        sign.addEventListener('click', (event) => {
            document.querySelector(".zodiac-detail").style.visibility = 'visible';
            show_zodiac_detail(get_zodiac_from_link(event.target.src));
        });
        sign.addEventListener('mouseleave', () => {
            document.querySelector(".zodiac-detail").style.visibility = 'hidden';
        });
      })
}

// Query the corresponding zodiac by birth date
function query_zodiac(){
    const date_input = document.querySelector("#date_input");
    const date = new Date(date_input.value);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const zodiac = get_zodiac(month, day);
    const display_para = document.querySelector("#displya_para");
    display_para.innerHTML = "Your zodiac is " + zodiac + ".";
}

// Get zodiac from the image link
function get_zodiac_from_link(link){
    const i1 = link.lastIndexOf('/');
    const i2 = link.lastIndexOf('.');
    const zodiac =link.substr(i1+1, i2-i1-1);
    return zodiac;
}

// Show the zodiac detail
function show_zodiac_detail(zodiac){
    document.querySelector("#name").innerHTML = "Name: " + zodiac;
    document.querySelector("#date").innerHTML = "Date: " + zodiacData[zodiac]['date'];
    document.querySelector("#description").innerHTML = "Description: " + zodiacData[zodiac]['description'];
}
