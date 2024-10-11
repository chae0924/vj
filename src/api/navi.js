

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

  faqtag += `<div class="container py-5 px-0">`;
  // x 변수가 같아도 for구문 밖으로 못나가므로 상관없음
  for( x of faqcontent ){
            faqtag += `<dl class="mb-0"><dt class="ps-2 border-bottom py-3 fs-5 d-flex justify-content-between align-items-center"><span> ${x.faqQ}</span> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" class="bi bi-chevron-down m-2" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
            </dt>
            <dd class="py-2 m-0">`;

            const faqcontentArr = x.faqA.split("|");

            for(j of faqcontentArr){
                    faqtag +=`<span class="d-block"> ${j} </span>`;
            }
            
faqtag += `</dd></dl>`;
            }
    faqtag += `</div>`;
  faqtarget.innerHTML = faqtag;

  



  //패밀리노출
  this.document.querySelector("#family h2").addEventListener('click', function(){
    this.classList.toggle('open');
  })


  // 사전 인터뷰 dt들 저장
  const faqdts = document.querySelectorAll("#faqcontent .content div dt");

// 각 dt에 클릭 이벤트 추가
faqdts.forEach((ele, idx) => {
  ele.addEventListener('click', function(){

      faqdts.forEach(function(sibling){
      if (sibling === ele ){
        ele.classList.toggle('expend');
          
      } else {
              sibling.classList.remove('expend');
      }
    });
  });
});


})
// 함수제작