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
//_.throttle(함수,시간)
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
        }
        else{
            //배지보이기
            //badgeEl.style.display = 'block';
            gsap.to(badgeEl, .6, {
                opacity: 1,
                display: 'block'
            });
        }
    },300
))

/* FADE-IN 나타나게하기 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function ( fadeEl, index ){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7
        opacity: 1
    });
});