let resp = document.getElementById("resp")
let resp2 = document.getElementById("resp2")

function calc(){
    let calc = 0
    let temp = Number(document.getElementById("temp").value)

    calc = (temp * 9/5) + 32

    resp.innerHTML = "Sua temperatura em Farenheit é = " + calc
}
function calc2(){
    let temp2 = Number(document.getElementById("temp2").value)
    let calc3 = 0

    calc3 = (temp2 - 32) * 5/9
    
    resp2.innerHTML = "Sua temperatura em Celsius é = " + calc3
 
}