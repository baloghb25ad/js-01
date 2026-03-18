//alert("Hello, World!")


function gomb() {
    document.getElementById("szöveg").innerHTML = "Hello, World!";
}


function osszead() {
    var szam1 = parseFloat(document.getElementById("szam1").value);
    var szam1 = parseFloat(document.getElementById("szam2").value);
    var eredmeny = szam1 + szam2
    document.getElementById("eredmeny").innerHTML = eredmeny;
}