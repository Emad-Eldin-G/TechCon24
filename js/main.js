
var on = document.getElementById("on");
var off = document.getElementById("off");
var nav = document.getElementById("nav");

try {
    var fullb = document.getElementById("full");
    var d1 = document.getElementById("d1");
    var d2 = document.getElementById("d2");
    var d3 = document.getElementById("d3");

    var t11 = document.getElementById("28-1");
    var t12 = document.getElementById("28-2");
    var t21 = document.getElementById("29-1");
    var t22 = document.getElementById("29-2");
    var t23 = document.getElementById("29-3");
    var t31 = document.getElementById("30-1");

    fullb.addEventListener("click", function() {
        t11.style.display = "";
        t12.style.display = "";
        t21.style.display = "";
        t22.style.display = "";
        t23.style.display = "";
        t31.style.display = "";
    });
    
    d1.addEventListener("click", function() {
        t11.style.display = "";
        t12.style.display = "";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t31.style.display = "none";
    })
    
    d2.addEventListener("click", function() {
        t11.style.display = "none";
        t12.style.display = "none";
        t21.style.display = "";
        t22.style.display = "";
        t23.style.display = "";
        t31.style.display = "none";
    })
    
    d3.addEventListener("click", function() {
        t11.style.display = "none";
        t12.style.display = "none";
        t21.style.display = "none";
        t22.style.display = "none";
        t23.style.display = "none";
        t31.style.display = "";
    })
} catch (e) {

}

on.addEventListener("click", function() {
    on.style.display = "none";
    nav.style.display = "flex";
    off.style.display = "block";
});

off.addEventListener("click", function() {
    off.style.display = "none";
    nav.style.display = "none";
    on.style.display = "block";
});

try {
    function Mail() {
        var form = document.getElementById("form-reg");
        try { 
            var thanks = document.getElementById("thanks");
        } 
        catch (e) {}
        form.style.display = "none";
        thanks.style.display = "flex";
    }
} catch (e) {}

function send() {
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    
    window.location.href = `mailto:johndoe@gmail.com?subject=${subject}&body=${body}`;
    console.log("sent");
}