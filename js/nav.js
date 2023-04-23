let count = 0;
let it1 = document.getElementById("i1");
let it2 = document.getElementById("i2");
let it3 = document.getElementById("i3");
let it4 = document.getElementById("i4");
let it5 = document.getElementById("i5");
function func(){
    if (count == 0) {
        it1.style.display = "none";
        it2.style.display = "none";
        it3.style.display = "none";
        it4.style.display = "none";
        it5.style.display = "none";
        count++;
    }
    else {
        it1.style.display = "block";
        it2.style.display = "block";
        it3.style.display = "block";
        it4.style.display = "block";
        it5.style.display = "block";
        count--;
    }
}
