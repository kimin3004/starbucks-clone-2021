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

//THIS YEAR
const thisYear= document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //생성자함수