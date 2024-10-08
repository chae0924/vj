window.addEventListener('load',function(){
  // 햄버거버튼
const allMenubtn = document.querySelector("#hd_allmenu_bby");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen')
  })

  this.addEventListener('scroll', scrollTpos);

  function scrollTpos() {
    // console.log("Scroll position", this.scrollTop || window.scrollY);
    console.log("Scroll position", this.scrollTop || window.scrollY, window.innerHeight, typeof  window.innerHeight);
    const pagetop = this.scrollTop || window.scrollY; // 웹표준
    const targetscrolleffect = window.innerHeight /3; // 화면의 절반

    if (pagetop > targetscrolleffect) {
        document.body.classList.add('scrolldown');
    } else {
        document.body.classList.remove('scrolldown');
    }
}


});