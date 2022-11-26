const send = document.querySelector('#enviar')//captura el boton
const divTemp = document.querySelector('#temperatura')

send.addEventListener('click',consultaClima) //adicionar evento click

//se crea la funcion, esta no tiene nada.
//esta es una funcion de evento con formulario
function consultaClima(e){
    e.preventDefault()
    const city = document.querySelector('#ciudad').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69f255cc744a62baff43614fa0415751`
    //para hacer consultas en api se debe hacer un fetch

    const weather = fetch (url)
                        .then(response =>response.json())//se puede poner cualquier nombre pero lo normal es respose
                        .then(data =>mostrarTemperatura(data.main.temp))
}

function mostrarTemperatura(temp){
    const temperatura = document.createElement("h1")
    temperatura.innerText = `${Math.ceil (temp-272.15)}°C`
    divTemp.appendChild(temperatura)
}