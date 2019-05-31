window.onload = function() {

    let startDate = new Date('May 27, 2019 12:00:00 +0000');
    let countdownDate = new Date('June 12, 2019 15:00:00 +0000');
    let totalTimeDif = countdownDate.getTime() - startDate.getTime();

    let days;
    let hours;
    let minutes;
    let seconds;

    let biteStartPositionNumber = 25;
    let biteEndPositionNumber = 66.4;
    let bitePositionDif = biteEndPositionNumber - biteStartPositionNumber;

    function setCountdownTimer() {
        let timeNow = new Date().getTime();
        let countdownTime = countdownDate.getTime() - timeNow;

        let countdownContainer = document.getElementsByClassName('countdown-labels-container')[0];
        let inStoreContainer = document.getElementsByClassName('time-over')[0];
        let activ5Text = document.getElementsByClassName('activ5-text')[0];

        if (countdownTime > 0) {
            countdownContainer.className = 'countdown-labels-container show';
            inStoreContainer.className = 'time-over';
            activ5Text.className = 'activ5-text';
            formatTimer(countdownTime);
    
            document.getElementById('day').innerHTML = days;
            document.getElementById('hour').innerHTML = hours;
            document.getElementById('minute').innerHTML = minutes;
            document.getElementById('second').innerHTML = seconds;
    
            let passedTime = timeNow - startDate.getTime();
            let passedTimePercent = (passedTime / totalTimeDif) * 100;
    
            let biteCurrentPosition = biteStartPositionNumber + bitePositionDif * (passedTimePercent / 100);
    
            document.getElementById('bite').style.transform = 'translate(' + biteCurrentPosition + '%, -100%)';
        } else {
            countdownContainer.className = 'countdown-labels-container';
            inStoreContainer.className = 'time-over show';
            activ5Text.className = 'activ5-text show';
        }
    }

    function formatTimer(countdownTime) {
        days = Math.floor( countdownTime / (1000 * 60 * 60 * 24) );
        hours = Math.floor( (countdownTime / (1000 * 60 * 60)) % 24 );
        minutes = Math.floor( (countdownTime / (1000 * 60)) % 60 );
        seconds = Math.floor((countdownTime / 1000) % 60);
    }

    setCountdownTimer();
    setInterval(setCountdownTimer, 1000);
}
