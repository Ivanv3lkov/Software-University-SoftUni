function stopwatch() {
    let seconds = 0;
    let minutes = 0;
    let t = null;
 
    let time = document.getElementById('time');
    let startbtn = document.getElementById('startBtn');
    let stopbtn = document.getElementById('stopBtn');
 
    startbtn.addEventListener('click', function() {
        seconds = '00';
        minutes = '00';
        time.textContent = `${minutes}:${seconds}`;
        t = setInterval(add, 1000);
        stopbtn.disabled = false;
        startbtn.disabled = true;
    });
 
    stopbtn.addEventListener('click', function() {
        stopbtn.disabled = true;
        startbtn.disabled = false;
        clearInterval(t);
    });
 
    function add() {
        seconds++;
        if (seconds < 10) {
            seconds = `0` + seconds;
        }
 
        if (seconds >= 60) {
            seconds = `0` + 0;
            minutes++;
            if (minutes < 10) {
                minutes = `0` + minutes;
            }
        }
        if (minutes === 0) {
            minutes = `0` + minutes;
        }
        time.textContent = `${minutes}:${seconds}`;
    }
}