

let userName;
document.getElementById('mybutton').onclick = function(){
    userName = document.getElementById("username").value;
    console.log(userName);
    document.getElementById("mylabel").innerHTML = userName;
}
















