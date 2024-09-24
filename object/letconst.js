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

// 터미널에 node object/letconst  파일 안 object안 letconst의 콘솔 명령어 실행

// console.log(family.familysite[0].atext, family.familysite[0].href);
// const mytag =`<a href="${family.familysite[2].href}"> ${family.familysite[2].atext}</a>`;

// console.log(mytag);




// 모든 항목 출력 (for...of)
for (const site of family.familysite) {
  console.log(site.atext, site.href);
}

// HTML 태그 생성
let mytags = '';
for (const site of family.familysite) {
  mytags += `<a href="${site.href}">${site.atext}</a> `;
}

console.log(mytags);