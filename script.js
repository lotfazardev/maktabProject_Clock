let change12to24Count = true, startTime = new Date() , stopWachIntervaller , lapCount = 1 , isPaused = false , tmpDate ;
function milisecToClock(milisec = 0){
    let ans = [],tmp = 0, timeLine = [60*60*1000,60*1000,1000] ;
    for(let i of timeLine){
        tmp = 0
        while(milisec>i){
            milisec -= i
            tmp++
        }
        ans.push(tmp)
    }
    return ans ;
}
let startApp = setInterval(()=>{
    date = new Date()
    if(change12to24Count){
        document.getElementById("clock-value").innerText = [date.getHours(),date.getMinutes(),date.getSeconds()].join(":")
    }else{
        let tmp = [date.getHours()%12,date.getMinutes(),date.getSeconds()].join(":")
        if(date.getHours()>=12){
            tmp += " pm"
        }else{
            tmp += " am"
        }
        document.getElementById("clock-value").innerText = tmp
    }
},950)
// change 12 to 24 
function change12to24(){
    change12to24Count = !change12to24Count
}
// stop watch section //
function permission(){
    document.getElementById("btns-layout").style.display = "none"; 
    document.getElementById("btns-permission").style.display = "flex";
    document.getElementById("btns-permission").style.justifyContent = "center"
}
function back(){
    document.getElementById("btns-permission").style.display = "none";
    document.getElementById("btns-layout").style.display = "flex";
    document.getElementById("btns-layout").style.justifyContent = "center"
}
function stopWatch(addiction = 0){
    document.getElementById("btns-permission").style.display = "none";
    document.getElementById("btns-stopWatch").style.display = "flex";
    document.getElementById("btns-stopWatch").style.justifyContent = "center";
    clearInterval(startApp)
    startTime = new Date()
    stopWachIntervaller = setInterval(()=>{
        tmpDate = new Date() ;
        tmpDate -= startTime 
        tmpDate += addiction
        document.getElementById("clock-value").innerText = milisecToClock(tmpDate).join(":") ;
    },950);
}
function stop(){
    if(!isPaused){
        clearInterval(stopWachIntervaller)
        document.getElementById("stop").innerText = "Resume"
        isPaused = !isPaused
    }else{
        stopWatch(tmpDate)
        document.getElementById("stop").innerText = "Stop"
        isPaused = !isPaused
    } 
}
function restart(){
    clearInterval(stopWachIntervaller)
    stopWatch()
}
function lap(){
    clearInterval(stopWachIntervaller)
    console.log("lap "+lapCount+ ": " +document.getElementById("clock-value").innerText)
    lapCount++
    stopWatch()
}
// Under Construction
function timer(){
    alert("Under Construction")
}