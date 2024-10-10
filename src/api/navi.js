

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




  // faq

  let faqtag = ""; // 값 변경 가능한 변수를 선언해준다
  const faqtarget =  this.document.querySelector("#faqcontent  .content"); // 바뀌지 않는 변수 선언

  faqtag += `<div class="container py-5">`;
  // x 변수가 같아도 for구문 밖으로 못나가므로 상관없음
  for( x of faqcontent ){
            faqtag += `<dl class="py-1"><dt class="border-bottom py-2 fs-4"> ${x.faqQ}</dt>
            <dd class="py-2 fs-5">${
              // console.log(x.faqA.split("|"),  Array.isArray(x.faqA.split("|"))  )
              x.faqA.split("|").join("<br>")

            }</dd></dl>`;
            }
    faqtag += `</div>`;
  faqtarget.innerHTML = faqtag;



  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.classList.toggle('open');
  })

})
