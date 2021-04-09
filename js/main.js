/* .search누르면 input(type:text)이 focus되며 focused라는 class가 부여되고 attribute로 placeholder에 통합검색이라는 글자가 생상된다. 그리고 focus가 해재되면 (blur)되면 focused라는 class가 해제되고(remove) placeholder에 통합검색이라는 글자가 해제된다(빈요소'') */

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function (){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

/* BADGE LIBRARY */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
//_.throttle(함수,시간)--lodash에서
window.addEventListener('scroll', _.throttle(
    function (){
        console.log(window.scrollY);
        if(window.scrollY > 500){
            //배지숨기기
            //badgeEl.style.display = 'none';
            //gsap.to(요소, 지속시간, 옵션);
            gsap.to(badgeEl, .6, {
                opacity: 0,
                display: 'none'
            });
            //to-top 버튼 보이기
            gsap.to('#to-top',.2,{
                x: 0
                
            });

        }
        else{
            //배지보이기
            //badgeEl.style.display = 'block';
            gsap.to(badgeEl, .6, {
                opacity: 1,
                display: 'block'
            });
            //to-top 버튼 숨기기
            gsap.to(toTopEl,.2,{ //---->요소에 CSS 선택자 이름 적어도 적용됨!
                x: 100 //(오른쪽으로 100px 이동)

            });  
        }
    },300
))

//to-top 누르면 이동하게 하기

toTopEl.addEventListener('click',function () {
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});


/* FADE-IN 나타나게하기 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function ( fadeEl, index ){
    //gsap.to(요소, 지속시간, 옵션{객체데이터형태});
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});


//new Swiper('CSS선책자', 옵션{객체데이터형태})
new Swiper('.notice-line .swiper-container', {
 direction : 'vertical',
 autoplay: true,
 loop: true
 //loop 때문에 4번쨰 슬라이드 끝나도 1번쨰로 다시 돌아감
} );

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 갯수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    autoplay:{
        delay:5000
    },
    loop: true,
    pagination:{
        el: '.promotion .swiper-pagination', // 페이지 번호 선택자
        clickable : true // 사용자의 페이지 번호 요소 제어
    },
    navigation : {
        prevEl: `.promotion .swiper-prev`,
        nextEl: `.promotion .swiper-next`
    }
});

//new Swiper('CSS선책자', 옵션{객체데이터형태}) --footer 부분
new Swiper('.awards .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl:`.awards .swiper-prev`,
        nextEl:`.awards .swiper-next`
    }
})




//TOGGLE-PROMOTION (JS로는 class만 추가, 보이고 안보이고는 CSS)
const promotionEl=document.querySelector('.promotion');
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion=!isHidePromotion
    // !뒤에 값을 반대로 만들어 주세요
    // 즉, isHidePromotion가 false 이면 !로 인해 true로 값이 변하게 됨
    if (isHidePromotion){
        //숨김 처리!
        promotionEl.classList.add('hide');
        //-> CSS로 숨겨지는 스타일 추가
    }
    else{
        //보임 처리!
        promotionEl.classList.remove('hide');
    }
});



/* YOUTUBE__FLOATING */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size){
    // 애니메이션 라이브러리 gsap.to(요소,시간,옵션);
    gsap.to(
        selector,  // 선택자
        random(1.5, 2.5),  //애니메이션 동작 시간
        {   //옵션
            y: size,
            repeat: -1,    //무한반복 (현재라이브러리에서만지원)
            yoyo:true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


/* SCROLL MAGIC */
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8, //viewport (세로 0~1)

    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

//THIS YEAR
const thisYear= document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //생성자함수



