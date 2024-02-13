const bot_cerrar  = document.getElementById('cerrar');
const cont_operacion = document.getElementById('cont-operacion');
let on= 'off';

bot_cerrar.addEventListener('click',()=>{
    if (on == 'off'){
        cont_operacion.style.display = 'flex';
        return on= 'on';
    }else if(on == 'on'){
        cont_operacion.style.display = 'none';
        return on='off';
    }
})