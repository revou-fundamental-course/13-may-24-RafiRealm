function switchPage() {
    var currentPage = window.location.href; 
    if (currentPage.includes("index2.html")) {
    
        window.location.href = "index.html";
    } 
    
    else {
        
        window.location.href = "index2.html";
    }
}

function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    var luas = (alas * tinggi) / 2

    document.getElementById("hasil").innerHTML = "L =" +luas;
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);

    var keliling = sisi1 + sisi2 + sisi3

    document.getElementById("hasilK").innerHTML = "K = " +keliling;
}