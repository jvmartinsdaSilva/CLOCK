const segsPointer = document.querySelector('.clocksegsPointer')
const timer = document.querySelector('.timer')

const clock = () => {
    HoursAndMinutes()
    rotateSegsPointer()
}

const HoursAndMinutes = () => {
    let allDates = new Date
    let Hours = allDates.getHours()
    let Minutes = allDates.getMinutes()
    if(Hours < 10){
        Hours = `0${Hours}`
    } else if(Minutes < 10){
        Minutes = `0${Minutes}`
    }
    timer.innerHTML = `${Hours}:${Minutes}`
}

const rotateSegsPointer = () => {
    let allDates = new Date
    let segs = allDates.getSeconds()
    let degs = segs * 6
    segsPointer.style.setProperty('--rotation', degs)
}

setInterval(clock,1000)