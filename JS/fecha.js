setInterval(() =>{
    const fecha_completa = document.getElementById("fecha"),
      hora_estado = document.getElementById("hora_estado"),
      hora_tiempo = document.getElementById("hora_tiempo");

const fecha = new Date();
let dias_semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(fecha.getDate())
let estado;
if(fecha.getHours()>=12){
    estado = "PM";
}
else{
    estado = "AM";
}
fecha_completa.textContent = `${dias_semana[fecha.getDay()] + " " + fecha.getDate() + " " + "de" + " " + meses[fecha.getMonth()] + " " + "del" + " " + fecha.getFullYear()}`;
hora_tiempo.textContent = `${fecha.toLocaleTimeString()}`;

}, 1000);