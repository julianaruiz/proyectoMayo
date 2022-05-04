const horario = document.getElementById("horario");

for (let i = 0; i < 24; i++) {
    
    const contHora = document.createElement('div');
    contHora.className = "contHora";
    const hora = document.createElement('p');
    hora.className = "hora";
    horario.appendChild(contHora);
    contHora.appendChild(hora);
    contHora.dataset.id = i;

    let textoP;

    if (i<10) {
        textoP = "0" + i + ":00";
    }
    else{
        textoP = i + ":00";
    }

   const texto = document.createTextNode(textoP);
   hora.appendChild(texto);
}