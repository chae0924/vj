window.addEventListener('load', function() {
  const mainBanner = new Swiper('.swiper-container', {
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 수
    spaceBetween: 0, // 슬라이드 사이의 간격
    effect: "fade", // 페이드 효과
    loop: true, // 슬라이드 반복
    autoplay: {
      delay: 6000, // 6초마다 슬라이드 변경
      disableOnInteraction: false, // 사용자 인터랙션 후에도 autoplay 유지
    },
    pagination: {
      el: ".indicate",
      clickable: true,
      renderBullet: function (index, className) {

        var swiperSlide = this.slides[index];
        
        var btnMsg = swiperSlide.dataset.btnmsg;

        return '<span class="' + className + ' w-auto h-auto p-2 mx-3 bg-transparent border border-white ">' + btnMsg + '</span>';
      },
    },
    

    on: {
      init: function() {
        // 초기화 시 실행할 코드
      },
      realIndexChange: function() {
        const currentIndex = this.realIndex;

        // 모든 slide- 클래스를 제거
        Array.from(document.body.classList)
          .filter(className => className.startsWith("slide-"))
          .forEach(className => document.body.classList.remove(className));

        // 현재 슬라이드에 대해 클래스 추가
        document.body.classList.add("slide-" + currentIndex);

        console.log("현재 슬라이드 인덱스:", currentIndex);
      }
    }
  });
});
