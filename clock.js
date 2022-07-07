const segsPointer = document.querySelector('.clocksegsPointer')
const timer = document.querySelector('.timer')

const clock = () => {
    HoursAndMinutes()
    rotateSegsPointer()
}

const HoursAndMinutes = () => {
    let allDates = new Date
    timer.innerHTML = `${allDates.getHours()}:${allDates.getMinutes()}`
}

const rotateSegsPointer = () => {
    let allDates = new Date
    let segs = allDates.getSeconds()
    let degs = segs * 6
    segsPointer.style.setProperty('--rotation', degs)
}

setInterval(clock,1000)