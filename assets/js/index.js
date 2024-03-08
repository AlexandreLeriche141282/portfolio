const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});
// Arrow up
const faArrowUp = document.querySelector(".fa-arrow-up")
// // let arrowUp = document.querySelector(".arrowUp")
// const arrowUp = document.querySelector('.arrowUp');

// arrowUp.addEventListener('click', () => {

//     window.scrollTo({
//       Top:0
        
//     })
// console.log(arrowUp);
// })

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeff";
    faArrowUp.style.borderColor = "white"
    
    
    
  } else {
    document.body.style.background = "#fefeff";
    document.body.style.color = "#000101";
  faArrowUp.style.borderColor = "black"
  
    
  }
});


