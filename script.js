const turnOnLight = document.getElementById ("turnOnLight");
const turnOffLight = document.getElementById ("turnOffLight");
const lamp = document.getElementById ("lamp");

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if (!isLampBroken ()) {
        lamp.src = './img/lampada-ligada.jpg'
    }
    
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './img/lampada-apagada.jpg';
}
}

function lampBroken (){
    lamp.src = './img/lampada-quebrada.jpg';
}


turnOnLight.addEventListener ('click', lampOn);
turnOffLight.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);