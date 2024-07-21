const lade = document.getElementById('loader');
setTimeout(() => {
    lade.style.display = "none"
    document.getElementById('main').style.display = "block";
}, 7000);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const heroElement = document.getElementById('hero');
    const height = heroElement.getBoundingClientRect().height;
    console.log(height);
    console.log(scrollTop);
    if (scrollTop > 3*height){
        document.getElementById('main_anim').style.display = "none";
    }
    else if(scrollTop < 3*height){
        document.getElementById('main_anim').style.display = "block";
    }
});
