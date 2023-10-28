const precio = document.querySelectorAll('.precios');
const descuento = document.querySelectorAll('.descuentos');
const ancho = window.innerWidth;



if(ancho < 280) {
    for(let i = 0; i < precio.length; i++){
        precio[i].classList.add('diez');
    }
    for(let i = 0; i < descuento.length; i++){
        descuento[i].classList.add('diez');
    }
}
else if(ancho > 280 && ancho < 306) {
    for(let i = 0; i < precio.length; i++){
        precio[i].classList.remove('diez');
        precio[i].classList.add('trece');
    }
    for(let i = 0; i < descuento.length; i++){
        descuento[i].classList.remove('diez');
        descuento[i].classList.add('trece');
    }
}
else if(ancho > 306 && ancho < 336) {
    for(let i = 0; i < precio.length; i++){
        precio[i].classList.remove('trece');
        precio[i].classList.add('catorce');
    }
    for(let i = 0; i < descuento.length; i++){
        descuento[i].classList.remove('trece');
        descuento[i].classList.add('catorce');
    }
}
else if(ancho > 336 && ancho < 360) {
    for(let i = 0; i < precio.length; i++){
        precio[i].classList.remove('catorce');
        precio[i].classList.add('quince');
    }
    for(let i = 0; i < descuento.length; i++){
        descuento[i].classList.remove('catorce');
        descuento[i].classList.add('quince');
    }
}
else if(ancho > 360) {
    for(let i = 0; i < precio.length; i++){
        precio[i].classList.remove('quince');
        precio[i].classList.add('normal');
    }
    for(let i = 0; i < descuento.length; i++){
        descuento[i].classList.remove('quince');
        descuento[i].classList.add('normal');
    }
}