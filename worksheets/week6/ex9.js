"use strict";
// ex 9 week 6
function getArticles() {
    fetch("data/articles.json")
        .then(response => response.json())
        .then(data => {
            let main = document.createElement("main");
            let nav = document.createElement("nav");
            for (const article of data) {
                const art = document.createElement("article");
                const h2 = document.createElement("h2");
                h2.textContent = article.title;
                art.append(h2);
                art.id = article.id;
                for (const c of article.content) {
                    let p = document.createElement("p");
                    p.textContent = c;
                    art.append(p);
                }
                main.append(art);

                const a = document.createElement("a");
                a.href = `#${art.id}`;
                a.textContent = article.title;
                nav.append(a);
            }
            main.prepend(nav);
            document.body.querySelector("header").after(main);
        })
        .catch(error => {
            console.log(error);
        });
}