document.addEventListener('keydown', function(event) {
    
    var code = event.keyCode; // проверяем код кнопки
    var plaseForCode = document.querySelector("#answer");
    plaseForCode.innerHTML = code;

});
