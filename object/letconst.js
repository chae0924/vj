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
// 패밀리노출
window.addEventListener('load',function(){
      // document.querySelector("#family ul").innerHTML = familytag;

});

const mynavi = [
  {
      title: "대박적",
      href: "#long-menu",
      submenu: [
          { text: "소뉴 1", href: "#submenu1" },
          { text: "소뉴 2", href: "#submenu2" },
          { text: "소메뉴 3", href: "#submenu3" },
          { text: "소메뉴 4", href: "#submenu4" },
          { text: "소메뉴 5", href: "#submenu5" }
      ]
  },
  {
      title: "div얖 class침ㄴㄴ",
      href: "#menu1",
      submenu: [
          { text: "소뉴 1", href: "#submenu1-1" },
          { text: "소뉴 2", href: "#submenu1-2" },
          { text: "소메뉴 3", href: "#submenu1-3" },
          { text: "소메뉴 4", href: "#submenu1-4" },
          { text: "찾아오시는 길", href: "#long-path" }
      ]
  },
  {
      title: "대메뉴 2",
      href: "#menu2",
      submenu: [
          { text: "소메뉴 1", href: "#submenu2-1" },
          { text: "소메뉴 2", href: "#submenu2-2" },
          { text: "소메뉴 3", href: "#submenu2-3" },
          { text: "소메뉴 4", href: "#submenu2-4" },
          { text: "소메뉴 5", href: "#submenu2-5" }
      ]
  },
  {
      title: "대메뉴 3",
      href: "#menu3",
      submenu: [
          { text: "소메뉴 1", href: "#submenu3-1" },
          { text: "소메뉴 2", href: "#submenu3-2" },
          { text: "소메뉴 3", href: "#submenu3-3" },
          { text: "소메뉴 4", href: "#submenu3-4" },
          { text: "소메뉴 5", href: "#submenu3-5" }
      ]
  },
  {
      title: "대메뉴 4",
      href: "#menu4",
      submenu: [
          { text: "소메뉴 1", href: "#submenu4-1" },
          { text: "소메뉴 2", href: "#submenu4-2" },
          { text: "소메뉴 3", href: "#submenu4-3" },
          { text: "소메뉴 4", href: "#submenu4-4" },
          { text: "소메뉴 5", href: "#submenu4-5" }
      ]
  }
];

for(z in mynavi.submenu){
  // this.document.querySelectorAll("#navi>ul>li>a")[z].innerHTML = z.text;
}

