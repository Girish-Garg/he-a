Shery.mouseFollower({
});
Shery.makeMagnet("#e1oi2mnWSwv1", {
    mouseFollower: true,
    text: "scroll",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
Shery.makeMagnet(".img", {
    mouseFollower: true,
    text: "scroll",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
document.addEventListener('DOMContentLoaded', () => {
    const lade = document.getElementById('loader');
    setTimeout(() => {
        lade.style.display = "none"
        document.getElementById('main').style.display = "block";
    }, 5000);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const heroElement = document.getElementById('hero');
        const height = heroElement.getBoundingClientRect().height;
        console.log(height);
        const height2 = document.getElementById('Image_pin').getBoundingClientRect().height;
        console.log(scrollTop);
        if (scrollTop > 3 * height && scrollTop < (3 * height + height2 - 100)) {
            document.getElementById('main_anim').style.display = "none";
            document.getElementById('big_img').style.display = "block";
        }
        else if (scrollTop > (3 * height + height2 - 100)) {
            document.getElementById('main_anim').style.display = "none";
            document.getElementById('big_img').style.display = "none";
        }
        else if (scrollTop < 3 * height) {
            document.getElementById('main_anim').style.display = "block";
        }
    });

    const mouseFollower = document.querySelector('.mouse-follower');
    Shery.imageMasker("#img_half_1" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: false,
       
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    document.getElementById('img_half_1').addEventListener('mousemove', (e) => {
        var rect = document.getElementById('img_half_1').getBoundingClientRect();
        var x1 = e.clientX - rect.left;
        const x = e.clientX - rect.left - mouseFollower.clientWidth / 2;
        const y = e.clientY - rect.top - mouseFollower.clientHeight / 2;
        mouseFollower.style.transform = `translate(${x}px, ${y}px)`;
        mouseFollower.style.opacity = "1";
        if (x1 >= (rect.width) / 2) {
            mouseFollower.getElementsByTagName('p')[0].innerHTML = "→"
        }
        else {
            mouseFollower.getElementsByTagName('p')[0].innerHTML = "←"
        }
    })
    document.getElementById('img_half_1').addEventListener('mouseleave', (e) => {
        mouseFollower.style.opacity = "0";
    })
    // let nfirst = false;
    // let nlast = true;
    document.getElementById('img_half_1').addEventListener('mousemove', (e) => {

        var rect = document.getElementById('img_half_1').getBoundingClientRect();
        var x1 = e.clientX - rect.left;
        const x = e.clientX - rect.left - mouseFollower.clientWidth / 2;
        const y = e.clientY - rect.top - mouseFollower.clientHeight / 2;
        mouseFollower.style.transform = `translate(${x}px, ${y}px)`;
        mouseFollower.style.opacity = "1";
        if (x1 >= (rect.width) / 2) {
            mouseFollower.getElementsByTagName('p')[0].innerHTML = "→"
        }
        else {
            mouseFollower.getElementsByTagName('p')[0].innerHTML = "←"
        }

    })
    document.getElementById('img_half_1').addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-img'));
        document.getElementById(`circles${e.target.getAttribute('data-img')[1]}`).style.backgroundColor = "white"
        var rect = document.getElementById('img_half_1').getBoundingClientRect();
        var x1 = e.clientX - rect.left;
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`img_scroller_${i}`).style.transition = "all 1s ease"
        }
        if (x1 < (rect.width) / 2) {
            console.log(e.target.getAttribute('data-img') != "01");

            if (e.target.getAttribute('data-img') != "01") {
                let number = parseInt(e.target.getAttribute('data-img')[1]) - 1;
                console.log(number)
                document.getElementById('main_counter').innerText = `0${number}`
                console.log(`img_scroller_${number}`)
                document.getElementById(`circles${number}`).style.backgroundColor = "violet";

                document.getElementById(`img_scroller_${number}`).style.transform = "translateX(0%)";
            }
            else {
                document.getElementById(`img_scroller_1`).style.transform = "translateX(100%)";
                for (let i = 2; i <= 4; i++) {
                    setTimeout(() => {
                        document.getElementById(`img_scroller_${i}`).style.transform = "translateX(200%)";
                    }, i * 100);

                }
                document.getElementById(`circles5`).style.backgroundColor = "violet";
                document.getElementById('main_counter').innerText = `05`
            }
        }
        else {
            if (e.target.getAttribute('data-img') != "05") {
                let number = parseInt(e.target.getAttribute('data-img')[1]) + 1;
                document.getElementById('main_counter').innerText = `0${number}`;
                document.getElementById(`circles${number}`).style.backgroundColor = "violet";
                e.target.style.transform = "translateX(-100%)";
            }
            else {
                document.getElementById('main_counter').innerText = `01`
                for (let i = 4; i >= 1; i--) {
                    setTimeout(() => {
                        console.log(`img_scroller_${i}`)
                        document.getElementById(`img_scroller_${i}`).style.transform = "translateX(0%)";

                    }, (5 - i) * 100);
                }
                document.getElementById(`circles1`).style.backgroundColor = "violet";
            }

        }



    })
})
