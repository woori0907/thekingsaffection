'use strict';

const characterMenu = document.querySelector(".sidebar__menu");
const characterImage = document.querySelector(".content__characterimg");
const characterName = document.querySelector(".description__title");
const characterActor = document.querySelector(".description__actor");
const characterSubtitle = document.querySelector(".description__subtitle");
const characterArticle = document.querySelector(".description__article");

const characterContents = document.getElementsByClassName("characters__content");

const INIT_PROFILE_INDEX = 0;

// const renderProfile = (index) =>{
//     const currentIndex = index;

//     characterImage.style.backgroundImage = `url(${characterList[currentIndex].backgroundImage})`;
//     characterName.innerHTML = `<img src="${characterList[currentIndex].name}">`;
//     characterActor.innerText = `${characterList[currentIndex].actor}`;
//     characterSubtitle.innerText = `${characterList[currentIndex].subtitle}`;
//     characterArticle.innerText = `${characterList[currentIndex].article}`;
// }

const clickMenu = (event) => {
    const currentIndex = event.target.getAttribute("data-index");
    // renderProfile(event.target.getAttribute("data-index"));
    for (var i=0; i<characterContents.length; i++) {
        characterContents[i].classList.remove('on');
      }
    characterContents[currentIndex].classList.add('on');
}

// renderProfile(INIT_PROFILE_INDEX);

characterMenu.addEventListener('click', clickMenu);