let titel; let content; let char; let country;
let weather = document.getElementById('weather');
let hero = document.getElementById('hero-section');
let boxtext=document.getElementById('box-text');
function additembox(titel, content, char) {
    return `
            <h2>${titel}</h2>
            <p>${content} <span>${char}</span></p>
    `
}
function getcountry() {

    country = document.getElementById('inputsearch').value;
    getweather();
}


function getweather() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=40a9d4936abb9652bb117ebbcae8514f&lang=en&units=metric`)
        .then((response) => {
            console.log()
            hero.style.opacity = '0'
            weather.style.opacity = '0'
            boxtext.style.opacity='0'

            setTimeout(() => {

                hero.classList.add('active');
                hero.innerHTML = `<b>${response.data.name}
            <img src="imgs/location-pin.png" style="width: 40px; height: 40px; object-fit: cover;">
            </b>
              <h2>${Math.round(response.data.main.temp)}<sup>o</sup></h2>
                <p>${response.data.weather[0].description}
                <img src="https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png" alt="">
                </p>
                <h3> feels like  ${(response.data.main.feels_like).toFixed(1)}<sup>o</sup></h3>
             <h4 style="color:#fff;"> last update ${new Date((response.data.dt)*1000).getHours()+':'+new Date((response.data.dt)*1000).getMinutes()}</h4>
                
                <div class="boxsearch">
                    <input type="text" placeholder="search for a city" id="inputsearch">
                    <button id="btnsearch" onclick="getcountry()" ><img src="imgs/search.png" alt=""></button>
                </div>
            `
                weather.innerHTML = `
                <div class="box ">
                    <div class="left">
                        <img src="imgs/humidity.png" alt="">

                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>

                <div class="box ">
                    <div class="left">
                    <img src="imgs/pressure.png" alt="">

                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>

                <div class="box  lastbox">
                    <div class="left">
                        <img src="https://openweathermap.org/img/wn/01d.png" alt="">
                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>   

                
                

                <div class="box ">
                    <div class="left">
                        <img src="https://openweathermap.org/img/wn/02d.png" alt="">

                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>

                <div class="box ">
                    <div class="left">
                    <img src="imgs/wind.png" alt="">

                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>

                <div class="box  lastbox">
                    <div class="left">
                        <img src="imgs/visibility.png" alt="">
                    </div>

                    <div class="right">
                        <!-- add item box -->
                    </div>
                </div>      


            `;
             boxtext.innerHTML = `
                     <h2>more details:</h2>
                     `;
                const Box_right = document.getElementsByClassName('right');
                Box_right[0].innerHTML = additembox('Humidity', response.data.main.humidity, '%');
                Box_right[1].innerHTML = additembox('Pressure', response.data.main.pressure, ' hpa');
                Box_right[2].innerHTML = additembox('Sunrise', new Date(((response.data.sys.sunrise)*1000)).getHours()+':'+`${new Date((response.data.sys.sunrise)*1000).getMinutes()}`,'');
                Box_right[3].innerHTML = additembox('Sunset',new Date(((response.data.sys.sunset)*1000)).getHours()+':'+`${new Date((response.data.sys.sunset)*1000).getMinutes()}`,'');
                Box_right[4].innerHTML = additembox('Wind',response.data.wind.speed,' M/s');
                Box_right[5].innerHTML = additembox('Visibilty', ((response.data.visibility)/1000),'K/m');
                setTimeout(() => {
                    hero.style.opacity = '1';
                    weather.style.opacity = '1';
                    boxtext.style.opacity='1';
                   

                }, 500);
            }, 500);
        })
        .catch((error) => {
            if (country == null || country == '') {
                alert('ادخل اسم المدينة بشكل صحيح')
            }
            else {
                alert(error.message)
            }

        });
}

