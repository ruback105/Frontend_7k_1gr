let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')


const api = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val){
    return (val - 273).toFixed(2)
}

    btn.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+api)
        .then(res => res.json())

        .then(data => {

            const nameval = data['name']
            const descrip = data['weather']['0']['description']
            const tempature = data['main']['temp']
            const wndspd = data['wind']['speed']

            city.innerHTML=`Laika apstākļi -  <span>${nameval}<span>`
            temp.innerHTML = `Temperatūra: <span>${ convertion(tempature)} °C</span>`
            description.innerHTML = `Laikapstākļi: <span>${descrip}<span>`
            wind.innerHTML = `Vēja ātrums: <span>${wndspd} km/h<span>`

        })

        .catch(err => alert('Nepareizs pilsētas nosaukums'))
    })
