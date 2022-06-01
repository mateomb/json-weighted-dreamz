// Script to open and close Navigation / Sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Forces the user to make a custom blanket - done in order to make the site feel more "legitimate"
function outOfStock() {
    alert("All our blankets have been sold out, try making a custom one! We apologize for the inconvenience.");
}
// Used by the Modal Image Galery located at the start of the page 
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}