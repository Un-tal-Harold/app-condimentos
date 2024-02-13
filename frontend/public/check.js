const check_resibido = document.getElementById('check-resibido');
var estdoPedi = 'r';

//llego  falta 
check_resibido.addEventListener('click',()=>{
    switch (estdoPedi){
        case 'r'://Recibido
            check_resibido.style.backgroundColor = '#27AE60 ';
            check_resibido.innerText = 'Recibido';
            estdoPedi='p';
            break;
        case 'p'://falta
            check_resibido.style.backgroundColor = '#FF4141';
            check_resibido.innerText = 'Falta'
            estdoPedi='r'
            break;
    }
});