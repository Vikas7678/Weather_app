// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

fetch("https://api.openweathermap.org/data/2.5/weather?lat=28.678238&lon=77.370642&appid=897d3af87f73d61400ef80d403fef902")
.then((response) => {return response.json();})
.then((data) => {
    console.log(data);
    addSkyDescriptionTag(data.weather[0].description)
    addIconTag(data.weather[0].icon)
    cityName(data.name)
    temprature(data.main.temp)
    humidity(data.main.humidity)
    wind(data.wind.speed)

})
.catch((error) => {console.log(error);})

const addSkyDescriptionTag = (data) => {
    data = data.toLowerCase();
    data = data.split(' ')
    
    for(let i = 0; i<data.length; i++){
        console.log(data);
        data[i] = data[i].charAt(0).toUpperCase()+data[i].slice(1)
    }
    data = data.join(' ')

    const skydiv = document.getElementsByClassName("sky")
    const p = document.createElement('p')

    p.setAttribute("class", "sky_info")
    p.appendChild(document.createTextNode(data))

    skydiv[0].appendChild(p)
}

const addIconTag = (data) => {
    const icondiv = document.getElementById('icon')
    const img = document.createElement('img')

    img.src = 'images/'+data+'.png'
    icondiv.appendChild(img)
}

const cityName = (data) => {
    const citydiv = document.getElementsByClassName('city_name')
    const p = document.createElement('p')

    p.appendChild(document.createTextNode(data))
    citydiv[0].appendChild(p)
}

const temprature = (data) => {
    data = data-273.15
    const p_temp = document.getElementById('temp')
    p_temp.appendChild(document.createTextNode(data.toFixed()))
    
}

const humidity = (data) => {
    const humid_div = document.getElementsByClassName('humidity')
    const p = document.createElement('p')
    p.appendChild(document.createTextNode(data+'%'))

    humid_div[0].appendChild(p)
}

const wind = (data) => {
    const div_wind = document.getElementsByClassName('wind')
    const p = document.createElement('p')
    p.append(document.createTextNode(`${data} m/sec`))

    div_wind[0].appendChild(p)
}