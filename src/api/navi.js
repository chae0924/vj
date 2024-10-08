

window.addEventListener('load',function(){
  
  

  let navitag = ""; // 값 변경 가능한 변수를 선언해준다
  const navitarget =  this.document.querySelector("#navi>ul"); // 바뀌지 않는 변수 선언

  for( x of mynavi ){
    navitag += `<li class="position-relative">
            <a href="${x.href}" class="d-block text-nowarp">${x.title}</a>
            <div class="position-absolute">
              <ul>`;
              for ( i of x.submenu){
               navitag += `<li><a href="${i.href}" class="text-nowarp">${i.text}</a></li>`
              }

    navitag += `</ul>
            </div>
          </li>`
  }
  navitarget.innerHTML = navitag;


  //호출영역
  this.document.querySelector("#family h2").innerHTML = family.d1text;

  let familylist  = '';

  // for(x in family.faimilysite ){
  //     familylist += `<li>${family.faimilysite[x].atext}</li>`;
  // }

  for(x of family.faimilysite ){
    familylist += `<li>${x.atext}</li>`;
  }
  this.document.querySelector("#family ul").innerHTML = familylist;


  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.classList.toggle('open');
  })

})
