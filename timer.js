const timer = () => {
    const yearCounter = document.querySelector(".year")
    const monthCounter = document.querySelector(".month")
    const dayCounter = document.querySelector(".day");
    const hourCounter = document.querySelector(".hour")
    const minuteCounter = document.querySelector(".minute")
    const secondCounter = document.querySelector(".second");
    const milliCounter = document.querySelector(".millisecond");

    let currentTime = new Date();
    let startedDating = new Date(2023, 6, 2, 17, 30, 0);
    let timeDiff = currentTime - startedDating;

    let yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    let monthsDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.4375));
    let daysDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24));
    let hoursDiff = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); 
    let secondsDiff = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let millisecondsDiff = Math.floor(timeDiff % 1000 / 1)

    yearCounter.innerHTML = yearsDiff;
    monthCounter.innerHTML = monthsDiff;
    dayCounter.innerHTML = daysDiff;
    hourCounter.innerHTML = hoursDiff;
    minuteCounter.innerHTML = minutesDiff;
    secondCounter.innerHTML = secondsDiff;
    milliCounter.innerHTML = millisecondsDiff
    
}

let updateTimer = setInterval(timer, 1)


