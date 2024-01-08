var crsr= document.querySelector("#cursor")
var shdw= document.querySelector("#shadow")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    shdw.style.left=dets.x-220+"px"
    shdw.style.top=dets.y-250+"px"
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration :1,
    height: "70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -12%",
        scrub:1
    }
})


gsap.to('#nav h4', {
    fontSize: '15px',
    scrollTrigger: {
      trigger: '#nav',
      scroller: 'body',
      start: 'top -10%',
      end: 'top -12%',
      scrub: 1,
    },
});


gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -85%",
        scrub:1
    }
})


const logoutButton = document.getElementById('hover-button');
const popup = document.querySelector('.popup');
const popupBox = document.querySelector('.popup-box');

logoutButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popupBox.querySelector('#cancel').addEventListener('click', () => {
    popup.style.display = 'none';
});