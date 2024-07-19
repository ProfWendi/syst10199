"use strict";

// week 8 exercise 4 and 5 (because of fetch(), must test on dev.fast)

let tabs = null;

document.addEventListener("DOMContentLoaded", init);

let linkClick = {
    handleEvent(event) {
        let articles = document.body.querySelectorAll("article");
        let id = event.target.href.substring(event.target.href.indexOf("#") + 1);
        let art = document.body.querySelector((id));
        hideAll(articles);
        art.classList.remove("hide");
        // question 5 vvvv
        let links = document.body.querySelectorAll("header nav a");
        for (let a of links) {
            a.classList.remove("current-link");
        }
        event.target.classList.add("current-link");
        // question 5 ^^^^
        event.preventDefault();
    }
}

function init() {
    fetch("data/tabs.json")
        .then(response => response.json())
        .then(data => {
            tabs = data;
            let articles = document.querySelectorAll("article");
            hideAll(articles);
            articles[0].classList.remove("hide");

            let nav = document.body.querySelector("header nav");
            for (let item in tabs) {
                let a = document.createElement("a");
                a.href = "#" + tabs[item].id;
                let aText = document.createTextNode(tabs[item].shortName);
                a.append(aText);
                a.addEventListener("click", linkClick);
                nav.append(a);
            }

            document.querySelector("header nav a").classList.add("current-link");
        }).catch(error => console.log(error));
}
function hideAll(articles) {

    for (let i = 0; i < articles.length; i++) {
        articles[i].classList.add("hide");
    }
}
