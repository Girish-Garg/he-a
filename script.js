const lade = document.getElementById('loader');
setTimeout(() => {
    lade.style.transition = 'all 0.2'
    lade.style.opacity =0;
   
    document.getElementById('main').style.display = "block";
}, 7000);