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
          {
            atext : "Figma",
            href : "http://www.figma.com",
          },
          {
            atext : "Figma",
            href : "http://www.figma.com",
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

let familytag = '';
familytag += `<h2>${family.d1text}</h2> <ul>`

for( x of family.familysite ){
      familytag += `<li>${x.atext}</li>`
}
familytag +=`</ul>`

window.addEventListener('load',function(){
      document.querySelector("#family ul").innerHTML = familytag;

});

