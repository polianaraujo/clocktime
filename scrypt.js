function updateClock() {
    const timezone = document.getElementById('timezoneSelect').value;
    const date = new Date().toLocaleString('en-US', { timeZone: timezone });

    const currentTime = new Date(date);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Função para formatar os dígitos
    const getDigits = (num) => [Math.floor(num / 10), num % 10];

    // Atualizando os dígitos do relógio
    const [hourTens, hourOnes] = getDigits(hours);
    const [minuteTens, minuteOnes] = getDigits(minutes);
    const [secondTens, secondOnes] = getDigits(seconds);

    updateDigit('hour-tens', hourTens);
    updateDigit('hour-ones', hourOnes);
    updateDigit('minute-tens', minuteTens);
    updateDigit('minute-ones', minuteOnes);
    updateDigit('second-tens', secondTens);
    updateDigit('second-ones', secondOnes);
}

function updateDigit(id, newValue) {
    const digitElement = document.getElementById(id);
    const top = digitElement.querySelector('.top');
    const bottom = digitElement.querySelector('.bottom');

    if (top.textContent !== newValue.toString()) {
        // Animação Flip
        const prevValue = top.textContent;
        const flipAnimation = document.createElement('div');
        flipAnimation.className = 'flip-animation';
        flipAnimation.innerHTML = `
            <div class="top">${prevValue}</div>
            <div class="bottom">${newValue}</div>
        `;

        digitElement.innerHTML = ''; // Limpa os dígitos antigos
        digitElement.appendChild(flipAnimation);

        setTimeout(() => {
            digitElement.innerHTML = `
                <div class="top">${newValue}</div>
                <div class="bottom">${newValue}</div>
            `;
        }, 500); // Duração da animação
    }
}

document.getElementById('timezoneSelect').addEventListener('change', updateClock);
document.getElementById('backgroundSelect').addEventListener('change', (e) => {
    document.body.className = `background-${e.target.selectedIndex}`;
});

setInterval(updateClock, 1000);
updateClock(); // Atualiza imediatamente ao carregar a página
