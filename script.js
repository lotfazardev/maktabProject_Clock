let change12to24Count = true ;
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
},100)
startApp()
function change12to24(){
    change12to24Count = !change12to24Count
}