
function animateOnScroll(){
  let target = document.querySelectorAll(".fade-in");
  target.forEach(i=>{
    let targetTop = i.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (targetTop <= windowHeight * 0.40) {
      i.classList.add("appear");
    }
     else if (targetTop >= windowHeight*0.10) {
       i.classList.remove("appear");
     }
  })
}

window.addEventListener('scroll', animateOnScroll)
