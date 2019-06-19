var button = document.getElementsByTagName('button');
button[0].onclick = calc;

function calc() {
    var h;

    var d = document.getElementById('1').value;
    var e = document.getElementById('2').value;
    var f = document.getElementById('3').value;
    var g = document.getElementById('4').value;
    var avg = (parseFloat(d) + parseFloat(e) + parseFloat(f) + parseFloat(g)) / 4;

    if (avg >= 75) {
        h = "Passed!";
    }
    if (avg <= 74) {
        h = "Failed!";
    }
    if (d && e && f && g) {
        document.getElementById('result').innerHTML = "The average is " + avg + " which means you have " + h;
    } else {
        document.getElementById('result').innerHTML = "Please fill all inputs first."
    }
}
