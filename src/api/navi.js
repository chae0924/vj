// window.onload = function(){
//   // 화면이 로딩이 끝나면 처리(밑이랑 같은거여서 주석처리 됨.)

// }

let familytag = '';
familytag += `<h2>${family.d1text}</h2> <ul>`

for( x of family.familysite ){
      familytag += `<li>${x.atext}</li>`
}
familytag +=`</ul>`
// 패밀리노출


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

})