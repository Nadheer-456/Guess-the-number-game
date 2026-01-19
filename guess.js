var input = document.getElementById("g")
var c = document.getElementById("crt")
var s = document.getElementById("sco")
var h = document.getElementById("hint")
var r = document.getElementById("restart")

var f = Math.floor(Math.random() * 10) + 1
console.log(f)

function check() {

    var i = input.value
    if (i == f) {
        c.textContent = "You are Correct"
        c.style.color = "green"
        h.textContent = "!"
        r.disabled = true
        alert("YOU WON!")
    }
    else if (i > 10 || i == 0) {
        c.textContent = "Enter a Number between 1 to 10"
        c.style.color = "white"
        h.textContent = ""
    }
    else {
        c.textContent = "You are wrong"
        var a = Number(s.textContent)
        c.style.color = "red"
        var b = a - 1
        console.log(b)
        s.textContent = b
        h.style.color = "green"

        if (i < f) {
            h.textContent = "(Too low)"
        }
        else if (i > f) {
            h.textContent = "(Too high)"
        }

    }
}
