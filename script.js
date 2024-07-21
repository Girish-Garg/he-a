const lade = document.getElementById('loader');
setTimeout(() => {
    lade.style.display = "none"
    document.getElementById('main').style.display = "block";
}, 7000);