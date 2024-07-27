let [millisegundos, segundos, minutos, horas] = [0, 0, 0, 0];
let cronometro = document.getElementById('numbers');
let tiempos;

document.getElementById('start').addEventListener('click', () =>{
    if(tiempos !== null){
        clearInterval(tiempos);
    }
    tiempos=setInterval(setTiempos,10);
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(tiempos);
});

document.getElementById('reboot').addEventListener('click', () => {
    clearInterval(tiempos);
    [millisegundos, segundos, minutos, horas] = [0, 0, 0, 0];
    cronometro.innerHTML = '00:00:00';
});

function setTiempos() {
    millisegundos += 10;
    if (millisegundos == 1000) {
        millisegundos = 0;
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos == 60) {
                minutos = 0;
                horas++;
            }
        }
    }
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;
    cronometro.innerHTML = `${h}:${m}:${s}`;
}