let titel; let content; let char;
function additembox(titel, content ,char) {
    return `
            <h2>${titel}</h2>
            <p>${content} <span>${char}</span></p>
    `
}
const Box_right = document.getElementsByClassName('right');
function addWeather() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=aleppo&appid=40a9d4936abb9652bb117ebbcae8514f&lang=ar&units=metric')
        .then((response) => {
            console.log(response);
            console.log(response.data.uvi);
            Box_right[0].innerHTML = additembox('Humidity', response.data.main.humidity,'%');
            Box_right[1].innerHTML = additembox('Wind', response.data.wind.speed ,'M/s');
            Box_right[2].innerHTML = additembox('Visibilty', (response.data.visibility)/1000,' Km');
            Box_right[3].innerHTML = additembox('Pressure', response.data.main.pressure , ' hpa');
        })
        .catch((error) => {
            console.error(error);
        });
}
addWeather();