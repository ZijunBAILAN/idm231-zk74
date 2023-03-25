window.onload = function(){
    // Add necessary events
    const date_input = document.querySelector("#date_input");
    date_input.addEventListener("change", query_zodiac);
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
