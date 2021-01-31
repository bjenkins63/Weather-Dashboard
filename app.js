$(document).ready(function () {

    var button = document.querySelector('.button')
    var inputValue = document.querySelector('.inputValue')
    var name = document.querySelector('.name')
    var desc = document.querySelector('.desc')
    var temp = document.querySelector('.temp')

    newFunction(inputValue, button, name, temp, desc);




});

button.addEventListener('click',function(){
    fetch('https//api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=ba2a06e48d754582fb2a293987aa4f29')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            _name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
            })

    });

