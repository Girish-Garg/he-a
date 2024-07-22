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
    if (scrollTop > 3*height && scrollTop < 5*height){
        document.getElementById('main_anim').style.display = "none";
        document.getElementById('big_img').style.display = "block";
    }
    else if(scrollTop > 4*height){
        document.getElementById('main_anim').style.display = "none";
        document.getElementById('big_img').style.display = "none";
    }
    else if(scrollTop < 3*height){
        document.getElementById('main_anim').style.display = "block";
    }
});

Shery.mouseFollower({
  });
  Shery.makeMagnet("#e1oi2mnWSwv1" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });


