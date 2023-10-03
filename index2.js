let a ;
let b ;
let c ;
let d = "do nothing"

document.getElementById("myButton"),onclick = function() {
    a = document.getElementById("textA").value;
    a = Number(a);

    b = document.getElementById("textB").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))

    document.getElementById("cLabel").innerHTML = c;
}
