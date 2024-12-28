// Atualizando o relógio com base no fuso horário
document.getElementById('timezoneSelect').addEventListener('change', function() {
    updateClock();
});

// Atualizando o fundo com base na seleção do usuário
document.getElementById('backgroundSelect').addEventListener('change', function() {
    const selectedBackground = document.getElementById('backgroundSelect').value;
    if (selectedBackground) {
        document.body.style.backgroundImage = `url('${selectedBackground}')`;
    } else {
        // Se a seleção for vazia, definir o fundo padrão
        document.body.style.backgroundImage = `url('wallpapers/background1.jpg')`;
    }
});

// Função que atualiza o relógio
function updateClock() {
    const timezone = document.getElementById('timezoneSelect').value;
    const now = new Date();
    const options = {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    document.getElementById('clock').textContent = timeString;
}

// Definir fundo inicial ao carregar a página
document.body.style.backgroundImage = `url('wallpapers/background1.jpg')`;

// Atualizando o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();
