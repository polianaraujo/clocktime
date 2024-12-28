function updateClock() {
    const timezone = document.getElementById('timezoneSelect').value;
    const date = new Date().toLocaleString('en-US', { timeZone: timezone });

    const currentTime = new Date(date);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Função para formatar números como dois dígitos
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    const hourTens = Math.floor(hours / 10);
    const hourOnes = hours % 10;
    const minuteTens = Math.floor(minutes / 10);
    const minuteOnes = minutes % 10;
    const secondTens = Math.floor(seconds / 10);
    const secondOnes = seconds % 10;

    // Atualizando os elementos de hora, minuto e segundo
    updateDigit('hour-tens', hourTens);
    updateDigit('hour-ones', hourOnes);
    updateDigit('minute-tens', minuteTens);
    updateDigit('minute-ones', minuteOnes);
    updateDigit('second-tens', secondTens);
    updateDigit('second-ones', secondOnes);
}

function updateDigit(id, value) {
    const digitElement = document.getElementById(id);
    const top = digitElement.querySelector('.top');
    const bottom = digitElement.querySelector('.bottom');

    if (top.textContent !== value.toString()) {
        top.classList.add('flip');
        bottom.classList.add('flip');
        top.textContent = value;
        bottom.textContent = value;
    }
}

document.getElementById('timezoneSelect').addEventListener('change', updateClock);
document.getElementById('backgroundSelect').addEventListener('change', (e) => {
    document.body.className = `background-${e.target.selectedIndex}`;
});

setInterval(updateClock, 1000);
updateClock(); // Atualiza imediatamente ao carregar a página
