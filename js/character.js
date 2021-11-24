'use strict';

const characterImage = document.querySelector(".content__characterimg");
const characterName = document.querySelector(".description__title");
const characterActor = document.querySelector(".description__actor");
const characterSubtitle = document.querySelector(".description__subtitle");
const characterArticle = document.querySelector(".description__article");

const renderProfile = () =>{
    characterImage.style.backgroundImage = `url(${characterList[0].backgroundImage})`;
    characterName.innerHTML = `<img src="${characterList[0].name}">`;
    characterActor.innerText = `${characterList[0].actor}`;
    characterSubtitle.innerText = `${characterList[0].subtitle}`;
    characterArticle.innerText = `${characterList[0].article}`;
}

renderProfile();