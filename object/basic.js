window.addEventListener('load',function(){
  const allMenubtn = document.querySelector("#hd_allmenu_bby");
  allMenubtn.addEventListener('click', function(){
    document.body.classList.toggle('menuOpen')
  })
  



  //여기서
  // const Menufirst = this.document.mynavi.title[1];
  // const Menufirst = this.document.querySelector("#navi>ul>li>a");
  // Menufirst.innerHTML="ccc"
  // this.document.querySelector("#navi>ul>li>a").innerHTML += "cc";
  // this.document.querySelectorAll("#navi>ul>li>a")[1].innerHTML += "ccccc";

  for(x in mynavi){
  this.document.querySelectorAll("#navi>ul")[x].innerHTML = `<li class="position-relative">
            <a href="" class="d-block text-nowarp">
            ${mynavi[x].title}
            </a>
            <div class="position-absolute">
              <ul>`;
              // for

  this.document.querySelectorAll("#navi>ul")[x].innerHTML +=  ` </ul></div>`;
}

})