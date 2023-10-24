function calcularTiempo() {
   
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

   
    let ampm = hora >= 12 ? "PM" : "AM";

    
    hora = (hora % 12) || 12;

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + ampm;
    let relojDigital = document.querySelector(".relojDigital");
    relojDigital.innerHTML = pantallaReloj;
}

// Método de JavaScript
setInterval(calcularTiempo, 1000);


const deg = 6;

/* vamos a crear constantes para guardar todo lo que pase ne el reloj*/
const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

setInterval(()=>{ /*esta funcion para que el reloj se actualize*/
    let tiempo = new Date();
// Calcula los ángulos de rotación para las manecillas de hora, minuto y segundo.
    let hr = tiempo.getHours()* 30;
    let min = tiempo.getMinutes()* deg;
    let seg = tiempo.getSeconds()* deg;
 /*funcion transform permite traer lo del css y permite moverlo y Aplica la rotación a los elementos HTML correspondientes */
 /*comilla alrevez alt 96*/
    hora.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg`;



})

/*permite traer lo del css y permite moverlo*/