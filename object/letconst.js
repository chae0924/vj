const family = {
        d1text : "RealativeSite",
        familysite : [
          {
            atext : "GIT",
            href : "http://www.github.com/chae0924",
          },
          {
            atext : "Notion",
            href : "http://www.notion.so",
          },
          {
            atext : "Figma",
            href : "http://www.figma.com",
          },
        ]
}

// window.onload = function(){
//   // 화면이 로딩이 끝나면 처리(밑이랑 같은거여서 주석처리 됨.)

// }

window.addEventListener('load',function(){
      document.querySelector("#family h2").innerHTML +=family.d1text;
      // 특정 태그 안에 태그를 삽입하기
      document.querySelector("#family ul").innerHTML =`<li>${family.familysite[0].atext}</li>`;
      // 추가 대입식 +=
      document.querySelector("#family ul").innerHTML +=`<li>${family.familysite[1].atext}</li>`;
      document.querySelector("#family ul").innerHTML +=`<li>${family.familysite[2].atext}</li>`;

});

