const precio = 400000
let cantidad = 0

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const sumatoria = document.getElementById('sumatoria');
const valorTotal = document.getElementById('valor-total');



function sumarFunction () {
    cantidad ++;
    if(cantidad>0){
    cantidad ++;
    renderHTML()
}
    else if
    (cantidad<0) {
    alert ("canitdad debe ser mayor a 0")
   }
    }
  
    function restarFunction () {
        cantidad --;
    if (cantidad>0){
        cantidad --;
        renderHTML()
    }
    else if 
    (cantidad<0) {
        alert ("canitdad debe ser mayor a 0")
    }
   
    }

    function renderHTML() {
        sumatoria.innerHTML = cantidad;
        valorTotal.innerHTML =  `$ ${cantidad * precio}`;
    }
    console.log(valorTotal)
    sumar.addEventListener("click", sumarFunction);
    restar.addEventListener("click", restarFunction);
    renderHTML();



    