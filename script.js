document.getElementById('timezoneSelect').addEventListener('change', function() {
    updateClock();
});

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

setInterval(updateClock, 1000);
updateClock();
