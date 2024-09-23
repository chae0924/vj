const family = {
        d1text : "패밀리사이트",
        familysite : [
            "네이버","구글","다음","유튜브","쿠팡"
        ]
}

// 터미널에 node object/letconst  파일 안 object안 letconst의 콘솔 명령어 실행

console.log(family.familysite.join(", "))

for( let x in family.familysite ){
  // index
  console.log(x)
}

for( let x of family.familysite ){
  // value
  console.log(x)
}