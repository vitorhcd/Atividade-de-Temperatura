let resp = document.getElementById("resp")

function calc(){
    let calc = 0
    let temp = Number(document.getElementById("temp").value)

    calc = (temp * 9/5) + 32

    console.log(calc)
}