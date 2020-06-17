const tel = document.querySelector('#tel'),
    buttonGet = document.querySelector('.button_get');

buttonGet.addEventListener('click', function (event){
    event.preventDefault();
    if (tel.value == ""){
        alert('Пожалуйста, введите номер телефона');
    }
    else {
        alert('Спасибо!!! Скоро Вы получите что-то офигенное');
    }

});