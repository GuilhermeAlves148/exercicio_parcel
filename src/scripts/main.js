const dataAniversario = new Date("Feb 14, 2025 00:00:00");
const timestampAniversario = dataAniversario.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timestampAgora = agora.getTime();
    const distaciaAniversario = timestampAniversario - timestampAgora;

    diaMs = 1000 * 60 * 60 * 24;
    horaMs = 1000 * 60 * 60;
    minMs = 1000 * 60;

    const diasAniversario = Math.floor(distaciaAniversario / diaMs);
    const horasAniversario = Math.floor((distaciaAniversario % diaMs) / horaMs);
    const minsAniversario = Math.floor ((distaciaAniversario % horaMs) / minMs);
    const segsAniversario = Math.floor ((distaciaAniversario % minMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAniversario} d ${horasAniversario} h ${minsAniversario} m ${segsAniversario} s`;

    if (distaciaAniversario < 0) {
        clearInterval(contaHoras);
        document.getElementById('texto').innerHTML = 'Seu aniversário já passou.'
    }
}, 1000);