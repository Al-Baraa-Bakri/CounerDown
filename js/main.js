let myPs = document.querySelectorAll(".one p");
let mainFunction = () => {
    let fDate = new Date('november 17, 2021 04:24:00').getTime()
    let currentDate = new Date().getTime() 
    // console.log(fDate)
    // console.log(currentDate)
    let gap = fDate - currentDate;
    let second = 1000; 
    let minute = 60* second; 
    let hour = 60*minute; 
    let day = 24 * hour;
    let days = Math.floor(gap / day); 
    let hours = Math.floor((gap % day) / hour);
    let minutes = Math.floor((gap % hour) / minute);
    let seconds = Math.floor((gap % minute) / second);
    let temp = [days , hours , minutes , seconds];
    myPs.forEach((ele , index) => {
        ele.innerHTML = temp[index];
    })

}
setInterval(mainFunction , 1000)
