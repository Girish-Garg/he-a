const lade = document.getElementById('loader');
// setTimeout(() => {
//     lade.style.display = "none"
//     document.getElementById('main').style.display = "block";
// }, 7000);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const heroElement = document.getElementById('hero');
    const height = heroElement.getBoundingClientRect().height;
    console.log(height);
    const height2 = document.getElementById('Image_pin').getBoundingClientRect().height;
    console.log(scrollTop);
    if (scrollTop > 3 * height && scrollTop < (3 * height + height2 - 20)) {
        // document.getElementById('main_anim').style.display = "none";
        document.getElementById('big_img').style.display = "block";
    }
    else if (scrollTop > (3 * height + height2 - 20)) {
        // document.getElementById('main_anim').style.display = "none";
        document.getElementById('big_img').style.display = "none";
    }
    else if (scrollTop < 3 * height) {
        // document.getElementById('main_anim').style.display = "block";
    }
});

Shery.mouseFollower({
  });
Shery.makeMagnet("#e1oi2mnWSwv1", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
//   let sherym = {
//     mouseFollower: true,
//     text: "→",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// }
//   Shery.imageMasker("#img_half_1",sherym);
//   function updateText(newText) {
//     sherym.text = newText;
//   }
const mouseFollower = document.querySelector('.mouse-follower');

document.addEventListener('mousemove', (e) => {
    // Update the position of the circular element
    

});
// document.getElementById('img_scroller').addEventListener('mouseenter', (e) => {
//     mouseFollower.style.opacity = "1"; // Add the class when mouse enters
// });

// document.getElementById('img_scroller').addEventListener('mouseleave', (e) => {
//     mouseFollower.style.opacity = "0";// Remove the class when mouse leaves
// });

// Example usage:
document.getElementById('img_half_1').addEventListener('mousemove', (e) => {
    var rect = document.getElementById('img_half_1').getBoundingClientRect();
    var x1 = e.clientX - rect.left;
    const x = e.clientX - rect.left - mouseFollower.clientWidth / 2 ;
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
// Shery.imageMasker(".img", {
    
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
// });
Shery.makeMagnet(".img", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});