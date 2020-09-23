functon generate(){

    let complexity = document.getElementById("slider").value;

    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password= "";

    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastNums").innerHTML += password + "<br />";

}

document.getElementById("length").innerHTML = "Length: 25";

document.getElementById("slider").onInput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;   
    }
    else{
        document.getElementById("length"). innerHTML = "Length: 1";
    }

}

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("PWD copied to clipboard!");

}